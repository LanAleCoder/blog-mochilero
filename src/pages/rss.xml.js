import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: 'Guatemala Mochilero',
    description: 'Guías auténticas de viaje económico por Guatemala desde la perspectiva de un local',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      customData: `
        <author>guatemala.mochilero@email.com (Tu Nombre)</author>
        ${post.data.heroImage ? `<enclosure url="${context.site}${post.data.heroImage}" type="image/jpeg"/>` : ''}
      `,
    })),
    customData: `
      <language>es-gt</language>
      <managingEditor>guatemala.mochilero@email.com (Tu Nombre)</managingEditor>
      <webMaster>guatemala.mochilero@email.com (Tu Nombre)</webMaster>
      <copyright>Copyright 2025 Guatemala Mochilero</copyright>
      <category>Viajes</category>
      <ttl>60</ttl>
      <image>
        <url>${context.site}/favicon.svg</url>
        <title>Guatemala Mochilero</title>
        <link>${context.site}</link>
      </image>
    `,
  });
}
