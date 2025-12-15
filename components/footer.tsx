import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

/**
 * Footer component for the FindIT homepage
 *
 * Structure:
 * - Company branding and description
 * - Navigation links (Contact, About, Terms, Privacy)
 * - Cities section with 5 major PR cities
 * - Social media links
 * - Copyright and licensing information
 *
 * Design:
 * - Light gray background (#F5F5F5) matching finditpr.com
 * - Consistent brand colors for links and hover states
 * - Desktop-only layout (no mobile responsive design)
 */
export default function Footer() {
  const cities = [
    { name: "San Juan", href: "/bienes-raices/san-juan" },
    { name: "Bayamón", href: "/bienes-raices/bayamon" },
    { name: "Carolina", href: "/bienes-raices/carolina" },
    { name: "Ponce", href: "/bienes-raices/ponce" },
    { name: "Caguas", href: "/bienes-raices/caguas" },
  ];

  const companyLinks = [
    { name: "Contáctanos", href: "/contacto" },
    { name: "Acerca de Nosotros", href: "/acerca" },
    { name: "Términos de Uso", href: "/terminos" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Mapa del Sitio", href: "/mapa" },
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="mx-auto max-w-[1440px] px-8 py-20">
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-3 gap-16 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Find<span style={{ color: "var(--findit-blue)" }}>IT</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Tu portal de bienes raíces en Puerto Rico. Encuentra la propiedad
              perfecta para ti con las mejores herramientas de búsqueda y
              profesionales inmobiliarios certificados.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Empresa
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "all 200ms",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Section */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Bienes Raíces por Ciudad
            </h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.href}
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "all 200ms",
                    }}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "var(--border-light)" }}></div>

        {/* Bottom Section: Social Media and Copyright */}
        <div className="flex items-center justify-between">
          {/* Copyright and Legal */}
          <div className="space-y-1">
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              © 2024 Bluepath Group LLC. Equal Housing Opportunity
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Bluepath Group LLC posee una licencia de bienes raíces en Puerto
              Rico número E-401
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Hecho con{" "}
              <span style={{ color: "var(--findit-blue)" }} aria-label="love">
                💙
              </span>{" "}
              en Puerto Rico
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
