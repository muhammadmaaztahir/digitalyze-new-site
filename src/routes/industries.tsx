import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Building2,
  Cpu,
  UtensilsCrossed,
  Leaf,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Digitalyze" },
      {
        name: "description",
        content:
          "Digitalyze builds custom software for Fintech, Healthcare, Edtech, E-commerce, Logistics, Real Estate and more. Explore how we serve your industry.",
      },
      { property: "og:title", content: "Industries We Serve — Digitalyze" },
      {
        property: "og:description",
        content:
          "Custom software solutions tailored to the unique needs of your industry.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Landmark,
    name: "Fintech",
    tag: "Financial Technology",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-500/10",
    textColor: "text-blue-600",
    desc: "We build secure, compliant fintech platforms — from digital wallets and payment gateways to lending apps, trading dashboards and open banking integrations.",
    solutions: ["Digital Wallets & Payments", "Lending & Credit Platforms", "Trading & Investment Apps", "KYC / AML Compliance Tools", "Open Banking APIs"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    tag: "HealthTech",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-500/10",
    textColor: "text-rose-600",
    desc: "HIPAA-ready health platforms that connect patients, providers and insurers — telemedicine, EHR systems, appointment schedulers and remote patient monitoring.",
    solutions: ["Telemedicine Platforms", "EHR / EMR Systems", "Appointment Scheduling", "Remote Patient Monitoring", "Insurance & Claims Portals"],
  },
  {
    icon: GraduationCap,
    name: "Edtech",
    tag: "Education Technology",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-500/10",
    textColor: "text-violet-600",
    desc: "Learning management systems, virtual classrooms, assessment engines and student analytics — built to scale from a startup ed-platform to an enterprise LMS.",
    solutions: ["LMS & Course Platforms", "Virtual Classrooms", "Assessment & Quizzing Engines", "Student Analytics Dashboards", "Certification Management"],
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    tag: "Retail & Commerce",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-500/10",
    textColor: "text-amber-600",
    desc: "High-performance storefronts, multi-vendor marketplaces and headless commerce solutions with seamless payment, inventory and fulfilment integrations.",
    solutions: ["Custom Storefronts", "Multi-Vendor Marketplaces", "Headless Commerce", "Inventory Management", "Loyalty & Rewards Programs"],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    tag: "Logistics",
    color: "from-teal-500 to-emerald-600",
    bgLight: "bg-teal-500/10",
    textColor: "text-teal-600",
    desc: "Fleet tracking, route optimisation, warehouse management and last-mile delivery platforms that cut costs and give your operations real-time visibility.",
    solutions: ["Fleet & GPS Tracking", "Route Optimisation", "Warehouse Management", "Last-Mile Delivery Apps", "Supply Chain Analytics"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    tag: "PropTech",
    color: "from-sky-500 to-cyan-600",
    bgLight: "bg-sky-500/10",
    textColor: "text-sky-600",
    desc: "Property listing portals, CRMs for agents, virtual tour platforms, rental management systems and smart building IoT dashboards.",
    solutions: ["Property Listing Portals", "Agent & Broker CRMs", "Virtual Tour Platforms", "Rental Management Systems", "Smart Building Dashboards"],
  },
  {
    icon: Cpu,
    name: "SaaS & Enterprise",
    tag: "B2B SaaS",
    color: "from-indigo-500 to-blue-700",
    bgLight: "bg-indigo-500/10",
    textColor: "text-indigo-600",
    desc: "End-to-end B2B SaaS platforms with multi-tenancy, role-based access, usage billing, SSO and the analytics your enterprise customers demand.",
    solutions: ["Multi-Tenant Architecture", "Role-Based Access Control", "Usage-Based Billing", "SSO & Identity Management", "Admin & Analytics Portals"],
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Restaurant",
    tag: "FoodTech",
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-500/10",
    textColor: "text-orange-600",
    desc: "Online ordering systems, table reservation apps, kitchen display systems and delivery management platforms for restaurants, cloud kitchens and food marketplaces.",
    solutions: ["Online Ordering Apps", "Table Reservation Systems", "Kitchen Display Systems", "Delivery Management", "Loyalty & Subscription Programs"],
  },
  {
    icon: Leaf,
    name: "GreenTech & Sustainability",
    tag: "CleanTech",
    color: "from-green-500 to-emerald-500",
    bgLight: "bg-green-500/10",
    textColor: "text-green-600",
    desc: "Carbon tracking tools, renewable energy dashboards, ESG reporting platforms and IoT-connected environmental monitoring systems.",
    solutions: ["Carbon Footprint Trackers", "ESG Reporting Platforms", "Renewable Energy Dashboards", "IoT Environmental Monitoring", "Sustainability Analytics"],
  },
  {
    icon: Briefcase,
    name: "HR & Workforce",
    tag: "HRTech",
    color: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-500/10",
    textColor: "text-pink-600",
    desc: "Applicant tracking systems, payroll automation, employee self-service portals, performance management and workforce analytics platforms.",
    solutions: ["Applicant Tracking (ATS)", "Payroll & Benefits Automation", "Employee Self-Service Portals", "Performance Management", "Workforce Analytics"],
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Industries We Serve
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-navy leading-tight">
              Built for <span className="text-brand">Your Industry,</span>
              <br />Not Just Your Stack
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't do generic. Every solution we build is shaped by deep
              domain knowledge — the compliance requirements, user behaviour and
              competitive dynamics specific to your sector.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03] hover:shadow-hover"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-background px-6 py-3.5 text-sm font-semibold text-navy hover:border-brand hover:text-brand transition-all"
              >
                See Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <div className="group h-full flex flex-col rounded-xl border border-border bg-card p-8 card-hover">
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${ind.bgLight} mb-5`}>
                  <ind.icon className={`h-7 w-7 ${ind.textColor}`} />
                </div>

                {/* Tag + Title */}
                <span className={`text-xs font-semibold uppercase tracking-wider ${ind.textColor} mb-1`}>
                  {ind.tag}
                </span>
                <h2 className="text-2xl font-bold text-navy mb-3">{ind.name}</h2>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {ind.desc}
                </p>

                {/* Solutions list */}
                <ul className="mt-6 space-y-2">
                  {ind.solutions.map((sol) => (
                    <li key={sol} className="flex items-center gap-2 text-sm text-navy/80">
                      <span className={`h-1.5 w-1.5 rounded-full ${ind.bgLight.replace("/10", "")} flex-shrink-0`} />
                      {sol}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold ${ind.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  Discuss your {ind.name} project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[0.75rem] bg-navy p-10 md:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-md bg-brand/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-md bg-brand/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto">
                Don't see your industry?{" "}
                <span className="text-brand">Let's talk.</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">
                We've worked across many sectors. If your industry isn't listed,
                chances are we've solved a similar problem before. Tell us what you're building.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-hover transition-all hover:scale-[1.03]"
              >
                Get in Touch <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
