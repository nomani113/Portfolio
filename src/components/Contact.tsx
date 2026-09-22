import { type FormEvent, type ReactNode, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { contactServices, submitInquiry } from "../lib/contact";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  details: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.details.trim()) next.details = "Please describe your project.";
    else if (form.details.trim().length < 20) next.details = "Please share a little more detail (at least 20 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setMessage("");

    try {
      const result = await submitInquiry(
        {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          service: form.service,
          details: form.details.trim(),
        },
        siteConfig.contact.formEndpoint,
      );

      if (result.ok) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
      setMessage(result.message);
    } catch {
      setStatus("error");
      setMessage("Something went wrong while submitting the form. Please try again.");
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/70 focus:border-accent";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about the product you want to build."
              description="Share a short brief and we will review it. Delivery is connected only after a form endpoint is configured."
            />
            <ul className="mt-8 space-y-4 text-sm text-muted">
              {siteConfig.contact.email ? (
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                    {siteConfig.contact.email}
                  </a>
                </li>
              ) : (
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  Email address coming soon
                </li>
              )}
              {siteConfig.contact.phone ? (
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent" />
                  {siteConfig.contact.phone}
                </li>
              ) : null}
              {siteConfig.contact.location ? (
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent" />
                  {siteConfig.contact.location}
                </li>
              ) : null}
            </ul>
            <div className="mt-8 flex gap-3">
              <SocialLink href={siteConfig.social.github} label="GitHub">
                <Github size={18} />
              </SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              noValidate
              className="rounded-[1.75rem] border border-line bg-panel/70 p-5 sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white">
                  Name
                  <input
                    className={fieldClass}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
                </label>
                <label className="block text-sm font-medium text-white">
                  Email
                  <input
                    className={fieldClass}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email}</p> : null}
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium text-white">
                Company name <span className="text-muted">(optional)</span>
                <input
                  className={fieldClass}
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-white">
                Service
                <select
                  className={fieldClass}
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {contactServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service ? <p className="mt-1 text-xs text-red-300">{errors.service}</p> : null}
              </label>
              <label className="mt-5 block text-sm font-medium text-white">
                Project details
                <textarea
                  className={`${fieldClass} min-h-32 resize-y`}
                  name="details"
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                />
                {errors.details ? <p className="mt-1 text-xs text-red-300">{errors.details}</p> : null}
              </label>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-ink transition hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Submitting..." : "Submit inquiry"}
              </button>
              {message ? (
                <p
                  className={`mt-4 text-sm ${status === "success" ? "text-accent" : "text-gold"}`}
                  role={status === "success" ? "status" : "alert"}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const ready = href.startsWith("http://") || href.startsWith("https://");
  if (!ready) {
    return (
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted"
        title={`${label} link coming soon`}
        aria-label={`${label} coming soon`}
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-white hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
