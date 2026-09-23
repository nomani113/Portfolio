import { useEffect } from "react";
import { siteConfig } from "./config/siteConfig";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CapabilityStrip } from "./components/CapabilityStrip";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Insights } from "./components/Insights";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const title = `${siteConfig.name} | ${siteConfig.tagline}`;
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", siteConfig.description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", siteConfig.description);
    setMeta('meta[property="og:site_name"]', "content", siteConfig.name);
  }, []);

  return (
    <>
      {/* Subtle background grain noise */}
      <div className="grain" aria-hidden="true" />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <CapabilityStrip />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Process />
        <WhyChooseUs />
        <Insights />
        <CTA />
        <Contact />
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </>
  );
}
