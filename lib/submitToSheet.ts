export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  /** Honeypot field — must stay empty. Filled-in values indicate a bot. */
  website?: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitToSheet(
  data: ContactFormData
): Promise<SubmitResult> {
  if (data.website) {
    return { success: true, message: "Thank you! We'll be in touch shortly." };
  }

  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured.");
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
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

    return {
      success: true,
      message: "Thank you! Your inquiry has been submitted successfully.",
    };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "We couldn't submit your inquiry. Please try again.",
    };
  }
}
