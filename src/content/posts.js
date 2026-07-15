import { marked } from 'marked';

// Raw markdown for every post, keyed by slug (the filename without extension).
const rawBySlug = {};
for (const [path, md] of Object.entries(
  import.meta.glob('./blog/*.md', { query: '?raw', import: 'default', eager: true })
)) {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  rawBySlug[slug] = md;
}

// Posts in display order. `slug` matches src/content/blog/<slug>.md; `title` is
// the label shown in the blog list. To add a post, drop its markdown in
// src/content/blog/ and add a line here in the position you want it to appear.
export const posts = [
  { slug: 'next_generation_sequencing_analysis_in_python', title: 'Next Generation Sequencing Analysis in Python' },
  { slug: 'histopathologic_cancer_detection', title: 'Histopathologic Cancer Detection' },
  { slug: 'cell_segmentation', title: 'Cell Image Segmentation' },
  { slug: 'chest_xray_gan', title: 'Chest X-Ray Generative Adversarial Network' },
  { slug: 'lymphoma_microarray_clustering', title: 'Lymphoma Cancer Microarray Clustering Analysis' },
  { slug: 'wikipedia_question_answer', title: 'Wikipedia Question & Answer Model' },
  { slug: 'airbnb_time_series', title: 'Airbnb Time Series Forecasting' },
];

// Rewrite relative image paths (../../img/... or ../img/...) to the absolute
// /img/... served from public/. Absolute and external URLs are left untouched.
function normalizeImagePaths(md) {
  return md.replace(/\]\((?:\.\.\/)+img\//g, '](/img/');
}

// Returns rendered HTML for a slug, or null if there's no such post.
export function getPostHtml(slug) {
  const md = rawBySlug[slug];
  if (md === undefined) return null;
  return marked.parse(normalizeImagePaths(md));
}
