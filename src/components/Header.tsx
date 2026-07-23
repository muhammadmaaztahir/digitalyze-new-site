import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, Phone, ChevronDown,
  Smartphone, Globe, Cloud, Users, Rocket, Code2, ArrowRight, Layout,
} from "lucide-react";
import logo from "@/assets/logoDark.png";

const services = [
  {
    icon: Smartphone,
    name: "Mobile App Development",
    desc: "Native & cross-platform iOS and Android apps.",
    to: "/services/mobile-app-development",
  },
  {
    icon: Globe,
    name: "Web App Development",
    desc: "Fast, scalable web apps with modern frameworks.",
    to: "/services/web-app-development",
  },
  {
    icon: Cloud,
    name: "SaaS Development",
    desc: "End-to-end SaaS with billing, auth & multi-tenancy.",
    to: "/services/saas-development",
  },
  {
    icon: Users,
    name: "Custom CRM Development",
    desc: "Tailored CRMs that fit your sales workflow perfectly.",
    to: "/services/custom-crm-development",
  },
  {
    icon: Rocket,
    name: "MVP Development",
    desc: "Ship your MVP in weeks — validate fast, iterate faster.",
    to: "/services/mvp-development",
  },
  {
    icon: Code2,
    name: "Custom Software Development",
    desc: "Bespoke software built around your business logic.",
    to: "/services/custom-software-development",
  },
  {
    icon: Layout,
    name: "Business Website Development",
    desc: "Professional, fast-loading and high-converting websites for businesses of all sizes.",
    to: "/services/business-website-development",
  },
] as const;

const techStack = ["React", "Next.js", "React Native", "Node.js", "Python", "PostgreSQL", "AWS", "TypeScript"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50  transition-all duration-300 border-b border-navy/10 ${
        scrolled ? "bg-white/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between py-3">
          <Link to="/" className="flex items-center shrink-0 py-2">
            <img src={logo} alt="Digitalyze" className="h-7 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/industries" className="text-sm font-medium text-navy hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
              Industries
            </Link>

            {/* Services mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-brand transition-colors cursor-pointer">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* MEGA MENU PANEL */}
              {servicesOpen && (
                <div className="absolute top-full -translate-x-[250px] pt-5 w-[760px]">
                  <div className="rounded-xl border border-border bg-white shadow-[0_20px_60px_-10px_rgba(46,48,80,0.18)] overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200">
                    <div className="">

                      {/* LEFT — service cards grid */}
                      <div className="p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4 px-1">
                          What We Build
                        </p>
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-muted/60 transition-colors"
                            >
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                                <s.icon className="h-4.5 w-4.5" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-navy group-hover:text-brand transition-colors leading-snug">
                                  {s.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                                  {s.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT sidebar */}
                      {/* <div className="border-l border-border bg-muted/40 flex flex-col">
                 
                        <div className="p-6 flex-1">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {techStack.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-navy"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                      
                        <div className="m-4 mt-0 rounded-lg bg-navy p-4 relative overflow-hidden">
                          <div className="absolute -top-8 -right-8 h-20 w-20 rounded-full bg-brand/30 blur-2xl" />
                          <p className="relative text-sm font-bold text-white leading-snug">
                            Not sure where to start?
                          </p>
                          <p className="relative mt-1 text-xs text-white/65">
                            Book a free 30-min discovery call.
                          </p>
                          <Link
                            to="/contact"
                            onClick={() => setServicesOpen(false)}
                            className="relative mt-3 inline-flex items-center gap-1.5 rounded-md bg-brand px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-brand/90"
                          >
                            Get a Free Quote <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-sm font-medium text-navy hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>Case Studies</Link>
            <Link to="/about" className="text-sm font-medium text-navy hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>About</Link>
            <Link to="/contact" className="text-sm font-medium text-navy hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-10">
            <a href="tel:+923141305785" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-brand transition-colors">
              <Phone className="h-4 w-4" />+92 314 1305785
            </a>
            {/* <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.03] hover:shadow-hover"
            >
              <a href="tel:+10000000000" className="flex items-center gap-2 text-sm font-medium text-white transition-colors">
              <Phone className="h-4 w-4" /> +1 (000) 000-0000
            </a>
            </Link> */}
          </div>

          <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <div className="px-4 py-4 space-y-1">
            <Link to="/industries" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-sm text-white/90 hover:bg-white/10">Industries</Link>
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">Services</div>
            {services.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-sm text-sm text-white/85 hover:bg-white/10">
                {s.name}
              </Link>
            ))}
            <Link to="/case-studies" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-sm text-white/90 hover:bg-white/10">Case Studies</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-sm text-white/90 hover:bg-white/10">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-sm text-white/90 hover:bg-white/10">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block mt-2 rounded-md bg-brand px-5 py-2.5 text-center text-sm font-semibold text-brand-foreground">Get a Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
