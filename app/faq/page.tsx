import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/lib/faq";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Brian's Gym in Sedalia — hours, pricing, memberships, the Kid Zone, SilverSneakers, discounts, and personal training.",
};

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about training at Brian's Gym. Can't find your answer? Just reach out."
      />

      <section className="section">
        <div className="container-page">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-white/70">Still have questions?</p>
            <Link href="/contact" className="btn-accent mt-4">
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
