import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Code2,
  Check,
  LayoutDashboard,
  Workflow,
  Package,
  BarChart3,
  Plug,
  Compass,
  Palette,
  TestTube2,
  Rocket,
  Wrench,
  ChevronDown,
  ArrowRight,
  Star,
  Layers,
  Headphones,
  Wallet,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/custom-software-development")({
  head: () => ({
    meta: [
      { title: "Custom Software Development — Digitalyze" },
      {
        name: "description",
        content:
          "Bespoke internal tools, automation systems and enterprise software built when off-the-shelf tools don't fit. Get a free quote from Digitalyze.",
      },
      {
        property: "og:title",
        content: "Custom Software Development — Digitalyze",
      },
      {
        property: "og:description",
        content:
          "Custom software built exactly around your business — workflows, automations, integrations and reporting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/custom-software-development" }],
  }),
  component: CustomSoftwareDevelopmentPage,
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
          We'll reach out within 24 hours to discuss your custom software project.
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
          placeholder="Tell us about your business challenge, current tools, and what you need built..."
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
    icon: LayoutDashboard,
    title: "Internal Business Tools",
    desc: "Custom dashboards, admin panels and operations tools built around the way your team actually works.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Systems",
    desc: "Eliminate repetitive manual work with smart automations, approval flows and triggered actions across your stack.",
  },
  {
    icon: Package,
    title: "Inventory & ERP-Style Systems",
    desc: "Stock tracking, order management, vendor portals and resource planning tailored to your supply chain.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics Platforms",
    desc: "Real-time KPI dashboards, custom reports and data visualizations that turn scattered data into decisions.",
  },
  {
    icon: Plug,
    title: "API Integrations Between Existing Tools",
    desc: "Connect your CRM, ERP, accounting, marketing and HR systems so data flows seamlessly and securely.",
  },
];

const process = [
  { n: "01", title: "Discovery", desc: "We learn your business, pain points, users and the exact problem the software must solve." },
  { n: "02", title: "Requirements", desc: "We document features, workflows, integrations, roles and success metrics before writing code." },
  { n: "03", title: "UX/UI Design", desc: "Wireframes and prototypes that prioritize usability, speed and adoption across your team." },
  { n: "04", title: "Development", desc: "Clean, scalable engineering with regular demos, clear milestones and full transparency." },
  { n: "05", title: "Testing", desc: "Functional, integration, security and user-acceptance testing before anything goes live." },
  { n: "06", title: "Launch & Support", desc: "Deployment, training, documentation and ongoing support to keep your system running smoothly." },
];

const whyUs = [
  "Deep discovery process that captures your real business logic",
  "Scalable architecture designed for growth and future integrations",
  "Dedicated support team that knows your system inside and out",
  "Transparent pricing with fixed quotes and no hidden surprises",
];

const portfolio = [
  { name: "OpsFlow", category: "Operations Platform", result: "Reduced manual reporting by 70%" },
  { name: "InventoryHub", category: "Inventory System", result: "Cut stockouts by 45% in 90 days" },
  { name: "ConnectBridge", category: "Integration Layer", result: "Unified 8 tools into one workflow" },
];

const faqs = [
  {
    q: "How much does custom software development cost?",
    a: "Custom software projects typically start around $10,000 for a focused internal tool or automation and scale based on complexity, integrations and user roles. We provide a fixed-price quote after the discovery phase.",
  },
  {
    q: "How long does it take to build custom software?",
    a: "Most focused tools and automation systems take 8–14 weeks from discovery to launch. Larger enterprise platforms with multiple modules and integrations may take 3–6 months. We share a clear timeline before work begins.",
  },
  {
    q: "How does your requirements gathering process work?",
    a: "We start with stakeholder interviews, workflow mapping and a review of your existing tools. Then we document user stories, data models, integrations and acceptance criteria so everyone agrees on scope before development starts.",
  },
  {
    q: "What does post-launch support include?",
    a: "We offer 30–90 days of post-launch support in most build packages, plus monthly maintenance retainers. This covers bug fixes, monitoring, minor enhancements, training and documentation updates.",
  },
  {
    q: "Who owns the data and source code?",
    a: "You do. All source code, designs, documentation and data are transferred to you on launch. We can deploy to your own cloud account and set up backups, access controls and compliance measures around your requirements.",
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

function CustomSoftwareDevelopmentPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <Code2 className="h-3.5 w-3.5" /> Custom Software Development
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]">
                Custom Software Built <span className="text-brand">Exactly Around</span> Your Business
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                We design and build bespoke internal tools, workflow automation systems and enterprise software solutions — for when off-the-shelf products simply don't fit your operations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Check, text: "Bespoke tools tailored to your workflows" },
                  { icon: Check, text: "Automation that eliminates manual work" },
                  { icon: Check, text: "Secure integrations with your existing stack" },
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
                  Get your free custom software quote
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us about your challenge — we'll reply within 24 hours.
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
              Software that fits your operations, not the other way around
            </h2>
            <p className="mt-3 text-muted-foreground">
              From internal tools to enterprise platforms, we build systems designed around your unique business logic.
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

      {/* PROCESS */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Our Process</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">From business problem to working software</h2>
              <p className="mt-3 text-muted-foreground">
                A structured, transparent workflow that keeps your project on time and on budget.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => {
              const Icon = [Compass, Check, Palette, Code2, TestTube2, Rocket, Wrench][i];
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
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Why Digitalyze</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why choose us for custom software
              </h2>
              <p className="mt-4 text-white/70 max-w-lg">
                We combine business consulting, product design and engineering to build software your team actually wants to use.
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
                  const Icon = [Compass, Layers, Headphones, Wallet][i];
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
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Recent custom software projects</h2>
            <p className="mt-3 text-muted-foreground">A preview of bespoke systems we've designed, built and launched.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <div className="group h-full rounded-lg border border-border bg-card overflow-hidden shadow-soft transition-all hover:shadow-hover">
                <div className="h-48 bg-gradient-to-br from-brand/20 to-navy/20 flex items-center justify-center">
                  <Code2 className="h-12 w-12 text-brand/60 group-hover:scale-110 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Ready to stop working around your software?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Custom software projects typically start at <span className="font-bold text-brand">$10,000</span> — get a tailored quote based on your workflows, integrations and scale.
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
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">Questions about custom software development</h2>
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
                  Let's build software that works the way your business does.
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
