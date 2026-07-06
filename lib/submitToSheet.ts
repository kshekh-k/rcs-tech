export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service?: string;
  message: string;
  /** Honeypot field — must stay empty. Filled-in values indicate a bot. */
  website?: string;
  recaptchaToken: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitToSheet(
  data: ContactFormData
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return (await response.json()) as SubmitResult;
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "We couldn't submit your inquiry. Please try again.",
    };
  }
}
