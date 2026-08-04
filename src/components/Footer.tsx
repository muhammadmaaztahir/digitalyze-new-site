import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logoLight.png";

const services = [
  { name: "Custom Website Development", to: "/services/custom-website-development" },
  { name: "Mobile App Development", to: "/services/mobile-app-development" },
  { name: "Web App Development", to: "/services/web-app-development" },
  { name: "SaaS Development", to: "/services/saas-development" },
  { name: "Custom CRM Development", to: "/services/custom-crm-development" },
  { name: "MVP Development", to: "/services/mvp-development" },
  { name: "Custom Software Development", to: "/services/custom-software-development" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Digitalyze" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Helping Businesses Innovate, Scale & Stay Ahead with Intelligent Digital Solutions.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/digitalyzetech/" },
                { Icon: Facebook, href: "https://www.facebook.com/digitalyzetech/" },
                { Icon: Instagram, href: "https://www.instagram.com/digitalyzetech/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/80 hover:border-brand hover:text-brand transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-white/70 hover:text-brand transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-brand transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
                <a href="mailto:info@digitalyze.tech" className="hover:text-brand">info@digitalyze.tech</a>
              </li>
              {/* <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
                <a href="tel:+923141305785" className="hover:text-brand transition-colors">+92 314 1305785</a>
              </li> */}
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <svg viewBox="0 0 16 16" className="h-4 w-4 mt-0.5 shrink-0 fill-brand" aria-hidden>
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <a href="https://wa.me/923141305785" className="hover:text-brand transition-colors">+92 314 1305785</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70">© {new Date().getFullYear()} Digitalyze. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-white/70">
            <Link to="/privacy-policy" className="hover:text-brand">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
