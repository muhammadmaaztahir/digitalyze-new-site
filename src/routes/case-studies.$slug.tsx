import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowLeft, ExternalLink, Clock, Tag, Globe, CheckCircle2 } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/lib/projects";

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

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    return {
      meta: [
        { title: project ? `${project.name} Case Study — Digitalyze` : "Case Study — Digitalyze" },
        {
          name: "description",
          content: project
            ? `Learn how Digitalyze built ${project.name}: ${project.tagline}`
            : "Digitalyze case study.",
        },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { project } = Route.useLoaderData() as any;
  const imgSrc = imageMap[project.image] ?? project1;

  return (
    <SiteLayout>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-brand/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all work
            </Link>
          </Reveal>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-block rounded-md bg-brand/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                  {project.tag}
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  {project.name}
                </h1>
                <p className="mt-4 text-lg text-white/70 max-w-xl">{project.tagline}</p>
              </Reveal>

              {/* Meta details */}
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                    <Globe className="h-4 w-4 text-brand" />
                    <span><strong>Industry:</strong> {project.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                    <Clock className="h-4 w-4 text-brand" />
                    <span><strong>Duration:</strong> {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                    <Tag className="h-4 w-4 text-brand" />
                    <span>{project.tag}</span>
                  </div>
                </div>
              </Reveal>

              {/* Tech Stack pills here to save page vertical space */}
              <Reveal delay={0.15}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="rounded bg-white/10 border border-white/5 px-2.5 py-1 text-xs font-medium text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.03] transition-transform"
                  >
                    Visit Live Site <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={imgSrc}
                    alt={`${project.name} screenshot`}
                    className="w-full h-64 sm:h-80 lg:h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHALLENGE, SOLUTION & OUTCOMES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: Challenge */}
          <Reveal>
            <div>
              <div>
                <span className="inline-block rounded-md bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                  The Challenge
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
                  What was the problem?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">{project.challenge}</p>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Solution & Impact */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-block rounded-md bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                  The Solution
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
                  How we solved it
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-6">{project.solution}</p>
              </div>

              {/* Results metrics embedded right here */}
              <div className="border-t border-border/60 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-navy mb-4 block">
                  Key Outcomes & Impact
                </span>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.results.map((result: string, i: number) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-snug">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[0.75rem] bg-navy p-10 md:p-14 text-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/35 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white max-w-2xl mx-auto">
                Ready to build something like this?
              </h2>
              <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
                Let's talk about your project goals and see how Digitalyze can help you ship fast,
                effectively and scale.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.03] transition-transform"
                >
                  Start Your Project <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
