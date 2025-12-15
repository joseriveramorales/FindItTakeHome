/**
 * Centralized constants for consistent styling and configuration
 */

// Layout constants
export const CONTAINER_WIDTH = "max-w-[1440px]";
export const NAVBAR_HEIGHT = "h-24";
export const MOBILE_SIDEBAR_WIDTH = "w-80";

// Timing constants
export const TRANSITION_DURATION = "200ms";
export const DROPDOWN_DELAY = 100;

// Icon sizes
export const ICON_SIZE = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
} as const;

// Button heights
export const BUTTON_HEIGHT = {
  sm: "h-10",
  md: "h-11",
  lg: "h-12",
  xl: "h-14",
} as const;

// Section padding
export const SECTION_PADDING = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
} as const;

// Property types
export const PROPERTY_TYPES = ["Todas", "Casas", "Apartamentos", "Terrenos"] as const;

// Property tabs
export const PROPERTY_TABS = [
  { value: "Todos", label: "Todos" },
  { value: "Casa", label: "Casa" },
  { value: "Apartamento", label: "Apartamento" },
  { value: "Terrenos", label: "Terrenos" },
  { value: "Comercial", label: "Comercial" },
] as const;
