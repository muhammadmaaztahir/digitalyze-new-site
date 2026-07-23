import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Digitalyze" },
      { name: "description", content: "Terms of Service for Digitalyze. Read our service terms, scoping policies, and software delivery guidelines." },
      { property: "og:title", content: "Terms of Service | Digitalyze" },
      { property: "og:description", content: "Understand our terms, scoping guarantees, and intellectual property transfers." },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: July 2026. These terms govern your use of our website, consults, and the general terms of our software agency services."
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="prose prose-slate max-w-none text-navy text-sm sm:text-base leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">1. Services and Scoping</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digitalyze provides software development, product design, MVP scoping, and consulting services. All custom mobile apps, SaaS platforms, and software features are scoped and governed by individual project agreements (Statements of Work, or SOW). We pledge fixed scope timelines and pricing structures to guarantee transparent expectations and prevent budget scope creep.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">2. User Accounts and Communications</h2>
              <p className="text-muted-foreground leading-relaxed">
                By requesting a quote or booking a consultation, you agree to provide complete, current, and correct details (name, email or phone, project brief). You agree to keep communications professional. Digitalyze reserves the right to reject service requests that do not align with our development stack capability or capacity schedules.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">3. Intellectual Property (IP) Ownership</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless designated otherwise in an agreed SOW, upon full payment of all invoiced development milestones, the custom code, Figma designs, database setups, and custom digital assets developed specifically for your project will be transferred entirely to you. Digitalyze retains the right to use general, non-proprietary code snippets, components, and open-source practices developed during standard engineering, as well as show anonymized case studies of delivered projects for promotional purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">4. Payments and Project Milestones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payments are determined based on mutually agreed fixed scopes, delivered in weekly or bi-weekly sprints with live demos. Sprints must be reviewed and accepted by the client. Delay in feedback, API accesses, or milestone payments may impact project schedules. Support extensions are subject to separate configuration retainer service fees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">5. Warranty and Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digitalyze warrants that all custom software will meet the functionalities explicitly detailed in the agreed SOW. We provide 30 days of complimentary post-launch support to resolve any unforeseen bugs. Under no circumstances shall Digitalyze be liable for indirect, incidental, or consequential damages (including lost profits or business interruptions) arising out of the deployment or use of the developed software platforms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate a project agreement in accordance with the termination clauses specified in the signed SOW, typically requiring written notice. Upon termination, client is responsible for paying for all milestones completed up to the termination date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms, and any dispute arising from your use of this site or our services, shall be governed by, and construed in accordance with, the laws of Pakistan, without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
