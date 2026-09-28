
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageSquare, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold tracking-wider text-white">
            SZ
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900">
              {siteConfig.name}
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() =>
              setTheme((value) => (value === "light" ? "dark" : "light"))
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            title={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            <span>Let's Talk</span>
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Navigation
              </span>

              <ul className="flex flex-col gap-1 pt-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-400">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setTheme((value) =>
                      value === "light" ? "dark" : "light"
                    )
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } theme`}
                >
                  {theme === "light" ? (
                    <Moon size={17} />
                  ) : (
                    <Sun size={17} />
                  )}
                </button>
              </div>

              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                <MessageSquare size={16} />
                <span>Let's Talk</span>
              </a>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[10px] font-semibold uppercase text-slate-400">
                    Direct Email
                  </p>
                  <p className="mt-1 truncate font-medium text-slate-900">
                    {siteConfig.contact.email}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[10px] font-semibold uppercase text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

