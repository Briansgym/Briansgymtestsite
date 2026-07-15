import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { site, hours } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Brian's Gym in Sedalia, MO. Call 660-829-0997, email info@briansgym.com, or visit us at 1020 Thompson Blvd. See our hours and send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk fitness"
        subtitle="Questions about membership, training, or a tour? We're here to help — reach out any time."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-6">
            <Reveal>
              <div className="card">
                <h2 className="font-heading text-xl font-bold text-white">
                  Visit or reach us
                </h2>
                <ul className="mt-6 space-y-5 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <a
                        href={site.social.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        {site.address.full}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a href={site.phoneHref} className="hover:text-white">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href={site.emailHref} className="hover:text-white">
                        {site.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card">
                <div className="mb-4 flex items-center gap-2 text-accent">
                  <Clock className="h-5 w-5" />
                  <h2 className="font-heading text-lg font-bold text-white">
                    Staffed Hours
                  </h2>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-white/5 last:border-0">
                        <td className="py-3 pr-4 font-semibold text-white/85">
                          {h.day}
                        </td>
                        <td className="py-3 text-right text-white/65">
                          {h.staffed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-light">
                  <ShieldCheck className="h-4 w-4" />
                  24-Hour Key Card Access for Members
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Map to Brian's Gym"
                  src="https://www.google.com/maps?q=1020+Thompson+Blvd,+Sedalia,+MO+65301&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-navy-light/70 p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-white/60">
                We&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <ContactForm endpoint={site.forms.contact} variant="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
