import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={images.cta}
        alt="Athlete training with free weights at Brian's Gym"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-primary-dark/80" />
      <div className="container-page relative py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">No commitment. No credit card.</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Try Brian&apos;s Gym free for 3 days
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Experience 26,000 sq ft of premium fitness, 24-hour access, and a
            community that feels like family. Come see why Sedalia trains here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-trial" className="btn-accent px-8 py-4 text-base">
              Start Your Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/membership"
              className="btn-outline px-8 py-4 text-base"
            >
              View Membership Options
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
