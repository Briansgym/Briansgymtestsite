import Link from "next/link";
import {
  Dumbbell,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { hours, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Dumbbell className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-heading text-lg font-extrabold">
                Brian&apos;s Gym
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/65">
              {site.tagline}. Locally owned & operated for {site.yearsInBusiness}{" "}
              years — {site.facilitySize} sq ft with 24-hour access.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/75 hover:border-accent hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/75 hover:border-accent hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/75 hover:border-accent hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-trial"
                  className="text-sm font-semibold text-accent hover:text-white"
                >
                  Free 3-Day Trial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
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
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Staffed Hours
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {hours.map((h) => (
                <li key={h.day}>
                  <span className="block font-semibold text-white/85">
                    {h.day}
                  </span>
                  <span>{h.staffed}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary-light">
              24-Hour Key Card Access for Members
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Brian&apos;s Gym. All rights
            reserved.
          </p>
          <p>{site.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
