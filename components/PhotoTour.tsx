"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/site";

const tabs = [
  {
    key: "weights",
    label: "Weights & Cardio",
    image: images.weights,
    alt: "Free weights and strength training equipment at Brian's Gym",
    caption:
      "Rows of free weights, machines, and cardio — plenty of space, never a wait.",
  },
  {
    key: "turf",
    label: "Functional Turf",
    image: images.turf,
    alt: "Functional training turf area with sleds and space for movement",
    caption:
      "A dedicated functional turf zone for sleds, agility, and dynamic training.",
  },
  {
    key: "kidzone",
    label: "Kid Zone",
    image: images.kidzone,
    alt: "Bright, supervised childcare Kid Zone at Brian's Gym",
    caption:
      "Safe, supervised childcare so parents can train worry-free.",
  },
  {
    key: "training",
    label: "Personal Training",
    image: images.training,
    alt: "Certified personal trainer coaching a member at Brian's Gym",
    caption:
      "Certified trainers building custom plans for every fitness level.",
  },
];

export default function PhotoTour() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Facility photo tour"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active === tab.key
                ? "bg-accent text-white shadow-glow-accent"
                : "border border-white/15 bg-white/5 text-white/75 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <div className="relative aspect-[16/9] w-full">
          <Image
            key={current.key}
            src={current.image}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="animate-fadeUp object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/60 to-transparent p-6 sm:p-8">
            <p className="font-heading text-lg font-semibold text-white sm:text-xl">
              {current.label}
            </p>
            <p className="mt-1 max-w-xl text-sm text-white/75">
              {current.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
