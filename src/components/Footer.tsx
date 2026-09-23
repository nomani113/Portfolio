import { useState } from "react";
import { ArrowUp, Github, Instagram, Linkedin, MessageCircle, Twitter, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { services } from "../data/services";
import { Container } from "./Container";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink-soft/70 py-16 sm:py-20 select-none">
      <Container>
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-panel">
                <svg viewBox="0 0 28 28" className="h-6 w-6">
                  <path
                    d="M19 9H11C9.34 9 8 10.34 8 12C8 13.66 9.34 15 11 15H17C18.66 15 20 16.34 20 18C20 19.66 18.66 21 17 21H9"
                    stroke="#38E1C2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-[0.2em] text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition hover:border-accent hover:text-white"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition hover:border-accent hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition hover:border-accent hover:text-white"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition hover:border-accent hover:text-white"
              >
                <Twitter size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition hover:border-accent hover:text-white"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              Direct Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <span className="block text-[11px] uppercase text-muted-dim">Email</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-mist transition hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase text-muted-dim">Direct Line</span>
                <span className="font-medium text-mist">{siteConfig.contact.phone}</span>
              </li>
              <li>
                <span className="block text-[11px] uppercase text-muted-dim">Engineering Hub</span>
                <span className="font-medium text-mist">{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line/60 pt-8 text-xs text-muted">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="transition hover:text-white hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="transition hover:text-white hover:underline"
            >
              Terms of Engagement
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink px-3 py-1 text-muted transition hover:border-accent hover:text-white"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </Container>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-ink/80 backdrop-blur-md"
            onClick={() => setLegalModal(null)}
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-2xl z-10 text-left">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink text-muted hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <h3 className="text-xl font-bold text-white">
              {legalModal === "privacy" ? "Privacy Policy" : "Terms of Engagement"}
            </h3>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted max-h-60 overflow-y-auto pr-2">
              <p>
                At {siteConfig.legalName}, we respect client confidentiality and proprietary intellectual property. All project briefs, source code, data schemas, and architecture plans are handled under strict confidentiality protocols.
              </p>
              <p>
                We do not sell, rent, or distribute client contact information or submitted briefs to any third parties. Inquiry form submissions are securely processed solely for technical feasibility assessment and project communication.
              </p>
              <p>
                For custom enterprise engagements, mutual Non-Disclosure Agreements (NDAs) are executed prior to deep architectural exploration.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="rounded-full bg-accent px-5 py-2 text-xs font-semibold text-ink"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
