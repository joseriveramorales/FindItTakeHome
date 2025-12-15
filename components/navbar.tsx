import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

/**
 * Navbar component for the FindIT homepage
 *
 * Features:
 * - Fixed to top with 96px height
 * - Three sections: logo, navigation links, and action buttons
 * - Uses FindIT brand colors (#2A7DE6) for hover states
 * - Includes "Propiedades" dropdown menu
 * - Language switcher (ES/EN)
 * - Desktop-only design
 */
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white" style={{ borderColor: "var(--border-primary)" }}>
      <div className="mx-auto flex h-24 max-w-[1440px] items-center px-4">
        {/* Logo Section - Fixed width for alignment */}
        <div className="flex w-64 flex-shrink-0">
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

        {/* Center Navigation Links - Flex grow to center */}
        <div className="flex flex-1 items-center justify-center gap-8">
          <Link
            href="/"
            className="text-base font-medium"
            style={{
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
          >
            Inicio
          </Link>

          {/* Propiedades Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-base font-medium"
                style={{
                  color: "var(--text-primary)",
                  transition: "all 200ms",
                }}
              >
                Propiedades
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-base font-medium"
                style={{
                  color: "var(--text-primary)",
                  transition: "all 200ms",
                }}
              >
                Profesionales inmobiliarios
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel className="text-sm font-semibold">
                Encuentra servicios:
              </DropdownMenuLabel>
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
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-sm font-semibold">
                Para profesionales:
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer text-base">
                Promueve tus servicios
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-base">
                Publica tus propiedades
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-base">
                Destaca tus propiedades
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/publicar"
            className="text-base font-medium"
            style={{
              color: "var(--text-primary)",
              transition: "all 200ms",
            }}
          >
            Publicar
          </Link>
        </div>

        {/* Right Side Actions - Fixed width matching logo section for balance */}
        <div className="flex w-64 items-center justify-end gap-4">
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
