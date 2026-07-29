import { NextRequest, NextResponse } from "next/server";

// TODO: replace with real retrieval — embed `lib/data.ts` content (or your
// case-study markdown) once, at build/deploy time, store the vectors in a
// small JSON file or lightweight vector DB, then do a similarity lookup
// here against the user's latest message before calling the LLM.
//
// One shared knowledge base for every visitor. The only per-visitor state
// is the `messages` array the client sends each request — nothing is
// persisted server-side.

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages?.[messages.length - 1]?.content ?? "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply:
        "Chat isn't wired up to a model yet — add ANTHROPIC_API_KEY in your Vercel project settings.",
    });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system:
          "You are a helpful assistant answering visitor questions about Saad Wajid's portfolio, projects, and experience. Be concise and specific. TODO: inject retrieved context chunks about Saad's real projects here.",
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    const data = await response.json();
    const reply = data?.content?.find((c: { type: string }) => c.type === "text")?.text;

    return NextResponse.json({ reply: reply ?? "Sorry, I couldn't generate a reply." });
  } catch (err) {
    return NextResponse.json(
      { reply: "Something went wrong reaching the model." },
      { status: 500 }
    );
  }
}
