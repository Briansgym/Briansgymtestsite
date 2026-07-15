import type { Metadata } from "next";
import {
  Check,
  Clock,
  MapPin,
  Phone,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { site, hours } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free 3-Day Trial",
  description:
    "Claim your free 3-day trial at Brian's Gym in Sedalia — no commitment, no credit card. Experience 26,000 sq ft, 24-hour access, and a welcoming community.",
};

const included = [
  "Full access to 26,000 sq ft of equipment",
  "24-hour key card access experience",
  "Weights, cardio & functional turf",
  "Tour of the facility & Kid Zone",
  "No commitment — no credit card required",
];

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        eyebrow="Free 3-Day Trial"
        title="Try Brian's Gym free for 3 days"
        subtitle="No commitment. No credit card. Just fill out the form and we'll get your free 3-day pass ready."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-navy-light/70 p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                Claim your free pass
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Fill this out and our team will reach out to schedule your visit.
              </p>
              <div className="mt-8">
                <ContactForm endpoint={site.forms.freeTrial} variant="trial" />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="card">
                <div className="flex items-center gap-2 text-accent">
                  <CalendarCheck className="h-5 w-5" />
                  <span className="eyebrow">What&apos;s included</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="h-5 w-5" />
                  <span className="eyebrow">Plan your visit</span>
                </div>
                <ul className="mt-5 space-y-4 text-sm text-white/75">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <a
                      href={site.social.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {site.address.full}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-accent" />
                    <a href={site.phoneHref} className="hover:text-white">
                      {site.phone}
                    </a>
                  </li>
                </ul>
                <div className="mt-5 border-t border-white/10 pt-5">
                  <div className="mb-3 flex items-center gap-2 text-accent">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Staffed Hours
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-white/70">
                    {hours.map((h) => (
                      <li key={h.day} className="flex flex-col">
                        <span className="font-semibold text-white/85">
                          {h.day}
                        </span>
                        <span>{h.staffed}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-light">
                    <ShieldCheck className="h-4 w-4" />
                    24-Hour Access for Members
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
