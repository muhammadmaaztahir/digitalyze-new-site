import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Smartphone,
  Check,
  Store,
  Users,
  ShoppingCart,
  Building2,
  Bot,
  Compass,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Wrench,
  ChevronDown,
  ArrowRight,
  Star,
  Zap,
  ShieldCheck,
  Headphones,
  Layers,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development — Digitalyze" },
      {
        name: "description",
        content:
          "We build native iOS, Android and cross-platform React Native / Flutter apps for startups and enterprises. Get a free quote.",
      },
      {
        property: "og:title",
        content: "Mobile App Development — Digitalyze",
      },
      {
        property: "og:description",
        content:
          "Native iOS, Android and cross-platform mobile apps that users love to open every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/mobile-app-development" }],
  }),
  component: MobileAppDevelopmentPage,
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
          We'll reach out within 24 hours to discuss your mobile app idea.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <input
          required
          placeholder="Full Name"
          className="rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          className="rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
        />
        <button
          disabled={loading}
          className="rounded-md bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "Sending…" : "Get a Free Quote"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">Full Name</label>
        <input
          required
          placeholder="Jane Doe"
          className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">Phone Number</label>
          <input
            required
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">Email</label>
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">Project Details</label>
        <textarea
          required
          rows={3}
          placeholder="Tell us about your app idea, target users, and any platforms you have in mind..."
          className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand resize-none"
        />
      </div>
      <button
        disabled={loading}
        className="w-full rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get a Free Quote"}
      </button>
      <p className="text-center text-xs text-muted-foreground">No spam. We'll respond within 24 hours.</p>
    </form>
  );
}

const appTypes = [
  {
    icon: Store,
    title: "On-demand & Marketplace Apps",
    desc: "Booking, delivery, rental and service-matching platforms with real-time matching and payments.",
  },
  {
    icon: Users,
    title: "Social Apps",
    desc: "Community, messaging, content feeds and creator tools built for engagement and retention.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Apps",
    desc: "Mobile storefronts, carts, checkout, inventory and loyalty — integrated with Shopify, Stripe and more.",
  },
  {
    icon: Building2,
    title: "Enterprise & Internal Apps",
    desc: "Field service, workforce management, CRM companions and B2B tools that boost team productivity.",
  },
  {
    icon: Bot,
    title: "AI-Powered Apps",
    desc: "Smart assistants, recommendation engines, generative features and automation inside your mobile experience.",
  },
];

const techStack = [
  { name: "React Native", abbr: "RN" },
  { name: "Flutter", abbr: "FL" },
  { name: "Swift", abbr: "SW" },
  { name: "Kotlin", abbr: "KT" },
  { name: "Firebase", abbr: "FB" },
  { name: "Node.js", abbr: "NJ" },
];

const process = [
  { n: "01", title: "Discovery", desc: "We define your users, features, platforms and success metrics." },
  { n: "02", title: "UI/UX", desc: "Wireframes and clickable prototypes that shape the product experience." },
  { n: "03", title: "Development", desc: "Clean, scalable code using the right stack for your goals and budget." },
  { n: "04", title: "Testing", desc: "Functional, usability and device testing to catch issues before launch." },
  { n: "05", title: "App Store Launch", desc: "We prepare assets, metadata and handle submission to App Store & Play Store." },
  { n: "06", title: "Support", desc: "Post-launch monitoring, updates and ongoing feature iterations." },
];

const whyUs = [
  "Cross-platform builds to save cost without sacrificing quality",
  "Scalable architecture that grows with your user base",
  "App Store & Play Store submission handled end-to-end",
  "Post-launch maintenance and feature iteration support",
];

const portfolio = [
  { name: "FitTrack Pro", category: "Health & Fitness", result: "50k+ downloads in 3 months" },
  { name: "ShopSwift", category: "E-commerce", result: "3x mobile conversion lift" },
  { name: "FieldForce", category: "Enterprise", result: "Cut reporting time by 60%" },
];

