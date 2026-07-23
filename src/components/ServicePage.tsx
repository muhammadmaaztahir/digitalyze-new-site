import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  intro,
  features,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  intro: string;
  features: string[];
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03] hover:shadow-hover">
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="grid h-16 w-16 place-items-center rounded-lg bg-brand text-brand-foreground shadow-hover">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-navy">Built for teams that ship</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
            <div className="mt-6 rounded-md border border-dashed border-brand/30 bg-brand/5 p-5 text-sm text-navy">
              This page is a placeholder — detailed copy, case studies and pricing will be added next.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-8 shadow-card">
              <h3 className="text-lg font-bold text-navy">What's included</h3>
              <ul className="mt-5 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand/10 text-brand mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-navy">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[0.75rem] bg-navy p-10 md:p-14 text-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-md bg-brand/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white">Ready to get started?</h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">Book a free 30-minute call and get a tailored plan.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-hover transition-all hover:scale-[1.03]">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
