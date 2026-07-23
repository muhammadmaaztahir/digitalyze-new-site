import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Our Work — Digitalyze Portfolio" },
      { name: "description", content: "Explore case studies from apps, SaaS platforms, CRMs and MVPs shipped by Digitalyze." },
      { property: "og:title", content: "Digitalyze Portfolio" },
      { property: "og:description", content: "Case studies from products we've built and shipped." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: WorkPage,
});

const projects = [
  { name: "FinFlow", desc: "Personal finance app with 50k+ downloads.", tag: "Mobile App", gradient: "from-orange-400 to-pink-500" },
  { name: "ClinicOS", desc: "Multi-tenant clinic management SaaS.", tag: "SaaS", gradient: "from-blue-400 to-indigo-600" },
  { name: "SalesPilot", desc: "Custom CRM for a 200-person sales org.", tag: "CRM", gradient: "from-emerald-400 to-teal-600" },
  { name: "MerchantHub", desc: "B2B marketplace MVP shipped in 8 weeks.", tag: "MVP", gradient: "from-amber-400 to-rose-500" },
  { name: "FleetLink", desc: "Real-time fleet tracking web app.", tag: "Web App", gradient: "from-sky-400 to-cyan-600" },
  { name: "InvoicePro", desc: "Custom invoicing software for accountants.", tag: "Custom Software", gradient: "from-violet-400 to-fuchsia-600" },
];

function WorkPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="Products we've built" subtitle="A selection of recent work across mobile, web, SaaS and custom software." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="group rounded-lg overflow-hidden bg-card border border-border card-hover h-full">
                <div className={`h-52 bg-gradient-to-br ${p.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-black opacity-90">
                    {p.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
                  <h3 className="mt-2 text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand transition-colors">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03]">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
