import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Digitalyze" },
      { name: "description", content: "Privacy Policy for Digitalyze. Learn how we handle your personal data and confidentiality." },
      { property: "og:title", content: "Privacy Policy | Digitalyze" },
      { property: "og:description", content: "Details on how Digitalyze collects, uses, and protects your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 2026. This policy describes how we collect, use, and share your personal information when you visit or make use of our services."
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="prose prose-slate max-w-none text-navy text-sm sm:text-base leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information directly from you when you request a quote, contact us, or interact with our website. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed">
                <li><strong>Contact details:</strong> such as your name, email address, phone number, and company name.</li>
                <li><strong>Communication preferences:</strong> and history of your queries and quote requests.</li>
                <li><strong>Project briefs:</strong> and details regarding your technical product ideas, user flows, and software specifications.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to coordinate, design, and deliver software engineering projects, specifically to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed">
                <li>Provide software estimations, pricing quotes, and consult on product architecture.</li>
                <li>Deliver development services, execute project milestones, and conduct weekly demos.</li>
                <li>Maintain communications, answer technical queries, and provide post-launch support.</li>
                <li>Comply with legal obligations and enforce our site policies.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">3. Confidentiality & Non-Disclosure Agreements (NDA)</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Digitalyze, we take client ideas and proprietary business logic extremely seriously. As a software agency, it is our policy to sign a mutual Non-Disclosure Agreement (NDA) with clients before receiving any sensitive database schemas, Figma links, or business intellectual property. Your designs and codebase are yours alone, and we maintain strictly restricted access controls to repositories and deployments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">4. Data Sharing and Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or transfer your personally identifiable information to external third parties. We may share information with trusted third-party service providers (such as cloud hosting partners like AWS, GCP, or Vercel, and communication tools) who assist us in operating our website or executing software development project deliverables, provided they promise to keep this information strictly confidential.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">5. Security of Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement a variety of industry-standard security measures to maintain the safety of your personal information. We utilize clean, secure coding methodologies, multi-factor authentication, and end-to-end encrypted repositories during the design, development, and hosting phases of our software products.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have rights regarding your personal data. This includes the right to request access to the data we hold of you, to correct inaccuracies, or request complete deletion of your records. Please reach out to <a href="mailto:info@digitalyze.tech" className="text-brand hover:underline font-medium">info@digitalyze.tech</a> to submit any request related to your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-navy">7. Updates to this Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify this privacy policy from time to time to reflect modifications in our software delivery processes or changes in applicable local laws. The latest version will always be posted on this page with the revised "Last updated" date.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
