"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dumbbell, Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/90 backdrop-blur-md"
          : "bg-gradient-to-b from-navy/80 to-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-glow-accent">
            <Dumbbell className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-heading text-lg font-extrabold leading-tight">
            Brian&apos;s Gym
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
              Sedalia, MO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <Link href="/free-trial" className="btn-accent">
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-navy/98 backdrop-blur-md`}
      >
        <nav
          className="container-page flex flex-col gap-1 py-4"
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium ${
                  active ? "bg-white/10 text-white" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-3">
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Link href="/free-trial" className="btn-accent w-full">
              Start Free Trial
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
