import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, Smartphone, Globe, Cloud, Users, Rocket, Code2, Layout,
  Zap, DollarSign, UserCheck, LifeBuoy, Search, Palette, Wrench, Send,
  Star, Plus, Minus, ChevronLeft, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import heroVideo from "@/assets/heroVideo.mp4";
import heroDashboard1 from "@/assets/heroDashboard1.png";
import heroDashboard2 from "@/assets/heroDashboard2.png";
import heroDashboard3 from "@/assets/heroDashboard3.png";
import heroDashboard4 from "@/assets/heroDashboard4.png";
import heroDashboard5 from "@/assets/heroDashboard5.png";

const heroDashboardImages = [
  heroDashboard1,
  heroDashboard2,
  heroDashboard3,
  heroDashboard4,
  heroDashboard5,
];

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { icon: Smartphone, name: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android that users love.", to: "/services/mobile-app-development" },
  { icon: Globe, name: "Web App Development", desc: "Scalable, fast web applications built with modern frameworks.", to: "/services/web-app-development" },
  { icon: Cloud, name: "SaaS Development", desc: "End-to-end SaaS platforms with billing, auth and multi-tenancy.", to: "/services/saas-development" },
  { icon: Users, name: "Custom CRM Development", desc: "Tailored CRMs that fit your sales and operations perfectly.", to: "/services/custom-crm-development" },
  { icon: Rocket, name: "MVP Development", desc: "Ship your MVP in weeks — validate fast, iterate faster.", to: "/services/mvp-development" },
  { icon: Code2, name: "Custom Software Development", desc: "Bespoke software built exactly around your business logic.", to: "/services/custom-software-development" },
  { icon: Layout, name: "Business Website Development", desc: "Professional, fast-loading and high-converting websites for businesses of all sizes.", to: "/services/business-website-development" },
] as const;

const values = [
  { icon: Zap, title: "Fast Delivery", desc: "Sprint-based delivery with weekly demos." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Fixed scopes, no surprise invoices." },
  { icon: UserCheck, title: "Dedicated PM", desc: "One point of contact from kickoff to launch." },
  { icon: LifeBuoy, title: "Post-Launch Support", desc: "We stay on to help you scale and iterate." },
];

const steps = [
  { icon: Search, title: "Discovery", desc: "We dig into your goals, users and constraints to shape the plan." },
  { icon: Palette, title: "Design", desc: "Wireframes and polished UI that make your product a joy to use." },
  { icon: Wrench, title: "Development", desc: "Iterative builds with weekly demos and clean, tested code." },
  { icon: Send, title: "Deployment & Support", desc: "Launch, monitor, and continuously improve after go-live." },
];

const portfolio = [
  { name: "FinFlow", desc: "Personal finance app with 50k+ downloads.", tag: "Mobile App", gradient: "from-orange-400 to-pink-500" },
  { name: "ClinicOS", desc: "Multi-tenant clinic management SaaS.", tag: "SaaS", gradient: "from-blue-400 to-indigo-600" },
  { name: "SalesPilot", desc: "Custom CRM for a 200-person sales org.", tag: "CRM", gradient: "from-emerald-400 to-teal-600" },
  { name: "MerchantHub", desc: "B2B marketplace MVP shipped in 8 weeks.", tag: "MVP", gradient: "from-amber-400 to-rose-500" },
];

const testimonials = [
  { quote: "We had a rough Figma file and a deadline. Digitalyze turned it into a working MVP in under 7 weeks, and actually pushed back on a few features that would've slowed us down. That kind of honesty is rare.", name: "Sarah Chen", role: "Founder, FinFlow" },
  { quote: "Our old CRM was basically a spreadsheet with extra steps. They rebuilt it around how our sales team actually works, not some generic template. Adoption was instant because it just made sense.", name: "Marcus Johnson", role: "COO, SalesPilot" },
  { quote: "What stood out was the weekly demos. No black box for a month and then a surprise. We always knew exactly where the build stood, and the final product needed almost no revisions.", name: "Aisha Patel", role: "CEO, ClinicOS" },
  { quote: "We came in wanting a simple booking app and left with a much better product because the team kept asking the right questions early on instead of just building what we asked for.", name: "Daniyal Raza", role: "Co-founder, MerchantHub" },
  { quote: "Pricing was fixed upfront and stayed that way, even when we added a couple of features mid-project. No invoice surprises, which after two bad agency experiences was honestly the main thing that won us over.", name: "Emily Grant", role: "Operations Lead, Northbridge Retail" }
];

const faqs = [
  { q: "How long does a typical project take?", a: "It depends on the scope of your project. A simple MVP can take a few weeks, while a full-scale platform may take a few months. After our discovery call, we share a detailed timeline tailored to your requirements." },
  { q: "How much does it cost?", a: "We first understand your idea, goals, and requirements in detail — then provide a fixed-scope quote based on that. This way, you know exactly what you're paying for, with no hidden costs." },
  { q: "What does your process look like?", a: "We follow a simple 4-step process: Discovery, Design, Development, and Deployment & Support. We start by understanding your goals and requirements, move into wireframes and UI design, then build in iterative sprints with weekly demos, and finally launch with ongoing support to help you scale." },
  { q: "Do you sign an NDA?", a: "Absolutely. We sign a mutual NDA before any deep discussion of your idea or business." },
  { q: "What tech stack do you use?", a: "React, Next.js, React Native, Node.js, Python, Postgres, and cloud-native tooling on AWS or GCP. We pick the stack that fits your goals." },
  { q: "Do you provide post-launch support?", a: "Yes — every project comes with 30 days of free post-launch support, plus optional monthly retainers for ongoing work." },
];

const rotatingPhrases = [
  "Working Product",
  "Mobile App",
  "SaaS Platform",
  "Business Website",
  "Custom Software",
];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = rotatingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="text-brand">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-brand align-middle ml-0.5 animate-pulse" />
    </span>
  );
}


function HeroForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-lg border border-border bg-card p-6 md:p-7 shadow-card"
    >
      <h3 className="text-lg font-bold text-navy">Get a Free Quote</h3>
      <p className="mt-1 text-sm text-muted-foreground">Tell us about your project — we reply within 24h.</p>
      {sent ? (
        <div className="mt-6 rounded-md bg-brand/10 border border-brand/20 p-4 text-sm text-navy">
          Thanks! We'll be in touch shortly.
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          <input required placeholder="Your name" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition-colors" />
          <input required type="email" placeholder="Email or phone" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition-colors" />
          <select required defaultValue="" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition-colors">
            <option value="" disabled>Project type</option>
            <option>Mobile App</option>
            <option>Web App</option>
            <option>SaaS Platform</option>
            <option>CRM</option>
            <option>MVP</option>
            <option>Custom Software</option>
            <option>Business Website</option>
          </select>
          <textarea rows={3} placeholder="Tell us about your project" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition-colors resize-none" />
          <button type="submit" className="w-full rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-hover">
            Get Free Quote
          </button>
        </div>
      )}
    </form>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-md border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer">
        <span className="font-semibold text-navy">{q}</span>
        {open ? <Minus className="h-5 w-5 text-brand shrink-0" /> : <Plus className="h-5 w-5 text-brand shrink-0" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function TestimonialsCarousel() {
  const VISIBLE = 3;
  const count = testimonials.length;

  // Infinite loop: clone VISIBLE items at start & end
  const extended = [
    ...testimonials.slice(-VISIBLE),
    ...testimonials,
    ...testimonials.slice(0, VISIBLE),
  ];

  // idx points into extended array; real items start at index VISIBLE
  const [idx, setIdx] = useState(VISIBLE);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  // Which real testimonial is the "first" visible one
  const realIdx = ((idx - VISIBLE) % count + count) % count;

  // Auto-advance every 4s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setAnimate(true);
      setIdx((i) => i + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  // After CSS transition ends, silently jump if we hit a cloned zone
  const handleTransitionEnd = () => {
    if (idx >= count + VISIBLE) {
      setAnimate(false);
      setIdx(VISIBLE);
    } else if (idx < VISIBLE) {
      setAnimate(false);
      setIdx(count + VISIBLE - 1);
    }
  };

  // Re-enable animation after silent jump (one tick later)
  useEffect(() => {
    if (!animate) {
      const t = setTimeout(() => setAnimate(true), 20);
      return () => clearTimeout(t);
    }
  }, [animate]);

  const goTo = (dotIndex: number) => {
    setAnimate(true);
    setIdx(dotIndex + VISIBLE);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };

  const pct = 100 / VISIBLE; // each card = 33.33%
  const translateX = -(idx * pct);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy">What clients say</h2>
        </div>
      </Reveal>

      {/* Track container */}
      <div
        className="mt-6 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(${translateX}%)`,
            transition: animate ? "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((t, i) => (
            <div
              key={i}
              style={{ minWidth: `${pct}%`, maxWidth: `${pct}%` }}
              className="px-3 box-border py-10"
            >
              <div className="h-full rounded-lg border border-border bg-card p-7 card-hover">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-navy leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  {/* <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-brand to-navy text-white font-bold text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div> */}
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots — one per real testimonial */}
      <div className="mt-8 flex justify-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all cursor-pointer duration-300 ${i === realIdx ? "w-7 bg-brand" : "w-2.5 bg-navy/20 hover:bg-brand/50"
              }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function HeroDashboardCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroDashboardImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-full flex items-center justify-center overflow-visible">
      {/* Invisible placeholder image to reserve aspect ratio & height dynamically */}
      <img
        src={heroDashboardImages[0]}
        className="w-full h-auto object-contain opacity-0 pointer-events-none"
        aria-hidden="true"
        alt=""
      />
      
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={heroDashboardImages[index]}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 20 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
          alt={`Dashboard view ${index + 1}`}
        />
      </AnimatePresence>
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 800], [0, 180]);
  const blobY2 = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-hero-gradient">
        {/* Video Background */}
        {/* <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.4] pointer-events-none"
          style={{ mixBlendMode: "luminosity" }}
        /> */}
        {/* Gradient overlay for blending */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" /> */}
        <motion.div style={{ y: blobY1 }} className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-md bg-brand/15 blur-3xl pointer-events-none" />
        <motion.div style={{ y: blobY2 }} className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-md bg-navy/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    Software Development Agency
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full  bg-navy/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy animate-pulse" />
                    AI · SaaS · MVP · Custom Software
                  </span>

                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-navy leading-[1.05]">
                  We Turn Your <br />Idea Into a <br /><TypewriterText />
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  Digitalyze partners with startups, SMB's and enterprises to build mobile apps, web platforms, MVPs and custom software solutions<br /> <b>You Dream It. We Make It Happen.</b>
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03] hover:shadow-hover">
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-background px-6 py-3.5 text-sm font-semibold text-navy hover:border-brand hover:text-brand transition-all">
                    Book a Free Consultation
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative flex items-center justify-center w-full">
                <HeroDashboardCarousel />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-navy/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 50, s: "+", label: "Projects Delivered" },
              { n: 3, s: "+", label: "Years in the Industry" },
              { n: 98, s: "%", label: "Client Satisfaction" },
              { n: 100, s: "%", label: "On-Time Delivery" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-navy">
                    <CountUp to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">Our Services</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy">Everything you need to ship great software</h2>
            <p className="mt-4 text-muted-foreground">From first sketch to scaled product — we cover the full stack.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <Link to={s.to} className="block h-full">
                <div className="group h-full rounded-lg border border-border bg-card p-7 card-hover">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <div>
                <span className="inline-block rounded-md bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">Why Digitalyze</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Why teams choose us over the rest</h2>
                <p className="mt-5 text-white/70 max-w-md">
                  We combine the speed of a startup with the discipline of a mature engineering team. No fluff. No surprises.
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="rounded-md bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-brand text-brand-foreground">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">Our Process</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy">A simple, proven 4-step process</h2>
          </div>
        </Reveal>
        <div className="mt-14 relative grid gap-6 md:grid-cols-4">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand/20 via-brand to-brand/20" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-md bg-brand text-brand-foreground shadow-hover">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-2 text-xs font-bold text-brand">STEP {i + 1}</div>
                <h3 className="mt-1 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">Our Work</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy">Featured projects</h2>
              </div>
              <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                View all work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="group rounded-lg overflow-hidden bg-card border border-border card-hover">
                  <div className={`h-44 bg-gradient-to-br ${p.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-black opacity-90">
                      {p.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
                    <h3 className="mt-2 text-lg font-bold text-navy">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand transition-colors">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24">
          <Reveal>
            <div className="text-center">
              <span className="inline-block rounded-md bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">FAQ</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy">Frequently asked</h2>
            </div>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <FAQItem q={f.q} a={f.a} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[0.75rem] bg-navy p-10 md:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-md bg-brand/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-md bg-brand/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto">
                Let's Build Something <span className="text-brand">Great Together</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">
                Book a free 30-minute consultation and get a project plan tailored to your goals.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-hover transition-all hover:scale-[1.03]">
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
