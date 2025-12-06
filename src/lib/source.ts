import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import Image from 'next/image';
import { readFileSync } from 'fs';
import { join } from 'path';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (!icon) return;

    if (icon.startsWith('/') || icon.startsWith('http://') || icon.startsWith('https://')) {
      return createElement(Image, {
        key: icon,
        src: icon,
        alt: '',
        width: 24,
        height: 24,
      });
    }

    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons], {
        key: icon,
      });
    }
  },
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}

export function getPageIcon(page: InferPageType<typeof source>): string {
  if (page.data.icon) {
    return page.data.icon;
  }

  const rootSlug = page.slugs[0];
  try {
    const metaPath = join(process.cwd(), 'content', 'docs', rootSlug, 'meta.json');
    const metaContent = readFileSync(metaPath, 'utf-8');
    const meta = JSON.parse(metaContent);
    if (meta.icon) {
      return meta.icon;
    }
  } catch {
    console.error(`Error reading meta.json for ${rootSlug}`);
  }

  return '/icons/sluj.png';
}