import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
const index = pc.index(process.env.PINECONE_INDEX_NAME!);

async function embed(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        content: { parts: [{ text }] },
        outputDimensionality: 768,
      }),
    }
  );
  const data = await res.json();
  if (!data.embedding) {
    console.error("Embedding request failed:", JSON.stringify(data));
    throw new Error("No embedding returned — see logged response above.");
  }
  return data.embedding.values;
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages?.[messages.length - 1]?.content ?? "";
  const apiKey = process.env.GEMINI_API_KEY!;

  // 1. Embed the user's question
  const queryEmbedding = await embed(lastMessage, apiKey);

  // 2. Vector search against Pinecone
  const results = await index.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
  });

  const retrievedContext = results.matches
    .map((m) => m.metadata?.text)
    .filter(Boolean)
    .join("\n\n");

  // 3. Generate, grounded in only what was retrieved
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: `You are a helpful assistant answering visitor questions about Saad Wajid's portfolio. Use ONLY the context below — if it doesn't cover the question, say you're not sure.\n\nCONTEXT:\n${retrievedContext}`,
            },
          ],
        },
        contents: messages.map((m: { role: string; content: string }) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      }),
    }
  );

  const data = await response.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  return NextResponse.json({ reply: reply ?? "Sorry, I couldn't generate a reply." });
}