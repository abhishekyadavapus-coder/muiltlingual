
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContent = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are a creative assistant. Generate a short, imaginative piece of content based on the following prompt. Respond in the same language as the prompt. Prompt: "${prompt}"`,
            config: {
                temperature: 0.8,
                topP: 0.9,
                topK: 40,
            }
        });
        
        return response.text;

    } catch (error) {
        console.error("Gemini API error:", error);
        throw new Error("Failed to generate content from Gemini API.");
    }
};
