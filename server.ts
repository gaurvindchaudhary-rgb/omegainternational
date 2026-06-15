import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsers
  app.use(express.json());

  // Instantiate server-side Gemini client
  const geminiApiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  
  if (geminiApiKey) {
    ai = new GoogleGenAI({
      apiKey: geminiApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  } else {
    console.warn('GEMINI_API_KEY environment variable is absent. Utilizing mock local fallback engine.');
  }

  // 1. API ROUTES
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message content is mandatory.' });
      }

      if (!ai) {
        // Fallback response if API key is absent
        return res.json({ 
          reply: `I am speaking from Omega's local compliance guide. To unlock full real-time analysis, please configure GEMINI_API_KEY in the Secrets panel.\n\nRelated to your query: Any service or supplier operations in India should carefully verify GSTR returns and Section 44AB threshold requirements. Standard GST registration starts at ₹20L turnover (₹40L for major commodities). Let us book a session with Ankur Chaturvedi to structure a detailed legal strategy.`
        });
      }

      // Query Gemini!
      const systemInstructions = `
You are the expert conversational AI assistant for Omega International Consultants Pvt. Ltd., an elite Indian tax consulting and financial advisory firm based in New Delhi. You speak with high-end corporate composure, similar to advisors at Big-4 firms (Deloitte, PwC, KPMG, EY India).
Your founder & managing director is Ankur Chaturvedi, FCA, LLB (Ex-PwC Senior Associate).

Your scope is strictly limited to Indian Taxation, GST, Income Tax (schedules, regimes, standard exemptions under Section 115BAC), Auditing (CARO 2020 reporting, statutory and internal under Section 138), Company Incorporations (LLP, Pvt Ltd), and Compliance (ROC filings like AOC-4 and MGT-7).

Guidelines:
1. Provide accurate, professional information based on Indian tax laws for FY 2026-27 (New regime is default with standard deduction of 75k for salaried. Old regime retains deductions but higher progressive slabs).
2. For B2B suppliers, mention E-Invoicing requirements (mandated for turnover > 5 Cr) and GSTR-2B Input Tax Credit (ITC) reconciliation.
3. Be professional, direct, structured, and helpful. Use markdown bullet points and bold headers to summarize complex laws.
4. Keep paragraphs short and highly readable.
5. Remind the user that they can try our built-in GST and Income Tax simulators located on the website dashboard.
6. Encourage scheduling a partner appointment or registering on our OTP-secured Client Portal to download reconciliation ledgers securely.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: message,
        config: {
          systemInstruction: systemInstructions,
          temperature: 0.7
        }
      });

      const text = response.text || "I apologize, but I couldn't formulate a response. Let us try reformulating your compliance query.";
      res.json({ reply: text });

    } catch (err: any) {
      console.error('Gemini API Route failure:', err);
      res.status(500).json({ 
        reply: `Our server experienced a connection bottleneck. Let's try once more.\n\nQuick compliance tip: Ensure your monthly purchases are completely reconciled against GSTR-2B to safeguard your input credits.` 
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Omega Corporate Backend' });
  });

  // 2. ENVIROMENT-SENSITIVE FILE SERVING (VITE MIDDLEWARE / STATIC FILES)
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    // Mount Vite's middleware
    app.use(vite.middlewares);
  } else {
    // Serve build from dist folders
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app._router.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Bind server
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Omega Corporate Server running perfectly on http://localhost:${PORT}`);
  });
}

startServer();
