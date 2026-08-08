import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Phone,
  ShieldCheck,
  Clock,
  Lock,
  Compass,
  Palette,
  Code2,
  Plug,
  TestTube2,
  Rocket,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services/mvp-development")({
  head: () => ({
    meta: [
      { title: "Launch Your MVP in 4-6 Weeks — Digitalyze" },
      {
        name: "description",
        content:
          "We design, build & launch your MVP in 4-6 weeks. Fixed timeline, fixed budget, 100% code ownership. Book a free consultation.",
      },
      { property: "og:title", content: "Launch Your MVP in 4-6 Weeks — Digitalyze" },
      {
        property: "og:description",
        content: "Validate your idea fast, raise funding, and get to market before competitors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/mvp-development" }],
  }),
  component: MvpLanding,
});

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="rounded-md bg-brand/10 border border-brand/30 p-6 text-center">
        <div className="grid h-12 w-12 mx-auto place-items-center rounded-md bg-brand text-brand-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy">Thanks — we got it!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll reach out within 24 hours to schedule your free consultation.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input required placeholder="Full Name" className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
        <input required type="tel" placeholder="Phone" className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
        <input required type="email" placeholder="Email" className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
        <button disabled={loading} className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-all hover:scale-[1.02] disabled:opacity-60">
          {loading ? "Sending…" : "Get Started"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">Full Name</label>
        <input required placeholder="Jane Doe" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">Phone Number</label>
        <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">Email</label>
        <input required type="email" placeholder="you@company.com" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">Your Idea</label>
          <select required defaultValue="" className="w-full rounded-md border border-border bg-white px-3 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand">
            <option value="" disabled>Select…</option>
            <option>SaaS Product</option>
            <option>Mobile App</option>
            <option>Web App</option>
            <option>Marketplace</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">Budget Range</label>
          <select required defaultValue="" className="w-full rounded-md border border-border bg-white px-3 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand">
            <option value="" disabled>Select…</option>
            <option>Under $2k</option>
            <option>$2k – $5k</option>
            <option>$5k – $10k</option>
            <option>$10k+</option>
          </select>
        </div>
      </div>
      <button disabled={loading} className="w-full rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.02] disabled:opacity-60">
        {loading ? "Sending…" : "Get a Free MVP Consultation"}
      </button>
      <p className="text-center text-xs text-muted-foreground">No spam. We'll respond within 24 hours.</p>
    </form>
  );
}

const included = [
  { icon: Compass, title: "Product discovery & scope definition" },
  { icon: Palette, title: "UI/UX design with clickable prototype" },
  { icon: Code2, title: "Full-stack development (web or mobile)" },
  { icon: Plug, title: "Core integrations (auth, payments, APIs)" },
  { icon: TestTube2, title: "Testing & QA" },
  { icon: Rocket, title: "Deployment & launch support" },
];

const process = [
  { n: "01", title: "Discovery Call", desc: "We align on goals, users, and the one thing your MVP must prove." },
  { n: "02", title: "Design & Prototype", desc: "Clickable prototype in week 1 — validate before we write code." },
  { n: "03", title: "Build", desc: "Weekly demos, transparent progress, production-grade code." },
  { n: "04", title: "Launch", desc: "Deploy, monitor, and hand over full ownership of code & infrastructure." },
];

const cases = [
  { name: "TradeFlow", desc: "B2B marketplace platform for suppliers & buyers", result: "Full MVP shipped in 8 weeks, secured seed funding" },
  { name: "Skill Space", desc: "Multi-tenant learning management system", result: "Supports 500+ concurrent students cleanly" },
  { name: "Mobirays", desc: "Custom e-commerce store & brand identity", result: "Online store live in 6 weeks, 4.2% conversion rate" },
];

const testimonials = [
  { quote: "Digitalyze built and shipped our B2B marketplace MVP in under 8 weeks. The weekly working demos and their agile approach helped us secure our seed funding round.", name: "Faisal Sheikh", role: "Co-founder, TradeFlow" },
  { quote: "Building a scalable, multi-tenant learning management system from scratch was a massive challenge. Digitalyze delivered Skill Space on time, supporting hundreds of concurrent users without any lag.", name: "Sarah Jenkins", role: "Director, Skill Space" },
  { quote: "We had a strong product offering but lacked a functional online store. Digitalyze developed our custom e-commerce platform and brand identity in 6 weeks. Over 40% of our sales shifted online in month one.", name: "Rayyan Siddiqui", role: "Founder, Mobirays" },
];

