import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Maximize,
  Baby,
  Dumbbell,
  Heart,
  ShieldCheck,
  Star,
  Play,
} from "lucide-react";
import { site, images } from "@/lib/site";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import SectionHeading from "@/components/SectionHeading";
import PhotoTour from "@/components/PhotoTour";
import CTASection from "@/components/CTASection";

const features = [
  {
    icon: Clock,
    title: "24-Hour Key Card Access",
    desc: "Train on your schedule — early mornings, late nights, any day of the year.",
  },
  {
    icon: Maximize,
    title: "26,000 Sq Ft Facility",
    desc: "Spacious and never crowded, with room to move and every machine you need.",
  },
  {
    icon: Baby,
    title: "Supervised Kid Zone",
    desc: "Safe, supervised childcare so parents can focus on their workout.",
  },
  {
    icon: Dumbbell,
    title: "Personal Training",
    desc: "Certified trainers with custom plans — 3 sessions for $75 new-member special.",
  },
];

const programs = [
  {
    image: images.training,
    alt: "Personal trainer coaching a client on strength technique",
    title: "Personal Training",
    desc: "One-on-one coaching with certified trainers who build plans around your goals.",
    href: "/personal-training",
  },
  {
    image: images.kidzone,
    alt: "Children playing in the supervised Kid Zone",
    title: "Kid Zone Child Watch",
    desc: "Supervised childcare that covers 2 children for just $20/mo — parents train worry-free.",
    href: "/programs",
  },
  {
    image: images.community,
    alt: "Active seniors enjoying a group fitness class",
    title: "SilverSneakers",
    desc: "We proudly accept SilverSneakers & Healthy Contributions for active seniors.",
    href: "/programs",
  },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: images.hero,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.youtube,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <Image
          src={images.hero}
          alt="Members training in the spacious weight room at Brian's Gym in Sedalia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

        <div className="container-page relative z-10 pt-28 pb-16 sm:pt-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/85 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Locally owned {site.yearsInBusiness} years
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Sedalia&apos;s{" "}
              <span className="text-accent">#1 Fitness</span> Facility
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              26,000 sq ft of premium equipment, 24-hour key card access, a
              supervised Kid Zone, and certified personal trainers — all in one
              welcoming community gym.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-trial" className="btn-accent px-8 py-4 text-base">
                Start Your Free 3-Day Trial <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/membership" className="btn-outline px-8 py-4 text-base">
                View Membership
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-navy/50 p-6 backdrop-blur sm:gap-8">
            <StatCounter target={26000} label="Sq Ft Facility" />
            <StatCounter target={24} suffix="/7" label="Access" />
            <StatCounter target={20} suffix="+" label="Years Strong" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Brian's Gym"
            title="Everything you need to train hard"
            subtitle="A full-service facility built for real results — with the space, hours, and support that big-box gyms can't match."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="card h-full hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="section bg-navy-light">
        <div className="container-page">
          <SectionHeading
            eyebrow="Take a look inside"
            title="Video tour of Brian's Gym"
            subtitle="See our 26,000 sq ft of weights, cardio, functional turf, and more before you visit."
          />
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-glow">
              <iframe
                src={site.social.youtubeEmbed}
                title="Brian's Gym facility video tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <Play className="h-4 w-4 text-accent" />
              Prefer to see it in person?{" "}
              <Link href="/free-trial" className="font-semibold text-accent hover:underline">
                Book a free trial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={images.about}
                alt="Interior of Brian's Gym showing the open, spacious training floor"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Locally owned & operated</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              More than a gym — a second family
            </h2>
            <p className="mt-5 text-white/70">
              For over 20 years, Brian&apos;s Gym has been Sedalia&apos;s home for
              fitness. We&apos;re not a franchise — we&apos;re a community gym
              where the staff knows your name and the equipment is always clean
              and well-maintained.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Locally owned for 20+ years",
                "Clean, well-maintained equipment",
                "SilverSneakers & Healthy Contributions accepted",
                "Military, first responder, teacher & senior discounts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <Heart className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary mt-8">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="section bg-navy-light">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programs"
            title="Programs for every member"
            subtitle="From one-on-one coaching to childcare and senior fitness — we've got a place for you."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link
                  href={p.href}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-navy transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{p.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO TOUR */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Photo tour"
            title="Explore the facility"
            subtitle="Tap through the spaces that make Brian's Gym Sedalia's favorite place to train."
          />
          <Reveal className="mt-12">
            <PhotoTour />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section bg-navy-light">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="font-heading text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              &ldquo;Brian&apos;s Gym is the best gym in Sedalia. The staff is
              friendly and helpful, the equipment is always clean, and the
              atmosphere is welcoming. I&apos;ve been a member for years and
              wouldn&apos;t go anywhere else. It&apos;s like a second
              family!&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-accent">
              — Janette S. Morgan, Member
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
