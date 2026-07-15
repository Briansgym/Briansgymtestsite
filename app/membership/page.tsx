import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star, BadgePercent, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Membership & Pricing",
  description:
    "Flexible membership options at Brian's Gym in Sedalia: $8 day passes, $35 14-day passes, month-to-month memberships from $55/mo, and a $485/year online special. Discounts available.",
};

const dayPasses = [
  { name: "Day Pass", price: "$8", details: "Full facility access for one day" },
  {
    name: "14-Day Pass",
    price: "$35",
    details: "14 consecutive days — great for travelers",
  },
];

const monthly = [
  {
    type: "Non-Agreement Single",
    price: "$55/mo",
    enrollment: "$50",
    details: "Month-to-month, no contract",
    featured: true,
  },
  {
    type: "Non-Agreement Couples",
    price: "$70/mo",
    enrollment: "$50",
    details: "Month-to-month, two members",
    featured: false,
  },
  {
    type: "Agreement Single",
    price: "Contact for rate",
    enrollment: "$50",
    details: "1-year agreement · $35 annual maintenance fee",
    featured: false,
  },
];

const addOns = [
  { name: "Family Add-On", price: "$15/mo per member", note: "$45/mo for 3 additional members" },
  { name: "Kid Zone Add-On", price: "$20/mo", note: "Covers 2 children · $15/mo each additional" },
];

const discounts = [
  "Military members",
  "Law enforcement",
  "Firefighters",
  "Teachers",
  "Seniors",
  "SilverSneakers / Healthy Contributions",
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Flexible plans that fit your life"
        subtitle="No pressure, no gimmicks — just honest pricing with options for day-trippers, families, and everyone in between."
      />

      {/* Annual online special banner */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-r from-primary-dark to-navy-light p-8 sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    <Star className="h-4 w-4" /> Best Value — Online Special
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                    1-Year Single Membership — $485/year
                  </h2>
                  <p className="mt-3 text-white/75">
                    Normally $571.28/year.{" "}
                    <span className="font-semibold text-success">Save $86+</span>{" "}
                    when you join online. Couples annual plans also available.
                  </p>
                </div>
                <Link
                  href="/free-trial"
                  className="btn-accent shrink-0 px-8 py-4 text-base"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Day passes */}
      <section className="pb-4">
        <div className="container-page">
          <SectionHeading
            eyebrow="Day & short-term"
            title="Just visiting?"
            subtitle="No membership required — grab a pass and enjoy the full facility."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {dayPasses.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="card h-full text-center hover:border-accent/40">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-heading text-4xl font-extrabold text-accent">
                    {p.price}
                  </p>
                  <p className="mt-3 text-sm text-white/65">{p.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly memberships */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Monthly memberships"
            title="Become a member"
            subtitle="All memberships include 24-hour key card access to our full 26,000 sq ft facility."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {monthly.map((m, i) => (
              <Reveal key={m.type} delay={i * 100}>
                <div
                  className={`card relative h-full ${
                    m.featured
                      ? "border-accent/50 shadow-glow-accent"
                      : ""
                  }`}
                >
                  {m.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold text-white">
                    {m.type}
                  </h3>
                  <p className="mt-3 font-heading text-3xl font-extrabold text-white">
                    {m.price}
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    {m.enrollment} enrollment
                  </p>
                  <p className="mt-4 text-sm text-white/70">{m.details}</p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "24-hour key card access",
                      "Full 26,000 sq ft facility",
                      "Add-ons available",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-white/75"
                      >
                        <Check className="h-4 w-4 shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/free-trial"
                    className={`${m.featured ? "btn-accent" : "btn-outline"} mt-7 w-full`}
                  >
                    Join Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-navy-light/60 p-6">
                  <div>
                    <h4 className="font-heading font-bold text-white">{a.name}</h4>
                    <p className="mt-1 text-sm text-white/60">{a.note}</p>
                  </div>
                  <span className="font-heading text-xl font-extrabold text-accent">
                    {a.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="section bg-navy-light">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <BadgePercent className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Discounts for our community
            </h2>
            <p className="mt-4 text-white/70">
              We&apos;re proud to offer special rates for the people who keep
              Sedalia strong. Ask our staff about eligibility.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {discounts.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy px-5 py-2.5 text-sm font-medium text-white/85"
              >
                <ShieldCheck className="h-4 w-4 text-accent" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
