import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: "Missing Telegram credentials" },
      { status: 500 },
    );
  }

  try {
    const { name, phone, email } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const message = `
📨 *Новая заявка*

👤 *Имя:* ${name}
📱 *Телефон:* ${phone}
✉️ *Почта:* ${email}
`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!tgRes.ok) {
      throw new Error(`Telegram API error`);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
