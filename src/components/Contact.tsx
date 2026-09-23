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
    "mt-2 w-full rounded-xl border border-line bg-ink/90 px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition focus:border-accent focus:bg-ink focus:ring-1 focus:ring-accent";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Direct Info & Quick Channels */}
          <Reveal>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's Talk About Your Project."
              description="Tell us what you're building, what you're trying to improve, or simply share your idea. We'll get back to you with the next steps."
            />

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-panel/60 p-4 transition hover:border-accent/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono tracking-wider text-muted uppercase">Email Us Directly</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-white transition hover:text-accent"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-panel/60 p-4 transition hover:border-accent/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono tracking-wider text-muted uppercase">Phone / Consultation</p>
                  <span className="text-sm font-semibold text-white">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-panel/60 p-4 transition hover:border-accent/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono tracking-wider text-muted uppercase">Location</p>
                  <span className="text-sm font-semibold text-white">
                    {siteConfig.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8">
              <h4 className="text-xs font-mono tracking-wider text-muted uppercase">
                Quick Channels:
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {siteConfig.quickChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex flex-col rounded-xl border border-line bg-ink/70 p-3.5 transition hover:border-accent/40 hover:bg-panel"
                  >
                    <div className="flex items-center justify-between text-accent">
                      {channel.type === "email" && <Mail size={16} />}
                      {channel.type === "whatsapp" && <MessageCircle size={16} />}
                      {channel.type === "call" && <Calendar size={16} />}
                      {channel.type === "linkedin" && <Linkedin size={16} />}
                      <span className="text-xs text-muted transition group-hover:text-white">↗</span>
                    </div>
                    <span className="mt-2 text-xs font-bold text-white group-hover:text-accent">
                      {channel.label}
                    </span>
                    <span className="text-[10px] text-muted truncate">{channel.subtext}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs text-muted">Follow:</span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:border-accent hover:text-white"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:border-accent hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:border-accent hover:text-white"
              >
                <Twitter size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:border-accent hover:text-white"
              >
                <Instagram size={16} />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Netlify Project Inquiry Form */}
          <Reveal delay={0.08}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-line bg-panel/75 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="border-b border-line pb-4 mb-6">
                <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                <p className="mt-1 text-xs text-muted">
                  Share your scope and requirements. All fields marked with * are required.
                </p>
              </div>

              {/* Row 1: Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
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
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
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
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </label>
              </div>

              {/* Row 2: Company and Phone */}
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
                  Company / Organization <span className="text-muted font-normal">(optional)</span>
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

                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
                  Phone / WhatsApp <span className="text-muted font-normal">(optional)</span>
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
              <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-mist">
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
                {errors.service && <p className="mt-1 text-xs text-rose-400">{errors.service}</p>}
              </label>

              {/* Row 4: Budget Range & Timeline */}
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
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
                  {errors.budget && <p className="mt-1 text-xs text-rose-400">{errors.budget}</p>}
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wider text-mist">
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
                  {errors.timeline && <p className="mt-1 text-xs text-rose-400">{errors.timeline}</p>}
                </label>
              </div>

              {/* Row 5: Project Details Textarea */}
              <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-mist">
                Project Details & Scope *
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Describe your product concept, target audience, core features, or technical challenges you are looking to solve..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className={`${fieldClass} resize-y min-h-28`}
                />
                {errors.details && <p className="mt-1 text-xs text-rose-400">{errors.details}</p>}
              </label>

              {/* Submit Button & Feedback */}
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-semibold text-ink shadow-[0_0_20px_rgba(56,225,194,0.3)] transition-all hover:bg-accent-strong hover:scale-[1.02] disabled:opacity-60"
                >
                  <Send size={15} />
                  <span>
                    {status === "submitting" ? "Sending Project Inquiry..." : "Send Project Inquiry"}
                  </span>
                </button>

                <span className="text-xs text-muted">
                  Or write directly:{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </span>
              </div>

              {/* Feedback Alert Message */}
              {message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 text-xs sm:text-sm ${
                    status === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  }`}
                  role={status === "success" ? "status" : "alert"}
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
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
