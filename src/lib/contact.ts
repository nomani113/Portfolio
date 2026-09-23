export const contactServices = [
  "Website Development",
  "Full-Stack Development",
  "E-commerce",
  "AI Integration",
  "AI Assistant / Chatbot",
  "API Integration",
  "SaaS Application",
  "UI/UX Design",
  "Custom Software",
  "Other",
] as const;

export type ContactService = (typeof contactServices)[number];

export const budgetRanges = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Let's Discuss",
] as const;

export type BudgetRange = (typeof budgetRanges)[number];

export const projectTimelines = [
  "ASAP",
  "1–2 Months",
  "3–6 Months",
  "6+ Months",
  "Not Sure",
] as const;

export type ProjectTimeline = (typeof projectTimelines)[number];

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

/**
 * Submits the inquiry to a custom endpoint or defaults to native Netlify Forms.
 */
export async function submitInquiry(
  payload: InquiryPayload,
  endpoint?: string,
): Promise<{ ok: boolean; message: string }> {
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "We could not send your inquiry. Please try again or reach out directly.",
      };
    }

    return {
      ok: true,
      message: "Thank you! Your project inquiry has been received. Our engineering team will review it and follow up promptly.",
    };
  }

  // Default to native Netlify Forms handling
  try {
    const body = new URLSearchParams({
      "form-name": "contact",
      name: payload.name,
      email: payload.email,
      company: payload.company,
      phone: payload.phone,
      service: payload.service,
      budget: payload.budget,
      timeline: payload.timeline,
      details: payload.details,
    }).toString();

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      return {
        ok: true,
        message: "Thank you! Your project inquiry has been submitted successfully. Our engineering team will contact you within 24 hours.",
      };
    }

    return {
      ok: false,
      message: "We could not submit the form to Netlify. Please try again or email us directly at hello@saza.dev.",
    };
  } catch {
    return {
      ok: false,
      message: "An unexpected network error occurred while submitting. Please try again or use direct email.",
    };
  }
}
