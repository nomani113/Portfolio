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
    <footer className="border-t border-slate-200/80 bg-slate-50 py-14 sm:py-18 text-slate-600 select-none">
      <Container>
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-mono font-bold text-sm tracking-wider shadow-xs">
                SZ
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900">
                {siteConfig.name}
              </span>
            </div>

            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Github size={15} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Twitter size={15} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Company
            </h4>
            <ul className="mt-3.5 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Services
            </h4>
            <ul className="mt-3.5 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Direct Contact
            </h4>
            <ul className="mt-3.5 space-y-2 text-sm text-slate-600">
              <li>
                <span className="block text-[10px] uppercase font-semibold text-slate-400">Email</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-slate-900 transition hover:text-blue-600"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase font-semibold text-slate-400">Direct Line</span>
                <span className="font-medium text-slate-900">{siteConfig.contact.phone}</span>
              </li>
              <li>
                <span className="block text-[10px] uppercase font-semibold text-slate-400">Engineering Hub</span>
                <span className="font-medium text-slate-900">{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="transition hover:text-slate-900 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="transition hover:text-slate-900 hover:underline"
            >
              Terms of Engagement
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 shadow-xs"
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
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setLegalModal(null)}
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl z-10 text-left">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close"
            >
              <X size={15} />
            </button>
            <h3 className="text-xl font-bold text-slate-900">
              {legalModal === "privacy" ? "Privacy Policy" : "Terms of Engagement"}
            </h3>
            <div className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-slate-600 max-h-60 overflow-y-auto pr-2">
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
                className="rounded-full bg-slate-900 hover:bg-slate-800 px-5 py-2 text-xs font-semibold text-white shadow-xs"
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
