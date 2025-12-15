import { type NextRequest } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: https://propfirmfit.com/sitemap.xml`;
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
