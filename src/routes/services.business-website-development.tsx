import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Phone,
  ShieldCheck,
  Clock,
  Lock,
  Globe,
  Palette,
  Code2,
  Search,
  Zap,
  Settings,
  Star,
  ChevronDown,
  ArrowRight,
  Layout,
  ShoppingCart,
  Blocks,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services/business-website-development")(
  {
    head: () => ({
      meta: [
        {
          title:
            "Business Website Development — WordPress, Shopify, Webflow & More | Digitalyze",
        },
        {
          name: "description",
          content:
            "Professional business website development on WordPress, Shopify, Wix, Squarespace and Webflow. Custom designs, fast delivery, 100% ownership. Get a free quote.",
        },
        {
          property: "og:title",
          content:
            "Business Website Development — WordPress, Shopify, Webflow & More | Digitalyze",
        },
        {
          property: "og:description",
          content:
            "We build stunning, high-converting business websites on any platform you choose — WordPress, Shopify, Wix, Squarespace or Webflow.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "canonical",
          href: "/services/business-website-development",
        },
      ],
    }),
    component: BusinessWebsiteLanding,
  }
);

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
          We'll reach out within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          required
          placeholder="Full Name"
          className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          disabled={loading}
          className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-all hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "Sending…" : "Get Started"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          Full Name
        </label>
        <input
          required
          placeholder="Jane Doe"
          className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          Phone Number
        </label>
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
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            Platform Preference
          </label>
          <select
            required
            defaultValue=""
            className="w-full rounded-md border border-border bg-white px-3 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          >
            <option value="" disabled>Select…</option>
            <option>WordPress</option>
            <option>Shopify</option>
            <option>Wix</option>
            <option>Squarespace</option>
            <option>Webflow</option>
            <option>Not Sure</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            Budget Range
          </label>
          <select
            required
            defaultValue=""
            className="w-full rounded-md border border-border bg-white px-3 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          >
            <option value="" disabled>Select…</option>
            <option>Under $1k</option>
            <option>$1k – $3k</option>
            <option>$3k – $7k</option>
            <option>$7k+</option>
          </select>
        </div>
      </div>
      <button
        disabled={loading}
        className="w-full rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-hover transition-all hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get a Free Website Consultation"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        No spam. We'll respond within 24 hours.
      </p>
    </form>
  );
}

// ── Platforms ──────────────────────────────────────────────────────────────────
const platforms = [
  {
    icon: Code2,
    name: "WordPress",
    tagline: "The world's #1 CMS",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Fully custom themes & child themes",
      "WooCommerce for e-commerce",
      "Advanced Custom Fields (ACF) & Gutenberg blocks",
      "SEO-ready with Yoast / RankMath",
      "Plugin integration & custom development",
      "Multi-language & multi-site support",
    ],
    bestFor: "Blogs, business sites, content-heavy portals & e-commerce",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    tagline: "The e-commerce powerhouse",
    color: "from-green-500 to-emerald-600",
    features: [
      "Custom Liquid theme development",
      "Shopify 2.0 sections & app blocks",
      "Payment gateway integration",
      "Inventory & order management setup",
      "App store integrations (Klaviyo, Gorgias, etc.)",
      "Performance & conversion optimisation",
    ],
    bestFor: "Online stores, DTC brands & product-led businesses",
  },
  {
    icon: Blocks,
    name: "Wix",
    tagline: "Drag-and-drop simplicity",
    color: "from-yellow-400 to-orange-500",
    features: [
      "Custom Wix Studio / Editor X builds",
      "Wix Velo (JavaScript) advanced functionality",
      "Wix Stores & booking systems",
      "Dynamic pages & CMS collections",
      "Third-party app & API integrations",
      "Mobile-first responsive design",
    ],
    bestFor: "SMBs, service businesses & creative studios",
  },
  {
    icon: Layout,
    name: "Squarespace",
    tagline: "Beautiful out of the box",
    color: "from-slate-600 to-gray-800",
    features: [
      "Template customisation & CSS overrides",
      "Squarespace Commerce setup",
      "Portfolio & gallery websites",
      "Appointment & scheduling setup",
      "Blog & membership site configuration",
      "Custom code injection & animations",
    ],
    bestFor: "Creatives, photographers, boutique brands & service pros",
  },
  {
    icon: Layers,
    name: "Webflow",
    tagline: "Designer-grade, no-code power",
    color: "from-purple-500 to-violet-700",
    features: [
      "Pixel-perfect custom Webflow builds",
      "CMS collections & dynamic content",
      "Interactions & scroll animations",
      "Webflow Memberships & e-commerce",
      "Finsweet & Memberstack integrations",
      "Clean, exportable HTML/CSS",
    ],
    bestFor: "Startups, SaaS marketing sites & design-forward brands",
  },
];

