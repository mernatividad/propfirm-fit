import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const baseUrl = 'https://propfirmfit.com';
  // Add more URLs as needed
  const urls = [
    '', // homepage
    // Add more static or dynamic routes here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (path) => `<url><loc>${baseUrl}${path ? `/${path}` : ''}</loc></url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