const faqs = [
  { q: "How much does an MVP cost?", a: "Our MVP Sprint starts around $4k and the Complete MVP Package typically ranges $10k–$25k depending on scope. We give you a fixed quote after a free 30-minute discovery call — no surprises." },
  { q: "How long does it take to build an MVP?", a: "The MVP Sprint takes 2 weeks. The Complete MVP Package ships in 4–6 weeks (occasionally up to 8 for heavier scope). Timelines are fixed and shared with you day one." },
  { q: "Do I own the code and IP?", a: "100%. All source code, designs, and IP are transferred to you on launch. You get GitHub access from day one and can leave at any milestone." },
  { q: "What if I only have an idea and no technical co-founder?", a: "That's who we build for. We act as your outsourced product & engineering team — from shaping the idea to launching v1. Many of our founders go on to raise using what we ship." },
  { q: "Do you help with fundraising / investor pitch after MVP?", a: "Yes. We share the demo assets, metrics dashboards, and technical due-diligence docs investors ask for. Several of our clients have raised pre-seed and seed rounds using their MVP." },
];

function MvpLanding() {
  return (
    <SiteLayout>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                  MVP Development
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]">
                  Launch Your MVP in <span className="text-brand">4–6 Weeks</span> — Without the Guesswork
                </h1>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  We design, build, and launch your Minimum Viable Product so you can validate your idea fast, raise funding, and get to market before competitors.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: Clock, text: "Fixed timeline" },
                    { icon: ShieldCheck, text: "Fixed budget, no surprises" },
                    { icon: Lock, text: "100% code & IP ownership" },
                  ].map((b) => (
                    <li key={b.text} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-brand/10 text-brand">
                        <b.icon className="h-4 w-4" />
                      </span>
                      <span className="font-semibold text-navy">{b.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[0,1,2,3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-md border-2 border-background bg-gradient-to-br from-brand to-navy" />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-brand">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                    <div>Trusted by 80+ founders worldwide</div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-6">
                <div className="rounded-lg bg-card border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-extrabold text-navy">
                    Get your free MVP consultation
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your idea — we'll reply within 24 hours.
                  </p>
                  <div className="mt-5">
                    <LeadForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">The Package</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">What's included in our MVP package</h2>
              <p className="mt-3 text-muted-foreground">Everything you need to go from idea to launched product — no gaps, no hidden add-ons.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="group flex items-start gap-4 rounded-md border border-border bg-card p-5 transition-all hover:border-brand/40 hover:shadow-hover">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-navy">{f.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">Pricing</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Pick the package that fits your stage</h2>
                <p className="mt-3 text-muted-foreground">Fixed scope. Fixed price. Delivered on time.</p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-lg border border-border bg-card p-8 shadow-soft transition-all hover:shadow-hover">
                  <div className="text-sm font-bold uppercase tracking-wider text-navy/60">MVP Sprint</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-navy">$4,000</span>
                    <span className="text-sm text-muted-foreground">starting</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">2-week focused engagement to validate one core feature.</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {[
                      "Discovery workshop",
                      "Clickable Figma prototype",
                      "One core feature, production-ready",
                      "Basic auth & database",
                      "Deployment to your domain",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-navy">{x}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToId("hero")} className="mt-8 w-full rounded-md border-2 border-navy px-5 py-3 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white">
                    Start This Package
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative h-full rounded-lg border-2 border-brand bg-card p-8 shadow-hover">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground">
                    Most Popular
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-brand">Complete MVP Package</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-navy">$12,000</span>
                    <span className="text-sm text-muted-foreground">starting</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">6–8 weeks. Full idea-to-launch, ready for real users and investors.</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {[
                      "Everything in MVP Sprint",
                      "Full UI/UX design system",
                      "Web or mobile app, end-to-end",
                      "Payments, auth, notifications",
                      "Admin dashboard & analytics",
                      "Launch support + 30 days of fixes",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-navy">{x}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToId("hero")} className="mt-8 w-full rounded-md bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-hover">
                    Start This Package
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Our Process</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">From idea to live product in 4 steps</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20" />
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative rounded-md border border-border bg-card p-6 text-center transition-all hover:shadow-hover hover:-translate-y-1">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-md bg-navy text-white text-lg font-extrabold shadow-card">
                    {p.n}
                  </div>
                  <div className="mt-4 text-lg font-bold text-navy">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">Case Studies</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">MVPs we've launched</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {cases.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.08}>
                  <div className="h-full rounded-lg border border-border bg-card p-6 transition-all hover:shadow-hover hover:-translate-y-1">
                    <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-navy via-navy to-brand" />
                    <div className="mt-5 text-lg font-extrabold text-navy">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
                      <Rocket className="h-3.5 w-3.5" /> {c.result}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Founders love us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">What our MVP clients say</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-lg border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-1 text-brand">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 text-navy leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-brand to-navy" />
                    <div>
                      <div className="text-sm font-bold text-navy">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">FAQ</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">MVP questions, answered</h2>
              </div>
            </Reveal>
            <div className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.04}>
                  <FaqItem q={f.q} a={f.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to launch your MVP?</h2>
              <p className="mt-3 text-white/70">Fill this in — we'll get back within 24 hours with a plan and quote.</p>
            </div>
            <div className="mt-8 max-w-3xl mx-auto">
              <LeadForm compact />
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <ShieldCheck className="h-4 w-4" /> No spam. 100% confidential.
            </div>
            <div className="mt-6 text-center">
              <button onClick={() => scrollToId("hero")} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors">
                Prefer the full form? <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
