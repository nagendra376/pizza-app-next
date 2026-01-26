import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contactSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = contactSchema.parse(body);

    console.log("contact form data", validated);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
