import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";


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
  { name: "FinFlow", desc: "Personal finance app with 50k+ downloads.", tag: "Mobile App", image: project1, website: "https://innovationsapplied.com/" },
  { name: "ClinicOS", desc: "Multi-tenant clinic management SaaS.", tag: "SaaS", image: project6, website: "http://learning-hub-lms.vercel.app/" },
  { name: "SalesPilot", desc: "Custom CRM for a 200-person sales org.", tag: "CRM", image: project4, website: "https://truerefinedsolutions.com/" },
  { name: "MerchantHub", desc: "B2B marketplace MVP shipped in 8 weeks.", tag: "MVP", image: project2, website: "https://scentyque.pk/" },
  { name: "FleetLink", desc: "Real-time fleet tracking web app.", tag: "Web App", image: project5, website: "https://mobirays.com/" },
  { name: "InvoicePro", desc: "Custom invoicing software for accountants.", tag: "Custom Software", image: project7, website: "https://tradeflow.digitalyze.tech/" },
  { name: "InvoicePro", desc: "Custom invoicing software for accountants.", tag: "Custom Software", image: project3, website: "https://alsaudipak.com/" },
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

                <div className={`h-60`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
                  <h3 className="mt-2 text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                 
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand transition-colors">
                        View Case Study <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy transition-colors"
                      >
                        Visit Website <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
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
