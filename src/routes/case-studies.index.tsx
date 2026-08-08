import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

// Image map — resolves string keys to imported asset URLs
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";

const imageMap: Record<string, string> = {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
};

export const Route = createFileRoute("/case-studies/")({
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
  component: WorkListPage,
});

function WorkListPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="Products we've built" subtitle="A selection of recent work across mobile, web, SaaS and custom software." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="group rounded-lg overflow-hidden bg-card border border-border card-hover h-full flex flex-col justify-between">
                <div>
                  <div className="h-60 relative overflow-hidden">
                    <img
                      src={imageMap[p.image] || project1}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
                    <h3 className="mt-2 text-xl font-bold text-navy">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand transition-colors"
                    >
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
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
