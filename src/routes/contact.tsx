import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 0C7.163 0 0 7.163 0 16.004c0 2.822.738 5.588 2.14 8.02L0 32l8.16-2.114a15.93 15.93 0 0 0 7.844 2.06h.007c8.841 0 16.004-7.163 16.004-16.004C31.995 7.163 24.845 0 16.004 0zm0 29.06a12.98 12.98 0 0 1-6.62-1.815l-.475-.283-4.844 1.256 1.293-4.723-.31-.485a12.98 12.98 0 0 1-1.994-6.986C3.054 8.812 8.812 3.054 16.004 3.054c3.475 0 6.74 1.354 9.19 3.808a12.9 12.9 0 0 1 3.802 9.148c0 7.192-5.758 12.95-12.992 12.95zm7.11-9.708c-.39-.195-2.3-1.135-2.657-1.264-.357-.13-.617-.195-.877.195-.26.39-1.006 1.264-1.234 1.524-.228.26-.455.293-.845.098-.39-.195-1.646-.607-3.135-1.937-1.16-1.035-1.943-2.312-2.171-2.702-.228-.39-.024-.6.171-.795.176-.175.39-.455.585-.683.195-.228.26-.39.39-.65.13-.26.065-.487-.033-.683-.098-.195-.877-2.115-1.202-2.897-.317-.762-.638-.658-.877-.67-.228-.01-.487-.012-.747-.012s-.683.098-1.04.487c-.357.39-1.362 1.33-1.362 3.246 0 1.916 1.394 3.766 1.589 4.026.195.26 2.744 4.19 6.646 5.876.929.401 1.653.64 2.218.819.932.297 1.78.255 2.45.155.747-.112 2.3-.94 2.625-1.848.325-.909.325-1.687.228-1.849-.098-.163-.358-.26-.748-.455z" />
    </svg>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !data.success) throw new Error("Submission failed");

      setSent(true);
      form.reset();
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

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
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-8 h-full shadow-card"
            >
              {sent ? (
                <div className="text-center py-10">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-brand/10 text-brand">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy">Message sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-brand hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {error && (
                    <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      Something went wrong sending your message. Please try again, or email us directly at{" "}
                      <a href="mailto:info@digitalyze.tech" className="underline font-medium">
                        info@digitalyze.tech
                      </a>.
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="name" required placeholder="Full name" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    <input name="email" required type="email" placeholder="Email address" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="phone" placeholder="Phone (optional)" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    <select name="project_type" required defaultValue="" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand">
                      <option value="" disabled>Project type</option>
                      <option>Website Development</option>
                      <option>Mobile App</option>
                      <option>Web App</option>
                      <option>SaaS Platform</option>
                      <option>Custom CRM</option>
                      <option>MVP</option>
                      <option>Custom Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <input name="budget" placeholder="Budget (optional)" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                  <textarea name="message" required rows={5} placeholder="Tell us about your project" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand resize-none" />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full cursor-pointer rounded-md bg-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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
                  { Icon: Mail, label: "Email", value: "info@digitalyze.tech", href: "mailto:info@digitalyze.tech" },
                  {
                    Icon: WhatsAppIcon,
                    label: "WhatsApp",
                    value: "+92 314 1305785",
                    href: `https://wa.me/923141305785?text=${encodeURIComponent(
                      "Hi! I came across your website and I'm interested in discussing a project. Could we talk?"
                    )}`,
                    external: true,
                  },
                  { Icon: MapPin, label: "Office", value: "Karachi, Pakistan" },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-brand text-brand-foreground shrink-0">
                      <c.Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className="text-white hover:text-brand transition-colors"
                        >
                          {c.value}
                        </a>
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