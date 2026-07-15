"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-white/10 bg-navy-light/70"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="font-heading text-base font-semibold text-white sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-white/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
