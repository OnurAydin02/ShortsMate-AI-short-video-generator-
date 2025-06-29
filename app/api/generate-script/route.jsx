import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `write two different scripts for a 30-second video on the Topic: {topic}.
Do not add scene description.
Do not add anything in braces, just return the plain story in text.
Give me response in JSON format and follow the schema:
{
  "scripts": [
    {
      "content": ""
    }
  ]
}`;

export async function POST(req) {
  const { topic } = await req.json();

  const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);
  const result = await generateScript.sendMessage(PROMPT);
  const resp = result?.response?.text();
  console.log("generate-script",resp)
  return NextResponse.json(JSON.parse(resp));
}
