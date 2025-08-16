import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { answers } = await req.json();
    if (!answers) return NextResponse.json({ message: "Answers required" }, { status: 400 });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ message: "Missing GEMINI_API_KEY" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a recommender for a directory of AI tools.
Given the quiz answers: ${JSON.stringify(answers)}
Return EXACT JSON array of 3 objects with: name, description (<=30 words), category, link.
Respond ONLY with JSON.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Defensive parse — if model wrapped JSON in code fences
    const jsonText = text
      .trim()
      .replace(/^```(json)?/i, "")
      .replace(/```$/i, "");
    const data = JSON.parse(jsonText);

    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ message: "Error generating recommendation" }, { status: 500 });
  }
}
