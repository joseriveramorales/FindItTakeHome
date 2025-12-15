"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#ededed] py-20">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="mb-4 text-[52px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Descubre propiedades en Puerto Rico
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg" style={{ color: "var(--text-secondary)" }}>
            Encuentra tu próximo hogar o inversión comercial con tan solo unos clics.
          </p>

          {/* Search Card */}
          <div
            className="w-full max-w-[900px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
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
      </div>
    </section>
  );
}

/**
 * SearchBar component - Reusable search input with integrated button
 * Used within both "En venta" and "En alquiler" tabs
 */
function SearchBar() {
  return (
    <div className="relative flex items-center gap-2">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: "var(--text-tertiary)" }} />
        <Input
          type="text"
          placeholder="Buscar por ciudad, pueblo, o código postal"
          className="h-14 w-full border bg-white pl-12 pr-4 text-base"
          style={{
            borderRadius: "var(--radius-button)",
            borderColor: "var(--border-primary)",
            transition: "all 200ms",
          }}
        />
      </div>

      {/* Search Button */}
      <Button
        size="lg"
        className="h-14 px-8 text-base font-medium text-white"
        style={{
          borderRadius: "var(--radius-button)",
          backgroundColor: "var(--findit-blue)",
          transition: "all 200ms",
        }}
      >
        Buscar
      </Button>
    </div>
  );
}
