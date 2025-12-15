"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import { allMunicipalities, companyLinks, exploreLinks } from "@/lib/mock-data";

/**
 * Footer component matching finditpr.com exactly
 *
 * Structure:
 * - 6-column layout: Bienes Raíces (expandable), Alquiler (expandable), Compañía, Explora, Bottom Section
 * - All 78 PR municipalities with "Ver más" expand functionality
 * - Social media icons
 * - Copyright and licensing information
 */
export default function Footer() {
  const [showAllBienesRaices, setShowAllBienesRaices] = useState(false);
  const [showAllAlquiler, setShowAllAlquiler] = useState(false);

  const displayedBienesRaices = showAllBienesRaices ? allMunicipalities : allMunicipalities.slice(0, 10);
  const displayedAlquiler = showAllAlquiler ? allMunicipalities : allMunicipalities.slice(0, 10);

  return (
    <footer className="w-full" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="mx-auto max-w-[1440px] px-8 py-16">
        {/* Main Grid: 4 columns for main sections */}
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Column 1: Bienes Raíces */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Bienes Raíces
            </h4>
            <ul className="space-y-2">
              {displayedBienesRaices.map((municipality) => (
                <li key={municipality}>
                  <Link
                    href={`/${municipality.toLowerCase().replace(/ /g, "-")}/venta`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {municipality} Bienes Raíces
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowAllBienesRaices(!showAllBienesRaices)}
              className="flex items-center gap-1 text-sm font-medium hover:underline"
              style={{ color: "var(--findit-blue)" }}
            >
              {showAllBienesRaices ? (
                <>
                  Ver menos <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Ver más <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Column 2: Alquiler */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Alquiler
            </h4>
            <ul className="space-y-2">
              {displayedAlquiler.map((municipality) => (
                <li key={municipality}>
                  <Link
                    href={`/${municipality.toLowerCase().replace(/ /g, "-")}/apartamentos-en-alquiler`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Apartamentos en alquiler en {municipality}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowAllAlquiler(!showAllAlquiler)}
              className="flex items-center gap-1 text-sm font-medium hover:underline"
              style={{ color: "var(--findit-blue)" }}
            >
              {showAllAlquiler ? (
                <>
                  Ver menos <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Ver más <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Column 3: Compañía */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Compañía
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explora */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Explora
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "var(--border-light)" }}></div>

        {/* Bottom Section: Copyright, Legal, and Social Media */}
        <div className="flex items-start justify-between">
          {/* Left: Copyright and Legal */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                © 2025 Bluepath Group LLC
              </p>
              <span style={{ color: "var(--text-secondary)" }}>•</span>
              <Link
                href="/equal-housing-opportunity"
                className="text-sm hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Equal Housing Opportunity
              </Link>
              <span style={{ color: "var(--text-secondary)" }}>•</span>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Licencia E-401
              </p>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Hecho con{" "}
              <span style={{ color: "var(--findit-blue)" }} aria-label="love">
                💙
              </span>{" "}
              en Puerto Rico
            </p>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com/finditpr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white hover:bg-gray-50"
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
              href="https://instagram.com/finditpr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white hover:bg-gray-50"
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
              href="https://twitter.com/finditpr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white hover:bg-gray-50"
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