// ── What's Included ────────────────────────────────────────────────────────────
const included = [
  { icon: Palette, title: "Custom UI/UX Design" },
  { icon: Globe, title: "Responsive & Mobile-First Layout" },
  { icon: Search, title: "On-Page SEO Setup" },
  { icon: Zap, title: "Speed & Performance Optimisation" },
  { icon: Settings, title: "Platform Configuration & Integrations" },
  { icon: ShieldCheck, title: "Security Hardening & SSL" },
];

// ── Process ────────────────────────────────────────────────────────────────────
const process = [
  { n: "01", title: "Discovery Call", desc: "We learn about your brand, goals, audience, and the platform that fits best." },
  { n: "02", title: "Design & Prototype", desc: "Mockups or wireframes reviewed and approved before any development begins." },
  { n: "03", title: "Build & Configure", desc: "Full development, content migration, integrations and quality checks." },
  { n: "04", title: "Launch & Handover", desc: "Deploy to your domain, train your team, and hand over full ownership." },
];

// ── Portfolio ──────────────────────────────────────────────────────────────────
const cases = [
  { name: "GreenLeaf Organics", desc: "Shopify store for a wellness brand", result: "3× conversion rate in 60 days" },
  { name: "Hartwell Law Group", desc: "WordPress site for a US law firm", result: "58% more qualified leads per month" },
  { name: "Novaflow SaaS", desc: "Webflow marketing site for a B2B SaaS", result: "Launched in 12 days, $0 dev debt" },
];

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  { quote: "They took our outdated WordPress site and turned it into something that actually converts. Our bounce rate dropped by half in the first month.", name: "Laura M.", role: "Founder, GreenLeaf Organics" },
  { quote: "Our Shopify store now runs like a machine. They handled the custom theme, integrations, and even trained our team — all on time and on budget.", name: "James R.", role: "COO, DTC Sportswear Brand" },
  { quote: "The Webflow site they built for us ranks on page one for our core keywords and looks absolutely stunning. Worth every penny.", name: "Priya K.", role: "Marketing Lead, Novaflow" },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Which platform is right for my business?", a: "It depends on your goals. WordPress is ideal for content-rich sites and flexible e-commerce. Shopify is the best choice for serious online stores. Wix and Squarespace are great for SMBs that want easy self-management. Webflow excels for design-forward brands and SaaS marketing sites. We'll recommend the right fit after a free discovery call." },
  { q: "How much does a business website cost?", a: "A simple informational site starts around $1,000–$3,000. A full e-commerce store or feature-rich corporate site typically ranges from $3,000–$10,000+. After our discovery call, we give you a fixed-scope quote with no surprises." },
  { q: "How long does it take?", a: "Most business websites are completed in 2–6 weeks depending on scope. Landing pages and brochure sites are typically 1–2 weeks. E-commerce and feature-rich projects take 4–8 weeks." },
  { q: "Can you migrate my existing website?", a: "Yes. We handle full content, product, and media migrations from any existing platform to your new site with zero downtime." },
  { q: "Will I be able to manage the site myself after launch?", a: "Absolutely. We build for self-sufficiency — you'll receive a personalised walkthrough and documentation so you can update content, add products, and manage the site without needing a developer." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer monthly maintenance retainers covering security updates, plugin/theme updates, backups, uptime monitoring, and priority support." },
];

