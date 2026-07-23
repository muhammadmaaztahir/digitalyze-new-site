import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Digitalyze — Get a Free Project Quote" },
      { name: "description", content: "Get in touch with Digitalyze. Book a free consultation, get a quote, or chat with us on WhatsApp." },
      { property: "og:title", content: "Contact Digitalyze" },
      { property: "og:description", content: "Book a free consultation or get a quote for your next project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        subtitle="Tell us what you're building — we'll get back within 24 hours with next steps."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-lg border border-border bg-card p-8 shadow-card"
            >
              {sent ? (
                <div className="text-center py-10">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-brand/10 text-brand">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy">Message sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Full name" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    <input required type="email" placeholder="Email address" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input placeholder="Phone (optional)" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    <select required defaultValue="" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand">
                      <option value="" disabled>Project type</option>
                      <option>Mobile App</option>
                      <option>Web App</option>
                      <option>SaaS Platform</option>
                      <option>CRM</option>
                      <option>MVP</option>
                      <option>Custom Software</option>
                    </select>
                  </div>
                  <input placeholder="Budget (optional)" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                  <textarea required rows={5} placeholder="Tell us about your project" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand resize-none" />
                  <button type="submit" className="w-full rounded-md bg-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-hover">
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="rounded-lg bg-navy text-white p-8 h-full">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-2 text-white/70 text-sm">Prefer a quick chat? Reach us any of these ways.</p>
              <ul className="mt-8 space-y-5">
                {[
                  { Icon: Mail, label: "Email", value: "hello@digitalyze.com", href: "mailto:hello@digitalyze.com" },
                  { Icon: Phone, label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
                  { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/10000000000" },
                  { Icon: MapPin, label: "Office", value: "123 Innovation Street, Tech City" },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-brand text-brand-foreground shrink-0">
                      <c.Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-brand transition-colors">{c.value}</a>
                      ) : (
                        <div className="text-white">{c.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-white/10">
                <Link to="/" className="text-sm text-white/70 hover:text-brand">← Back to home</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
