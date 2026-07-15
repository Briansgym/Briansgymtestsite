import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Sparkles, Users, HeartHandshake, ShieldCheck, MapPin } from "lucide-react";
import { site, images } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Brian's Gym has been Sedalia's locally owned community fitness facility for 20+ years — clean, spacious, and welcoming, with SilverSneakers and discounts for military, first responders, teachers, and seniors.",
};

const highlights = [
  {
    icon: Award,
    title: "Locally Owned 20+ Years",
    desc: "Not a franchise — a genuine community gym invested in Sedalia's health.",
  },
  {
    icon: Sparkles,
    title: "Always Clean & Maintained",
    desc: "Equipment is spotless and well-kept so every workout feels premium.",
  },
  {
    icon: HeartHandshake,
    title: "SilverSneakers Accepted",
    desc: "We welcome SilverSneakers & Healthy Contributions for active seniors.",
  },
  {
    icon: ShieldCheck,
    title: "Discounts for Heroes",
    desc: "Military, law enforcement, firefighters, teachers, and seniors save more.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A community gym built for Sedalia"
        subtitle="For more than two decades, Brian's Gym has been where Sedalia comes to get stronger — together."
      />

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={images.about}
                alt="The welcoming training floor at Brian's Gym"
                width={900}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Locally owned & operated for {site.yearsInBusiness} years
            </h2>
            <div className="mt-5 space-y-4 text-white/70">
              <p>
                Brian&apos;s Gym isn&apos;t a big-box franchise. We&apos;re a
                locally owned, {site.facilitySize} sq ft fitness facility that
                has proudly served the Sedalia community for over 20 years. When
                you walk through our doors, you&apos;re not a membership number —
                you&apos;re part of the family.
              </p>
              <p>
                Our members stay for years because of the atmosphere: friendly,
                helpful staff, immaculate equipment, and the space to train
                without the crowds. With 24-hour key card access, you can work
                out on your schedule, every single day of the year.
              </p>
              <p>
                From first-time lifters to seasoned athletes, from busy parents
                using our Kid Zone to active seniors on SilverSneakers — there&apos;s
                a place for everyone at Brian&apos;s Gym.
              </p>
            </div>
            <Link href="/free-trial" className="btn-accent mt-8">
              Come see for yourself <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-navy-light">
        <div className="container-page">
          <SectionHeading
            eyebrow="What sets us apart"
            title="Why members choose Brian's Gym"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 100}>
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={120} className="order-2 lg:order-1">
            <span className="eyebrow">Community focus</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Fitness that gives back
            </h2>
            <p className="mt-5 text-white/70">
              We believe a healthy community is a stronger community. That&apos;s
              why we go out of our way to make fitness accessible — offering
              discounts to the people who serve Sedalia, welcoming seniors
              through SilverSneakers, and keeping a supervised Kid Zone so
              parents never have to choose between family and health.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Military members",
                "Law enforcement",
                "Firefighters",
                "Teachers",
                "Seniors",
                "SilverSneakers members",
              ].map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-white/80">
                  <Users className="h-5 w-5 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-accent" /> {site.address.full}
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={images.community}
                alt="Members of the Brian's Gym community training together"
                width={900}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
