"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { PROPERTY_TYPES, BUTTON_HEIGHT, ICON_SIZE, TRANSITION_DURATION } from "@/lib/constants";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Search Card */}
      <div
        className="w-full bg-white px-8 py-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        style={{ borderRadius: "var(--radius-card)" }}
      >
        {/* Tabs for "En venta" and "En alquiler" */}
        <Tabs defaultValue="venta" className="w-full">
              <TabsList
                className="mb-6 grid w-full max-w-[400px] mx-auto grid-cols-2 p-1 h-12"
                style={{
                  backgroundColor: "var(--bg-section)",
                  borderRadius: "var(--radius-button)",
                }}
              >
                <TabsTrigger
                  value="venta"
                  className="font-medium"
                  style={{
                    borderRadius: "var(--radius-button)",
                    color: "var(--text-primary)",
                    transition: "all 200ms",
                  }}
                >
                  En venta
                </TabsTrigger>
                <TabsTrigger
                  value="alquiler"
                  className="font-medium"
                  style={{
                    borderRadius: "var(--radius-button)",
                    color: "var(--text-primary)",
                    transition: "all 200ms",
                  }}
                >
                  En alquiler
                </TabsTrigger>
              </TabsList>

              <TabsContent value="venta" className="mt-0">
                <SearchBar />
              </TabsContent>

              <TabsContent value="alquiler" className="mt-0">
                <SearchBar />
              </TabsContent>
            </Tabs>
      </div>
    </div>
  );
}

/**
 * SearchBar component - Reusable search input with integrated button
 * Used within both "En venta" and "En alquiler" tabs
 */
function SearchBar() {
  const [open, setOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Todas"]);

  const handleTypeToggle = (type: string) => {
    if (type === "Todas") {
      setSelectedTypes(["Todas"]);
    } else {
      const newTypes = selectedTypes.includes(type)
        ? selectedTypes.filter((t) => t !== type)
        : [...selectedTypes.filter((t) => t !== "Todas"), type];

      setSelectedTypes(newTypes.length === 0 ? ["Todas"] : newTypes);
    }
  };

  const handleReset = () => {
    setSelectedTypes(["Todas"]);
  };

  const handleDone = () => {
    setOpen(false);
  };

  const displayText = "Tipo de propiedad";

  return (
    <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_auto_auto] gap-3 xl:items-end">
      {/* Search Input */}
      <div className="relative w-full">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${ICON_SIZE.md}`} style={{ color: "var(--text-tertiary)" }} />
        <Input
          type="text"
          placeholder="Buscar por ciudad, pueblo, o código postal"
          className={`${BUTTON_HEIGHT.xl} w-full border bg-white pl-12 pr-4 text-base`}
          style={{
            borderRadius: "var(--radius-button)",
            borderColor: "var(--border-primary)",
            transition: `all ${TRANSITION_DURATION}`,
          }}
        />
      </div>

      {/* Property Type Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`${BUTTON_HEIGHT.xl} xl:w-auto w-full justify-between border bg-white px-4 text-base font-normal xl:flex-shrink-0`}
            style={{
              borderRadius: "var(--radius-button)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)",
              transition: `all ${TRANSITION_DURATION}`,
            }}
          >
            <span className="truncate">{displayText}</span>
            <ChevronDown className={`flex-shrink-0 ${ICON_SIZE.md}`} style={{ color: "var(--text-tertiary)" }} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[280px] p-5"
          align="start"
          style={{
            borderRadius: "var(--radius-button)",
            borderColor: "var(--border-primary)",
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Property Type Checkboxes */}
            <div className="flex flex-col gap-3">
              {PROPERTY_TYPES.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer py-2 hover:bg-gray-50 px-3 rounded"
                  style={{ transition: `all ${TRANSITION_DURATION}` }}
                >
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() => handleTypeToggle(type)}
                    className={ICON_SIZE.md}
                    style={{
                      borderRadius: "var(--radius-sm)",
                    }}
                  />
                  <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                    {type}
                  </span>
                </label>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-3 border-t" style={{ borderColor: "var(--border-primary)" }}>
              <Button
                variant="outline"
                onClick={handleReset}
                className={`flex-1 ${BUTTON_HEIGHT.md} text-sm font-semibold`}
                style={{
                  borderRadius: "var(--radius-button)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                  transition: `all ${TRANSITION_DURATION}`,
                }}
              >
                Resetear
              </Button>
              <Button
                onClick={handleDone}
                className={`flex-1 ${BUTTON_HEIGHT.md} text-sm font-semibold text-white`}
                style={{
                  borderRadius: "var(--radius-button)",
                  backgroundColor: "var(--findit-blue)",
                  transition: `all ${TRANSITION_DURATION}`,
                }}
              >
                Listo
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Search Button */}
      <Button
        size="lg"
        className={`${BUTTON_HEIGHT.xl} w-full xl:w-auto text-base font-medium text-white xl:flex-shrink-0`}
        style={{
          borderRadius: "var(--radius-button)",
          backgroundColor: "var(--findit-blue)",
          transition: `all ${TRANSITION_DURATION}`,
        }}
      >
        Buscar
      </Button>
    </div>
  );
}
