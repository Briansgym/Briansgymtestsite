import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Baby, HeartPulse, Check } from "lucide-react";
import { images } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore programs at Brian's Gym in Sedalia: certified personal training, the supervised Kid Zone child watch, and SilverSneakers / Healthy Contributions for active seniors.",
};

const programs = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    image: images.training,
    alt: "Certified personal trainer coaching a member through strength work",
    desc: "Work one-on-one with certified trainers who design a custom plan around your goals, experience, and schedule. Whether you're just starting out or chasing a new PR, we'll get you there faster and safer.",
    points: [
      "Free goal-setting interview to start",
      "Custom programming for every level",
      "New-member special: 3 sessions for $75",
      "Ongoing accountability & support",
    ],
    cta: { label: "Explore Personal Training", href: "/personal-training" },
  },
  {
    icon: Baby,
    title: "Kid Zone Child Watch",
    image: images.kidzone,
    alt: "Bright, supervised Kid Zone childcare area",
    desc: "Never skip a workout because of childcare again. Our supervised Kid Zone gives your children a safe, fun place to play while you train — right on-site.",
    points: [
      "Safe, supervised environment",
      "$20/mo add-on covers 2 children",
      "Just $15/mo for each additional child",
      "Peace of mind while you focus on you",
    ],
    cta: { label: "Start a Free Trial", href: "/free-trial" },
  },
  {
    icon: HeartPulse,
    title: "SilverSneakers & Healthy Contributions",
    image: images.community,
    alt: "Active seniors participating in a fitness program",
    desc: "Staying active is one of the best things you can do for your health at any age. We proudly accept SilverSneakers and Healthy Contributions so eligible members can train at no cost through their insurance benefit.",
    points: [
      "SilverSneakers accepted",
      "Healthy Contributions accepted",
      "Welcoming, low-pressure atmosphere",
      "Plenty of space and support",
    ],
    cta: { label: "Contact Us to Enroll", href: "/contact" },
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs for every goal & every age"
        subtitle="From personalized coaching to childcare and senior fitness, Brian's Gym has a program that fits your life."
      />

      <section className="section">
        <div className="container-page space-y-20 lg:space-y-28">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={900}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <p.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 text-white/70">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-white/80">
                      <Check className="h-5 w-5 shrink-0 text-success" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={p.cta.href} className="btn-accent mt-8">
                  {p.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
