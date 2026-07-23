import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://digitalyze.tech";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/case-studies", priority: "0.8", changefreq: "monthly" },
          { path: "/contact", priority: "0.8", changefreq: "monthly" },
          { path: "/industries", priority: "0.8", changefreq: "monthly" },
          { path: "/services/mobile-app-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/web-app-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/saas-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/custom-crm-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/mvp-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/custom-software-development", priority: "0.9", changefreq: "monthly" },
          { path: "/services/business-website-development", priority: "0.9", changefreq: "monthly" },
          { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
          { path: "/terms-of-service", priority: "0.5", changefreq: "yearly" },
        ];

        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
