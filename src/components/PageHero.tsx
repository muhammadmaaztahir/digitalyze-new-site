import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-md bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-md bg-navy/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <Reveal>
          {eyebrow && (
            <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-navy leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
