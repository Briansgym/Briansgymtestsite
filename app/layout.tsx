import type { Metadata } from "next";
import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "gym Sedalia MO",
    "fitness Sedalia",
    "24 hour gym Sedalia",
    "personal training Sedalia",
    "Brian's Gym",
    "SilverSneakers Sedalia",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSans.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
