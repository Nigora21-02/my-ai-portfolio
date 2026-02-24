import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
type ChatMessage = {
  sender: 'user' | 'bot'
  text: string
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  if (!Array.isArray(messages)) {
    return NextResponse.json({ error: 'Felaktigt meddelande' }, { status: 400 })
  }
  const systemPrompt = process.env.DOCKAN_PROMPT?.trim();
  console.log("DOCKAN_PROMPT exists:", !!systemPrompt);
  const chatHistory = (messages as ChatMessage[]).map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text,
  })) as { role: "user" | "assistant"; content: string }[]

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // OBS! detta är GPT-4.1 mini
      messages: [
        {
          role: 'system',
          content: systemPrompt || "You are Dockan.",
        },
        ...chatHistory
      ],
    })

    console.log('🔍 Mottaget meddelande:', messages)
    console.log('🤖 Svar från OpenAI:', completion.choices[0].message?.content)
const reply = completion.choices?.[0]?.message?.content || "Hmm, något gick fel.";
    return NextResponse.json({
      reply
    })
  } catch (error) {
    console.error('Error fetching OpenAI API:', error)
    return NextResponse.json({

      error: 'OpenAI error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 })
  }
}