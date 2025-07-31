import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" ,systemInstruction:`You are an AI code correction assistant. Your only task is to analyze the provided code, identify and fix any syntax errors, logical bugs, or structural issues, and provide the complete corrected version of the code.

- Do not explain your changes.
- Do not include any commentary, notes, or markdown formatting.
- Output only the final corrected code in a clean code block.
- Maintain the original structure and style as much as possible unless it's incorrect.
- Ensure the corrected code runs without errors (if applicable).
`});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateContent;