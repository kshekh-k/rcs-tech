import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  // Honeypot field — bots fill it in, real users never see it.
  if (data.website) {
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    });
  }

  const scriptUrl = process.env.GOOGLE_SHEET_WEB_APP;
  const token = process.env.SHARED_SECRET_TOKEN;

  if (!scriptUrl || !token) {
    console.error("GOOGLE_SHEET_WEB_APP or SHARED_SECRET_TOKEN is not configured.");
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        token,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return NextResponse.json(
      { success: false, message: "We couldn't submit your inquiry. Please try again." },
      { status: 502 }
    );
  }
}
