import { type FormEvent, useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import {
  budgetRanges,
  contactServices,
  projectTimelines,
  submitInquiry,
  type InquiryPayload,
} from "../lib/contact";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const emptyForm: InquiryPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
};

export function Contact() {
  const [form, setForm] = useState<InquiryPayload>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validate = () => {
    const next: Partial<Record<keyof InquiryPayload, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your work or personal email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.service) next.service = "Please choose a primary service.";
    if (!form.budget) next.budget = "Please select an estimated budget range.";
    if (!form.timeline) next.timeline = "Please select a target timeline.";
    if (!form.details.trim()) {
      next.details = "Please share a few details about your project.";
    } else if (form.details.trim().length < 20) {
      next.details = "Please provide at least 20 characters describing the project or problem.";
    }

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
          phone: form.phone.trim(),
          service: form.service,
          budget: form.budget,
          timeline: form.timeline,
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
      setMessage("An unexpected error occurred. Please reach out directly at hello@saza.dev.");
    }
  };

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900";

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Direct Info & Quick Channels */}
          <Reveal>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's Talk About Your Project."
              description="Tell us what you're building, what you're trying to improve, or simply share your idea. We'll get back to you with the next steps."
            />

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5">
              <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:bg-slate-50">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Email Us Directly</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-slate-900 transition hover:text-blue-600"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:bg-slate-50">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Phone / Consultation</p>
                  <span className="text-sm font-semibold text-slate-900">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:bg-slate-50">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Location</p>
                  <span className="text-sm font-semibold text-slate-900">
                    {siteConfig.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Quick Channels:
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {siteConfig.quickChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <div className="flex items-center justify-between text-slate-700 group-hover:text-blue-600">
                      {channel.type === "email" && <Mail size={16} />}
                      {channel.type === "whatsapp" && <MessageCircle size={16} />}
                      {channel.type === "call" && <Calendar size={16} />}
                      {channel.type === "linkedin" && <Linkedin size={16} />}
                      <span className="text-xs text-slate-400 transition group-hover:text-slate-900">↗</span>
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      {channel.label}
                    </span>
                    <span className="text-[10px] text-slate-500 truncate">{channel.subtext}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-2.5">
              <span className="text-xs text-slate-400">Follow:</span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Github size={15} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Twitter size={15} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Instagram size={15} />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Project Inquiry Form */}
          <Reveal delay={0.05}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-xs"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-slate-900">Project Inquiry Form</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Share your scope and requirements. All fields marked with * are required.
                </p>
              </div>

              {/* Row 1: Name and Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Alex Morgan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Work Email *
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
                </label>
              </div>

              {/* Row 2: Company and Phone */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Company / Organization <span className="text-slate-400 font-normal">(optional)</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={fieldClass}
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Phone / WhatsApp <span className="text-slate-400 font-normal">(optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={fieldClass}
                  />
                </label>
              </div>

              {/* Row 3: Service Selection */}
              <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Primary Service Required *
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Select a service category</option>
                  {contactServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-rose-600">{errors.service}</p>}
              </label>

              {/* Row 4: Budget Range & Timeline */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Estimated Budget *
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={fieldClass}
                  >
                    <option value="">Select budget tier</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className="mt-1 text-xs text-rose-600">{errors.budget}</p>}
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Target Timeline *
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className={fieldClass}
                  >
                    <option value="">Select target launch</option>
                    {projectTimelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && <p className="mt-1 text-xs text-rose-600">{errors.timeline}</p>}
                </label>
              </div>

              {/* Row 5: Project Details Textarea */}
              <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Project Details & Scope *
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Describe your product concept, target audience, core features, or technical goals..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className={`${fieldClass} resize-y min-h-24`}
                />
                {errors.details && <p className="mt-1 text-xs text-rose-600">{errors.details}</p>}
              </label>

              {/* Submit Button & Direct note */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800 disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>
                    {status === "submitting" ? "Sending Project Inquiry..." : "Send Project Inquiry"}
                  </span>
                </button>

                <span className="text-xs text-slate-500">
                  Or email directly:{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </span>
              </div>

              {/* Feedback Alert Message */}
              {message && (
                <div
                  className={`mt-5 flex items-start gap-2.5 rounded-xl border p-3.5 text-xs sm:text-sm ${
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                  role={status === "success" ? "status" : "alert"}
                >
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                  <p>{message}</p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
