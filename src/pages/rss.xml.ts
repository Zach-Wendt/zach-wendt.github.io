import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { me } from '../data';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${me.short}: Writing`,
    description: 'Notes on multi-agent systems, game theory, and building things.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/writing/${p.id}/`,
    })),
  });
}
