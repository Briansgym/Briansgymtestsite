import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessagesSquare,
  ClipboardList,
  TrendingUp,
  Check,
  Trophy,
} from "lucide-react";
import { images } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Certified personal training at Brian's Gym in Sedalia. New members get 3 sessions for $75. Free interview, a custom plan, and ongoing support for every fitness level.",
};

const steps = [
  {
    icon: MessagesSquare,
    title: "Free Interview",
    desc: "We start with a no-cost conversation to understand your goals, experience, and any limitations.",
  },
  {
    icon: ClipboardList,
    title: "Custom Plan",
    desc: "Your trainer builds a personalized program designed to get you results safely and efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Support",
    desc: "We coach, adjust, and keep you accountable every step of the way as you progress.",
  },
];

const levels = [
  {
    title: "Just Getting Started",
    desc: "New to fitness? We'll teach you proper form, build confidence, and make the gym feel like home.",
  },
  {
    title: "Ready to Level Up",
    desc: "Hit a plateau? Our trainers refine your programming to break through and keep progressing.",
  },
  {
    title: "Chasing Big Goals",
    desc: "Training for strength, a competition, or a transformation? We'll build a plan to get you there.",
  },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Training"
        title="Train smarter with a certified coach"
        subtitle="Personalized programming, expert guidance, and real accountability — for every level of fitness."
      />

      {/* Special offer */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={images.training}
                alt="Certified personal trainer guiding a member through a workout"
                width={900}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
              <Trophy className="h-4 w-4" /> New Member Special
            </span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
              3 Sessions for <span className="text-accent">$75</span>
            </h2>
            <p className="mt-5 text-white/70">
              There&apos;s no better way to jumpstart your journey. Get three
              one-on-one sessions with a certified trainer for just $75 —
              exclusively for new members. Learn the equipment, dial in your
              form, and build a plan that works.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-trial" className="btn-accent px-8 py-4 text-base">
                Claim the Special <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-outline px-8 py-4 text-base">
                Ask a Question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-navy-light">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Your path to results"
            subtitle="A simple, proven process that meets you where you are."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card relative h-full">
                  <span className="absolute right-6 top-6 font-heading text-5xl font-extrabold text-white/5">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Every level */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="For everyone"
            title="Training for every level"
            subtitle="Whether it's your first workout or your thousandth, our trainers meet you where you are."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {levels.map((l, i) => (
              <Reveal key={l.title} delay={i * 100}>
                <div className="card h-full">
                  <Check className="h-6 w-6 text-success" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
