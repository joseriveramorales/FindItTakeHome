"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

/**
 * Navbar component for the FindIT homepage
 *
 * Features:
 * - Responsive design: desktop nav (≥1200px), mobile sidebar (<1200px)
 * - Three sections: logo, navigation links, and action buttons
 * - Uses FindIT brand colors (#2A7DE6) for hover states
 * - Includes "Propiedades" dropdown menu with hover trigger
 * - Language switcher (ES/EN)
 * - Mobile sidebar with menu items
 * - Smooth animations on dropdown open/close
 */
export default function Navbar() {
  const [propiedadesOpen, setPropiedadesOpen] = useState(false);
  const [profesionalesOpen, setProfesionalesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let propiedadesTimeout: NodeJS.Timeout;
  let profesionalesTimeout: NodeJS.Timeout;

  const handlePropiedadesOpen = (isOpen: boolean) => {
    if (isOpen) {
      clearTimeout(profesionalesTimeout);
      setProfesionalesOpen(false);
    }
    setPropiedadesOpen(isOpen);
  };

  const handleProfesionalesOpen = (isOpen: boolean) => {
    if (isOpen) {
      clearTimeout(propiedadesTimeout);
      setPropiedadesOpen(false);
    }
    setProfesionalesOpen(isOpen);
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white" style={{ borderColor: "var(--border-primary)" }}>
      <div className="mx-auto flex h-24 max-w-7xl items-center px-4">
        {/* Mobile Hamburger Menu - Visible on screens <1280px */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden mr-4"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" onClick={() => setSidebarOpen(false)}>
                  <span className="text-2xl font-bold">
                    Find<span style={{ color: "var(--findit-blue)" }}>IT</span>
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {/* Inicio */}
              <Link
                href="/"
                className="text-base font-medium py-2 px-3 hover:bg-accent rounded-md transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Inicio
              </Link>

              {/* Propiedades */}
              <div>
                <div className="text-base font-medium py-2 px-3">
                  Propiedades
                </div>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Buscar en venta
                  </Link>
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Buscar en alquiler
                  </Link>
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Mis propiedades
                  </Link>
                </div>
              </div>

              {/* Profesionales de bienes raíces */}
              <div>
                <div className="text-base font-medium py-2 px-3">
                  Profesionales de bienes raíces
                </div>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Agentes de bienes raíces
                  </Link>
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Financiamiento hipotecario
                  </Link>
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Tasadores
                  </Link>
                  <Link
                    href="#"
                    className="text-sm py-2 px-3 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Abogados
                  </Link>
                </div>
              </div>

              {/* Sobre FindIT */}
              <Link
                href="#"
                className="text-base font-medium py-2 px-3 hover:bg-accent rounded-md transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Sobre FindIT
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo Section */}
        <div className="flex flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold"
            style={{
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
          >
            Find<span style={{ color: "var(--findit-blue)" }}>IT</span>
          </Link>
        </div>

        {/* Center Navigation Links - Hidden on mobile, visible on desktop (≥1280px) */}
        <div className="hidden xl:flex flex-1 items-center justify-center gap-8">
          <Link
            href="/"
            className="text-base font-medium hover:text-findit-blue"
            style={{
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--findit-blue)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Inicio
          </Link>

          {/* Propiedades Dropdown */}
          <DropdownMenu open={propiedadesOpen} onOpenChange={handlePropiedadesOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-base font-medium"
                style={{
                  color: propiedadesOpen ? "var(--findit-blue)" : "var(--text-primary)",
                  transition: "all 200ms",
                }}
                onMouseEnter={() => {
                  clearTimeout(propiedadesTimeout);
                  handlePropiedadesOpen(true);
                }}
                onMouseLeave={() => {
                  propiedadesTimeout = setTimeout(() => {
                    handlePropiedadesOpen(false);
                  }, 100);
                }}
              >
                Propiedades
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48"
              onMouseEnter={() => {
                clearTimeout(propiedadesTimeout);
                handlePropiedadesOpen(true);
              }}
              onMouseLeave={() => {
                propiedadesTimeout = setTimeout(() => {
                  handlePropiedadesOpen(false);
                }, 100);
              }}
            >
              <DropdownMenuItem className="cursor-pointer text-base">
                Buscar Propiedades
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-base">
                Mis Propiedades
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-base">
                Guardar Búsqueda
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profesionales inmobiliarios Dropdown */}
          <DropdownMenu open={profesionalesOpen} onOpenChange={handleProfesionalesOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-base font-medium"
                style={{
                  color: profesionalesOpen ? "var(--findit-blue)" : "var(--text-primary)",
                  transition: "all 200ms",
                }}
                onMouseEnter={() => {
                  clearTimeout(profesionalesTimeout);
                  handleProfesionalesOpen(true);
                }}
                onMouseLeave={() => {
                  profesionalesTimeout = setTimeout(() => {
                    handleProfesionalesOpen(false);
                  }, 100);
                }}
              >
                Profesionales inmobiliarios
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[500px] p-6"
              onMouseEnter={() => {
                clearTimeout(profesionalesTimeout);
                handleProfesionalesOpen(true);
              }}
              onMouseLeave={() => {
                profesionalesTimeout = setTimeout(() => {
                  handleProfesionalesOpen(false);
                }, 100);
              }}
            >
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Encuentra servicios */}
                <div>
                  <DropdownMenuLabel className="mb-2 text-sm font-semibold text-text-primary">
                    Encuentra servicios:
                  </DropdownMenuLabel>
                  <div className="flex flex-col gap-1">
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Agentes de bienes raíces
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Financiamiento hipotecario
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Tasadores
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Abogados
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Fotografía y Visuales
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Estudios de título
                    </DropdownMenuItem>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border-light"></div>

                {/* Right Column - Para profesionales */}
                <div>
                  <DropdownMenuLabel className="mb-2 text-sm font-semibold text-text-primary">
                    Para profesionales:
                  </DropdownMenuLabel>
                  <div className="flex flex-col gap-1">
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Promueve tus servicios
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Publica tus propiedades
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-base">
                      Destaca tus propiedades
                    </DropdownMenuItem>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/publicar"
            className="text-base font-medium hover:text-findit-blue"
            style={{
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--findit-blue)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Publicar
          </Link>
        </div>

        {/* Right Side Actions - Hidden on mobile, visible on desktop (≥1280px) */}
        <div className="hidden xl:flex items-center justify-end gap-4 ml-auto">
          {/* Language Switcher */}
          <div
            className="flex items-center gap-1 border px-3 py-2"
            style={{
              borderRadius: "var(--radius-button)",
              borderColor: "var(--border-primary)",
            }}
          >
            <button
              className="px-2 py-1 text-sm font-medium text-white rounded-full"
              style={{
                backgroundColor: "var(--findit-blue)",
                transition: "all 200ms",
              }}
              aria-label="Español"
            >
              ES
            </button>
            <button
              className="px-2 py-1 text-sm font-medium"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Login Button */}
          <Button
            variant="outline"
            className="h-10 border px-6 text-base font-medium"
            style={{
              borderRadius: "var(--radius-button)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
          >
            Inicia Sesión
          </Button>

          {/* Signup Button */}
          <Button
            className="h-10 px-6 text-base font-medium text-white"
            style={{
              borderRadius: "var(--radius-button)",
              backgroundColor: "var(--findit-blue)",
              transition: "all 200ms",
            }}
          >
            Regístrate
          </Button>
        </div>
      </div>
    </nav>
  );
}
