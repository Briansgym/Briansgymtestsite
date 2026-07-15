import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-white/70 sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
