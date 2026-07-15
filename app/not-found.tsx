import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center justify-center px-6 pt-24">
      <div className="text-center">
        <p className="font-heading text-7xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-white/65">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-accent mt-8">
          <Home className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
