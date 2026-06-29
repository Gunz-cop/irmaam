import { baseUrl, siteConfig } from "@/config/site";

export function GET() {
  const body = siteConfig.demoMode
    ? `User-agent: *
Disallow: /
Sitemap: ${baseUrl}/sitemap-index.xml
`
    : `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
