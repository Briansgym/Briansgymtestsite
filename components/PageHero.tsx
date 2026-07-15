import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-light pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-14 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
