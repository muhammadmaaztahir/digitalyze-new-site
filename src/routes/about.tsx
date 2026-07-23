import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Users, Target, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Digitalyze — Software Development Agency" },
      { name: "description", content: "Learn about Digitalyze, our mission, and the team building software for startups and businesses." },
      { property: "og:title", content: "About Digitalyze" },
      { property: "og:description", content: "Meet the team building software that ships." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A team obsessed with shipping great products"
        subtitle="Digitalyze is a team of engineers, designers and product thinkers who partner with founders and businesses to turn ideas into working software."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", desc: "Make world-class product engineering accessible to every founder and business." },
            { icon: Users, title: "Our Team", desc: "Senior engineers, designers, and PMs — no junior handoffs." },
            { icon: Award, title: "Our Standards", desc: "Ship weekly. Communicate clearly. Take ownership. Always." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-lg border border-border bg-card p-8 card-hover">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-brand/10 text-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <Reveal>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03] hover:shadow-hover">
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
