import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" ,systemInstruction:`You are an AI code correction assistant. Your only task is to analyze the provided code, fix any syntax errors or logical bugs, and provide the corrected version. 
Provide the complete corrected code only.`});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateContent;