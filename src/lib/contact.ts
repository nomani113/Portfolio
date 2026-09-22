export const contactServices = [
  "Website Development",
  "E-commerce Development",
  "AI Solutions",
  "Food Delivery Platform",
  "SaaS Development",
  "UI/UX Design",
  "Backend/API Development",
  "Other",
] as const;

export type ContactService = (typeof contactServices)[number];

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
};

/**
 * Placeholder integration for Formspree, an email service, or a custom API.
 * Set `siteConfig.contact.formEndpoint` when the backend is ready.
 */
export async function submitInquiry(
  payload: InquiryPayload,
  endpoint: string,
): Promise<{ ok: boolean; message: string }> {
  if (!endpoint) {
    return {
      ok: false,
      message:
        "The contact form is ready, but a delivery service has not been connected yet. Add a Formspree, email, or API endpoint in src/config/siteConfig.ts.",
    };
  }

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
      message: "We could not send your inquiry. Please try again or use another contact method.",
    };
  }

  return {
    ok: true,
    message: "Thank you. Your inquiry has been submitted successfully.",
  };
}
