import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-panel shadow-inner transition-transform group-hover:scale-105">
            <svg viewBox="0 0 28 28" className="h-6 w-6">
              <path
                d="M19 9H11C9.34 9 8 10.34 8 12C8 13.66 9.34 15 11 15H17C18.66 15 20 16.34 20 18C20 19.66 18.66 21 17 21H9"
                stroke="url(#navSazaGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="navSazaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38E1C2" />
                  <stop offset="100%" stopColor="#2DD4BF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent status-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-[0.2em] text-white">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-medium tracking-[0.16em] text-muted uppercase">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-wide text-muted transition-colors hover:text-white hover:text-shadow-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(56,225,194,0.3)] transition-all hover:bg-accent-strong hover:shadow-[0_0_32px_rgba(56,225,194,0.45)] hover:scale-[1.02]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel/70 text-white transition hover:border-accent/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-line bg-ink/98 px-6 py-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-dim uppercase">
                Navigation
              </span>
              <ul className="flex flex-col gap-1.5 pt-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-mist transition hover:bg-white/5 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-dim">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-center text-sm font-semibold text-ink shadow-[0_0_20px_rgba(56,225,194,0.3)] transition hover:bg-accent-strong"
                onClick={() => setOpen(false)}
              >
                <MessageSquare size={16} />
                <span>Let's Talk</span>
              </a>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-muted">
                <div className="rounded-xl border border-line bg-panel/50 p-3">
                  <p className="text-[10px] uppercase text-muted-dim">Direct Email</p>
                  <p className="mt-1 font-medium text-white truncate">{siteConfig.contact.email}</p>
                </div>
                <div className="rounded-xl border border-line bg-panel/50 p-3">
                  <p className="text-[10px] uppercase text-muted-dim">Location</p>
                  <p className="mt-1 font-medium text-white">{siteConfig.contact.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
