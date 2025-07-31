import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" ,systemInstruction:`You are an expert AI code interpreter. Your primary role is to analyze the provided code snippet and predict its exact output as if it were executed. 

Follow these steps:
1:check the code 
2:and just provide final output of the code `});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateContent;