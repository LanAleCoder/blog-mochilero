import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const publishedPosts = posts.filter(post => !post.data.draft);
  
  const staticPages = [
    '',
    '/blog',
    '/acerca',
    '/contacto',
    '/politica-privacidad',
    '/terminos'
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
    <url>
      <loc>${context.site}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>
  `).join('')}
  ${publishedPosts.map(post => `
    <url>
      <loc>${context.site}/blog/${post.slug}/</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
      <lastmod>${post.data.updatedDate ? post.data.updatedDate.toISOString().split('T')[0] : post.data.pubDate.toISOString().split('T')[0]}</lastmod>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemapXML, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}