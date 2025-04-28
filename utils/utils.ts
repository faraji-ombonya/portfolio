import { ARTICLES } from "./data/articles";

export const getArticle = (slug: { slug: string }) => {
  return ARTICLES.find((post) => post.slug === slug.slug);
};
