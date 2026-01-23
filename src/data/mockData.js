import fm from 'front-matter';
import generalData from '../content/general.json';
import testimonialsData from '../content/testimonials.json';

// Load all Gite markdown files
const giteFiles = import.meta.glob('../content/gites/*.md', { eager: true, query: '?raw' });

// Process Gite files: parse frontmatter and body
const gites = Object.values(giteFiles)
  .map((module) => {
    const { attributes, body } = fm(module.default);
    return {
      ...attributes,
      description: body
    };
  })
  .sort((a, b) => a.id - b.id);

export const siteData = {
  general: generalData,
  gites: gites,
  testimonials: testimonialsData.testimonials
};
