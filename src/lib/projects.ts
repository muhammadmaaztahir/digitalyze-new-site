// Shared project data — single source of truth used by homepage, case-studies page, and individual case study pages.

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  tag: string;
  tagColor?: string;
  desc: string;
  website: string;
  image: string; // asset import path resolved at consumer
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  duration: string;
  team: string;
  industry: string;
  testimonial?: { quote: string; author: string; role: string };
  featured: boolean; // shown on homepage
  featuredOrder?: number; // order on homepage (lower = first)
}

// NOTE: image values are string keys — actual imports happen in the consuming files.
// We export a slug-based lookup so case study pages can find their data.

export const projects: Project[] = [
  {
    slug: "innovations-applied",
    name: "Innovations Applied",
    tagline: "Full-stack web platform for a US-based IT consulting firm.",
    tag: "Web App",
    desc: "Corporate web platform for a US-based IT consulting & staffing firm, showcasing services and enabling client engagement.",
    website: "https://innovationsapplied.com/",
    image: "project1",
    industry: "IT Consulting / Staffing",
    duration: "8 weeks",
    team: "3 people",
    challenge:
      "Innovations Applied LLC needed a modern, professional web presence that could clearly communicate their IT consulting and staffing services to enterprise clients across the US. Their old site was outdated and failed to convert visitors into inquiries.",
    solution:
      "We designed and built a clean, conversion-optimised corporate website with a services showcase, team section, client testimonials, and a structured inquiry flow. The site was built with React and Vite for fast page loads and SEO performance.",
    results: [
      "60% increase in qualified inbound leads within 3 months",
      "Page load time reduced from 5.2s to under 1s",
      "Top-3 Google ranking for key local IT staffing keywords",
      "Built and launched in 8 weeks",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel", "EmailJS"],

    featured: true,
    featuredOrder: 1,
  },
  {
    slug: "skill-space",
    name: "Skill Space",
    tagline: "A full-featured LMS built for modern online education.",
    tag: "SaaS",
    desc: "Multi-tenant learning management system with course creation, student enrollment, live sessions, and progress tracking.",
    website: "http://learning-hub-lms.vercel.app/",
    image: "project6",
    industry: "EdTech / E-Learning",
    duration: "12 weeks",
    team: "4 people",
    challenge:
      "The client needed a scalable LMS that could support multiple tutors and students simultaneously, with features for course creation, live sessions, progress tracking, and secure authentication — all without a bloated off-the-shelf solution.",
    solution:
      "We built Skill Space from scratch as a multi-tenant SaaS platform. Tutors can create and manage courses. Students can enrol, track progress, and join live sessions. The platform includes role-based auth, a rich text editor for course content, and a clean dashboard for both roles.",
    results: [
      "Launched on-time in 12 weeks with full feature set",
      "Supports 500+ concurrent users without performance degradation",
      "Student completion rates 35% higher vs competitor platforms",
      "Integrated Stripe for seamless subscription billing",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io", "Vercel"],

    featured: true,
    featuredOrder: 2,
  },
  {
    slug: "mobirays",
    name: "Mobirays",
    tagline: "E-commerce & brand platform for a mobile tech accessories brand.",
    tag: "E-Commerce",
    desc: "Custom e-commerce platform and brand identity for a mobile accessories company, with product browsing, cart, and checkout.",
    website: "https://mobirays.com/",
    image: "project5",
    industry: "Consumer Electronics / E-Commerce",
    duration: "6 weeks",
    team: "3 people",
    challenge:
      "Mobirays had a strong product line of mobile accessories but no online store — they were losing sales to competitors with better digital presence. They needed a fast, visually compelling e-commerce site to capture the mobile-savvy demographic.",
    solution:
      "We built a custom e-commerce platform with a modern product catalogue, category filtering, cart & wishlist, and a streamlined checkout. We also developed their brand identity — logo, colour palette and typography — to give them a premium feel.",
    results: [
      "Online store live in 6 weeks",
      "40% of sales shifted online within the first month",
      "Mobile conversion rate of 4.2% (industry avg: 1.8%)",
      "Bounce rate reduced by 31% vs old landing page",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],

    featured: true,
    featuredOrder: 3,
  },
  {
    slug: "tradeflow",
    name: "TradeFlow",
    tagline: "B2B marketplace MVP shipped in 8 weeks.",
    tag: "MVP",
    desc: "B2B marketplace platform connecting suppliers and buyers, built and launched as a validated MVP in under 8 weeks.",
    website: "https://tradeflow.digitalyze.tech/",
    image: "project7",
    industry: "B2B / Marketplace",
    duration: "8 weeks",
    team: "3 people",
    challenge:
      "The founder had a validated business idea for a B2B marketplace but needed to move fast to beat a better-funded competitor entering the space. They needed a fully functional MVP without compromising on core experience.",
    solution:
      "We delivered a focused MVP with core marketplace features: supplier listings, product catalogues, RFQ (request for quote) flow, buyer dashboards, and an admin panel. Scope was ruthlessly prioritised — every week we shipped and demoed working features.",
    results: [
      "Full MVP launched in 8 weeks",
      "15 suppliers onboarded in the first 2 weeks post-launch",
      "Secured seed funding round based on MVP traction",
      "Zero critical bugs at launch",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Docker"],

    featured: true,
    featuredOrder: 4,
  },
  {
    slug: "true-refined-solutions",
    name: "True Refined Solutions",
    tagline: "Enterprise IT consulting website with lead generation focus.",
    tag: "Website",
    desc: "Professional corporate website for a leading IT consulting firm, designed for enterprise client acquisition.",
    website: "https://truerefinedsolutions.com/",
    image: "project4",
    industry: "IT Consulting",
    duration: "5 weeks",
    team: "2 people",
    challenge:
      "TRS wanted to reposition themselves as a premium enterprise IT partner. Their old website failed to effectively communicate their capabilities and was generating low-quality leads. They needed a site that spoke directly to C-suite decision-makers.",
    solution:
      "We rebuilt their web presence with a focus on trust signals, service clarity, and conversion. The new site features structured service pages, detailed case study previews, an executive team section, and a multi-step contact form engineered to qualify leads.",
    results: [
      "Enterprise inquiry rate increased by 75%",
      "Average time-on-site increased from 45s to 3.2 minutes",
      "3 new enterprise contracts within 60 days of launch",
      "Site fully optimised for Core Web Vitals — green across all metrics",
    ],
    tech: ["WordPress", "Elementor", "Custom CSS", "SEO Optimization"],

    featured: false,
  },
  {
    slug: "scentyque",
    name: "Scentyque",
    tagline: "Premium fragrance e-commerce platform for the Pakistani market.",
    tag: "E-Commerce",
    desc: "Full-featured online perfume store with curated collections, wishlist, and nationwide delivery for the Pakistani market.",
    website: "https://scentyque.pk/",
    image: "project2",
    industry: "Retail / Fragrance",
    duration: "7 weeks",
    team: "3 people",
    challenge:
      "Scentyque wanted to build a premium online fragrance store in Pakistan's competitive perfume market. They needed an experience that replicated the luxury feel of an in-store visit — with high-quality visuals, product storytelling, and a smooth purchase flow.",
    solution:
      "We designed a visually rich e-commerce experience with a full product catalogue, scent-profile tags, bestseller collections, wishlist functionality, and a COD + online payment checkout. The brand design emphasises luxury through dark tones, serif typography, and editorial-style photography layouts.",
    results: [
      "Launched with 200+ SKUs on day one",
      "3,500+ orders in the first 3 months",
      "Average order value 40% higher than industry benchmark",
      "Repeat purchase rate of 28% within 90 days",
    ],
    tech: ["Shopify", "Liquid", "Custom Theme", "COD Integration"],

    featured: false,
  },
  {
    slug: "al-saudi-pak",
    name: "Al Saudi Pak",
    tagline: "Bilingual manpower recruitment platform for Saudi–Pakistan market.",
    tag: "Website",
    desc: "Professional bilingual (Arabic/Urdu) recruitment agency website connecting Pakistani skilled workers with Saudi employers.",
    website: "https://alsaudipak.com/",
    image: "project3",
    industry: "Recruitment / HR",
    duration: "4 weeks",
    team: "2 people",
    challenge:
      "Al Saudi Pak operates in a cross-cultural recruitment market, needing a professional website that served both Arabic-speaking Saudi clients and Urdu-speaking Pakistani candidates — each with different browsing habits, expectations, and information needs.",
    solution:
      "We built a bilingual website with full RTL (right-to-left) support for Arabic, a candidate enquiry portal, a services overview for Saudi employers, and a structured CV submission flow. Clear trust signals — government licenses, track record numbers, and partner logos — were prominently featured.",
    results: [
      "Bilingual site live with full RTL Arabic support in 4 weeks",
      "Candidate enquiry submissions up 3× vs phone-only method",
      "Employer enquiry conversion rate of 12%",
      "Top 5 Google ranking for key recruitment keywords in both markets",
    ],
    tech: ["WordPress", "WPML", "RTL Support", "Custom CSS", "SEO Optimization"],

    featured: false,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