const faqs = [
  {
    q: "How long does it take to build a mobile app?",
    a: "Most apps take 8–16 weeks from discovery to launch. A focused MVP can be ready in 6–8 weeks, while feature-rich platforms may take 4–6 months. We give you a fixed timeline after scope review.",
  },
  {
    q: "Should I build native or cross-platform?",
    a: "Native (Swift/Kotlin) is best when you need maximum performance, platform-specific features or complex animations. Cross-platform (React Native/Flutter) is ideal for faster delivery, lower cost and a single codebase. We recommend the right approach based on your budget and goals.",
  },
  {
    q: "Do you publish the app to the App Store and Play Store?",
    a: "Yes. We handle store assets, descriptions, metadata, build signing and submission — and we guide you through approval if any issues arise.",
  },
  {
    q: "What does post-launch support cost?",
    a: "We offer monthly maintenance retainers starting at a custom rate based on your app size, or one-off support blocks. Most clients start with 30–90 days of post-launch support included in the build package.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className="text-base font-semibold text-navy pr-4">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function MobileAppDevelopmentPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <Smartphone className="h-3.5 w-3.5" /> Mobile App Development
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]">
                Mobile Apps That Users <span className="text-brand">Love to Open</span> Every Day
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                We build native iOS & Android apps and cross-platform solutions with React Native and Flutter — designed, developed and launched to grow your business.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Check, text: "Native iOS & Android development" },
                  { icon: Check, text: "React Native & Flutter cross-platform" },
                  { icon: Check, text: "App Store & Play Store submission included" },
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
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-md border-2 border-background bg-gradient-to-br from-brand to-navy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <div>Trusted by 80+ founders worldwide</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-lg bg-card border border-border shadow-card p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-extrabold text-navy">
                  Get your free mobile app quote
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us about your app idea — we'll reply within 24 hours.
                </p>
                <div className="mt-5">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">What We Build</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
              Apps for every stage and every industry
            </h2>
            <p className="mt-3 text-muted-foreground">
              From consumer apps to enterprise tools, we ship mobile experiences that perform.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appTypes.map((app, i) => (
            <Reveal key={app.title} delay={i * 0.05}>
              <div className="group h-full rounded-lg border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-hover">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <app.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{app.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Tech Stack</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">The tools we use to build</h2>
              <p className="mt-3 text-muted-foreground">
                We pick the right technology for your product, budget and timeline.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {techStack.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 0.05}>
                <div className="group flex items-center gap-3 rounded-md border border-border bg-card px-5 py-3 shadow-soft transition-all hover:shadow-hover hover:border-brand/40">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-brand/10 text-brand font-bold text-sm group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    {tech.abbr}
                  </span>
                  <span className="font-semibold text-navy">{tech.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">From idea to app store</h2>
            <p className="mt-3 text-muted-foreground">
              A proven workflow that keeps your project transparent, on time and on budget.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => {
            const Icon = [Compass, Palette, Code2, TestTube2, Rocket, Wrench][i];
            return (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all hover:shadow-hover">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold text-brand/70 uppercase tracking-wider">Step {step.n}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Why Digitalyze</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why choose us for mobile development
              </h2>
              <p className="mt-4 text-white/70 max-w-lg">
                We combine product thinking, polished UI and production-grade engineering to ship apps that scale.
              </p>
              <button
                onClick={() => scrollToId("hero")}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.03]"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {whyUs.map((item, i) => {
                  const Icon = [Zap, Layers, ShieldCheck, Headphones][i];
                  return (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-md bg-white/5 border border-white/10 p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/20 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-base font-semibold text-white">{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Portfolio</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Recent mobile projects</h2>
            <p className="mt-3 text-muted-foreground">A preview of apps we've designed, built and launched.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <div className="group h-full rounded-lg border border-border bg-card overflow-hidden shadow-soft transition-all hover:shadow-hover">
                <div className="h-48 bg-gradient-to-br from-brand/20 to-navy/20 flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-brand/60 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">{project.category}</div>
                  <h3 className="mt-2 text-xl font-bold text-navy">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Ready to build your app?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mobile app projects typically start at <span className="font-bold text-brand">$8,000</span> — get a custom quote based on your features and platforms.
            </p>
            <button
              onClick={() => scrollToId("hero")}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-base font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.03]"
            >
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Questions about mobile app development</h2>
          </div>
        </Reveal>
        <div className="mt-10">
          {faqs.map((faq) => (
            <Reveal key={faq.q}>
              <FAQItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[0.75rem] bg-hero-gradient border border-border p-8 md:p-12">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-md bg-brand/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-navy leading-tight">
                  Let's turn your app idea into a product people use every day.
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Fill out the form and we'll get back to you within 24 hours with a free quote and next steps.
                </p>
              </div>
              <div className="rounded-lg bg-card border border-border shadow-card p-6 md:p-8">
                <LeadForm compact />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
