import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_ACTION = "contact_form_submit";
const RECAPTCHA_MIN_SCORE = 0.5;

async function isHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_API_KEY;

  if (!secret) {
    console.error("RECAPTCHA_SECRET_API_KEY is not configured.");
    return false;
  }

  if (process.env.NODE_ENV === "development") {
    console.log("⚡ Bypassing reCAPTCHA verification in development environment.");
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });

    if (!response.ok) {
      console.error(`reCAPTCHA verify request failed with status ${response.status}`);
      return false;
    }

    const result = await response.json();
    const actionMatches = result.action === undefined || result.action === RECAPTCHA_ACTION;
    const score = result.score ?? 1; // checkbox-type keys have no score; treat as pass

    if (!result.success || !actionMatches) {
      console.error("reCAPTCHA token invalid:", result["error-codes"]);
    }

    return Boolean(result.success) && actionMatches && score >= RECAPTCHA_MIN_SCORE;
  } catch (error) {
    console.error("Failed to verify reCAPTCHA token:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  console.log("🔥 API /api/contact called");
  const raw = await request.text();

  console.log("===== RAW REQUEST =====");
  console.log(raw);

  const data = JSON.parse(raw);

  console.log("===== PARSED DATA =====");
  console.log(JSON.stringify(data, null, 2));
  // Honeypot field — bots fill it in, real users never see it.
  if (data.website) {
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    });
  }

  if (!(await isHuman(data.recaptchaToken))) {
    return NextResponse.json(
      { success: false, message: "We couldn't verify your submission. Please try again." },
      { status: 403 }
    );
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

    // console.log("Incoming Contact Data:");
    // console.log(JSON.stringify(data, null, 2));


    const payload = {
      token,
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      message: data.message,
      submittedAt: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      }),
    };

    console.log("===== GOOGLE PAYLOAD =====");
    console.log(JSON.stringify(payload, null, 2));

    // const response = await fetch(scriptUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", },
    //   body: JSON.stringify(payload),
    // });

    // if (!response.ok) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    //const responseText = await response.text();
    const result = await response.json();

    console.log("========== GOOGLE RESPONSE ==========");
    console.log(result);
    // console.log(responseText);

    // if (!response.ok) {
    //   throw new Error(responseText);
    // }

    return NextResponse.json({
      success: true,
      message: result.message || "Thank you! Your inquiry has been submitted successfully.",
      googleResponse: result,
      payload,
    });
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return NextResponse.json(
      { success: false, message: "We couldn't submit your inquiry. Please try again." },
      { status: 502 }
    );
  }
}
