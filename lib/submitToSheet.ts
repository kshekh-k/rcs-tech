export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;

  /**
   * Honeypot field.
   * Must remain empty. If filled, it's likely a bot.
   */
  website?: string;

  /**
   * Google reCAPTCHA Enterprise token
   */
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Response isn't JSON
    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return {
        success: false,
        message: "Invalid response received from server.",
      };
    }

    const result: SubmitResult = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          result.message ||
          "Unable to submit your inquiry. Please try again.",
      };
    }

    return result;
  } catch (error) {
    console.error("Contact Form Error:", error);

    return {
      success: false,
      message:
        "Something went wrong while submitting the form. Please try again later.",
    };
  }
}