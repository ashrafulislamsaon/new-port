/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Dynamic Web App Blueprint compilation API endpoint (Gemini integration)
app.post('/api/blueprint', async (req: Request, res: Response) => {
  const { industry, features, brief } = req.body;

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.includes('YOUR_')) {
      // Return beautiful fallback mock blueprint if credentials are not configured yet
      return res.json({
        blueprint: `
### 📑 WordPress Engineering Architecture Blueprint

**Target Sector:** ${industry || 'Clinic/E-commerce/Enterprise'} Web Infrastructure
**Performance Mandate:** Lighthouse Speed target: 98%+ (CLS < 0.1, LCP < 0.9s, FID < 50ms)
**Security Protocol:** SSL + Obfuscated Endpoint REST Hooks + Symmetric Payload Lockers.

---

#### 1. Core Visual Framework & Theme Strategy
- **Standard Stack:** Custom Hand-crafted Theme (Zero visual builder dependencies).
- **Core CSS:** Tailored compiled styles.
- **Admin Layouts:** Bespoke Gutenberg blocks designed for medical intake parameters.

#### 2. Advanced Relational Cache Configurations
- **Database Index Optimization:** Optimized query mapping rules for wp_postmeta fields (bypassing slow EAV loops).
- **Edge Caching Engine:** Dynamic Redis caching maps for REST endpoints.
- **Image Compression Pipeline:** AVIF auto-conversion with progressive responsive grids.

#### 3. Deliverable Scope & Schedule Estimation
- **Engineering Timeline:** approximately 16 working days on active staging sandbox.
- **Vetting Checklist:** HIPAA form audits, security load spikes testing (up to 1,000 concurrent shopper logs).
- **Pricing Scope Estimate:** Custom quote starting at $3,500.

---
*Ready to execute? Scroll below to initiate a live consultation audit with our senior developer.*
        `
      });
    }

    // Lazy initialization of Google GenAI to avoid compile crash if key is undefined
    const ai = new GoogleGenAI({ apiKey });

    const promptMessage = `
You are a highly premium, elite Lead Enterprise WordPress Software Architect writing a technical audit and structural proposal for a potential high-ticket client.
Create a highly professional, detailed, premium, markdown-formatted "WordPress Engineering Architecture Blueprint".

Take into account the following custom parameters specified by the client:
- Target Industry Segment: ${industry || 'Clinic / Healthcare'}
- Selected Critical Features: ${Array.isArray(features) ? features.join(', ') : 'Custom Speed optimizers, React Gutenberg blocks'}
- Specific Project Brief & Client Directives: "${brief || 'High speed clinic scheduling portal with intake crm mappings'}"

Structure your response into exactly these sections:
### 📑 WordPress Engineering Architecture Blueprint
- **Target Sector:** [Sector Name]
- **Performance Mandate:** [Include standard stats e.g. speed metrics targets, Largest Contentful Paint under 1.0s, Lighthouse 98%+ target]
- **Security Protocol:** [Explain security standards e.g. symmetrical encryption, WP API obfuscation]

#### 1. Core Visual Framework & Theme Strategy
Write 2-4 comprehensive bullet points highlighting how a custom hand-crafted theme utilizing React block models is superior to bloated Elementor page builders and keeps layouts bulletproof.

#### 2. Advanced Relational Cache Configurations
Write 2-4 comprehensive bullet points on database optimization (such as re-indexing wp_postmeta SQL fields for quicker lookups) and CDN caching configurations (Redis layer, global TTFB under 300ms).

#### 3. Deliverable Scope & Schedule Estimation
Write 2-3 bullet points offering a realistic timeline (e.g. 14-22 Staging Days) and testing checklists (such as HIPAA validation or concurrent transaction reviews under load spikes). Outline high-end transparent engineering fees (e.g., $2.5k - $6k range based on modules).

Make sure the language sounds objective, prestigious, highly reassuring, and tailored to business owners and clinical managers looking for the best performance and security money can buy. Do not include loose developer conversations, say nothing irrelevant. Output only clean standard markdown parameters.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptMessage,
    });

    const parsedText = response.text || "Architect blueprint compilation timed out.";

    res.json({ blueprint: parsedText });
  } catch (error: any) {
    console.error('Gemini processing loop error:', error);
    res.status(500).json({ error: 'System mapping failed to compile specification.' });
  }
});

// Serve frontend assets in development / production routing modes
import { createServer as createViteServer } from 'vite';

async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server launched on port ${PORT}`);
  });
}

setupServer();
