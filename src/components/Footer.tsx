import { siteConfig } from "../config/siteConfig";
import { services } from "../data/services";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-bold tracking-[0.2em] text-white">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{siteConfig.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Navigate</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-muted hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Built with modern technology.</p>
        </div>
      </Container>
    </footer>
  );
}