// ── Main Component ─────────────────────────────────────────────────────────────
function BusinessWebsiteLanding() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                Business Website Development
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]">
                Websites That{" "}
                <span className="text-brand">Grow Your Business</span> — On Any Platform
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                We design and develop high-converting business websites on WordPress, Shopify, Wix, Squarespace, and Webflow — custom-built to your brand and goals.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Clock, text: "Fast turnaround — 2 to 6 weeks" },
                  { icon: ShieldCheck, text: "Fixed price, no hidden fees" },
                  { icon: Lock, text: "Full ownership of design & content" },
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
                  <div>Trusted by 80+ businesses worldwide</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-lg bg-card border border-border shadow-card p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-extrabold text-navy">
                  Get your free website consultation
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us about your project — we'll reply within 24 hours.
                </p>
                <div className="mt-5">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Platforms We Work On</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
              Every major platform, expertly handled
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether you already have a platform in mind or need a recommendation — we've got you covered.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-hover hover:border-brand/30">
                <div className="grid md:grid-cols-[280px_1fr] items-stretch">
                  {/* Left colour panel */}
                  <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br ${p.color} p-8 text-white`}>
                    <div className="grid h-16 w-16 place-items-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <p.icon className="h-8 w-8" />
                    </div>
                    <div className="mt-4 text-2xl font-extrabold">{p.name}</div>
                    <div className="mt-1 text-sm text-white/80 font-medium">{p.tagline}</div>
                    <div className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white border border-white/30">
                      Best for: {p.bestFor.split("&")[0].trim()}…
                    </div>
                  </div>
                  {/* Right content */}
                  <div className="p-6 md:p-8">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                          <span className="text-sm text-navy">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-navy">Best for:</span> {p.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Every Project Includes</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                What we deliver with every website
              </h2>
              <p className="mt-3 text-muted-foreground">
                A complete package — not just a pretty design but a site built to rank, convert, and scale.
              </p>
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
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Pricing</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                Simple, transparent packages
              </h2>
              <p className="mt-3 text-muted-foreground">Fixed scope. Fixed price. Delivered on time.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <Reveal>
              <div className="h-full rounded-lg border border-border bg-card p-8 shadow-soft transition-all hover:shadow-hover">
                <div className="text-sm font-bold uppercase tracking-wider text-navy/60">Starter</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-navy">$999</span>
                  <span className="text-sm text-muted-foreground">starting</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A clean, professional online presence for small businesses in under 2 weeks.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Up to 5 pages",
                    "Custom design",
                    "Mobile responsive",
                    "SEO foundations",
                    "Contact form & map",
                    "1 round of revisions",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-navy">{x}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToId("hero")}
                  className="mt-8 w-full rounded-md border-2 border-navy px-5 py-3 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  Start This Package
                </button>
              </div>
            </Reveal>

            {/* Business — Most Popular */}
            <Reveal delay={0.08}>
              <div className="relative h-full rounded-lg border-2 border-brand bg-card p-8 shadow-hover">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground">
                  Most Popular
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-brand">Business</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-navy">$2,999</span>
                  <span className="text-sm text-muted-foreground">starting</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A full-featured business site built to generate leads and rank on Google.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Up to 15 pages",
                    "Premium UI/UX design",
                    "Blog / CMS setup",
                    "Advanced SEO & speed optimisation",
                    "Lead capture & CRM integration",
                    "2 rounds of revisions",
                    "30 days post-launch support",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-navy">{x}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToId("hero")}
                  className="mt-8 w-full rounded-md bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-hover"
                >
                  Start This Package
                </button>
              </div>
            </Reveal>

            {/* E-commerce */}
            <Reveal delay={0.16}>
              <div className="h-full rounded-lg border border-border bg-card p-8 shadow-soft transition-all hover:shadow-hover">
                <div className="text-sm font-bold uppercase tracking-wider text-navy/60">E-Commerce</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-navy">$4,999</span>
                  <span className="text-sm text-muted-foreground">starting</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A high-converting online store built to sell — on Shopify, WooCommerce or Webflow Commerce.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Everything in Business",
                    "E-commerce setup & product import",
                    "Payment gateway integration",
                    "Custom checkout & cart pages",
                    "Email marketing integrations",
                    "Inventory & order management",
                    "3 rounds of revisions",
                    "60 days post-launch support",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-navy">{x}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToId("hero")}
                  className="mt-8 w-full rounded-md border-2 border-navy px-5 py-3 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  Start This Package
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Our Process</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                Your website, delivered in 4 steps
              </h2>
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
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Case Studies</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                Websites we've launched
              </h2>
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
                    <ArrowRight className="h-3.5 w-3.5" /> {c.result}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Client Love</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                What our website clients say
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-lg border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-1 text-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-navy leading-relaxed">
                    "{t.quote}"
                  </blockquote>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy">
                Website questions, answered
              </h2>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to launch your website?
            </h2>
            <p className="mt-3 text-white/70">
              Fill this in — we'll get back within 24 hours with a plan and quote.
            </p>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <LeadForm compact />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4" /> No spam. 100% confidential.
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => scrollToId("hero")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors"
            >
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
        <ChevronDown
          className={`h-5 w-5 text-brand shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
