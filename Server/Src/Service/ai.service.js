import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" ,systemInstruction:`You are an expert AI code interpreter. Your primary role is to analyze the provided code snippet and predict its exact output as if it were executed. 

Follow these steps:
1.  First, provide the "Final Output" in a distinct section.
2.  If the code has no visible output, state that clearly.
3.  After the output, add a "Code Explanation" section where you describe what the code does step-by-step to arrive at the result.`});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateContent;