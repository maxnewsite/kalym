export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
  readingTime?: number;
}

export const defaultSEO: SEOData = {
  title: "Kalym - AI Orchestration Platform for the GCC Region",
  description: "Leading AI orchestration platform providing cutting-edge research, insights, and solutions for digital transformation in the GCC region.",
  keywords: "AI platform, GCC technology, digital transformation, artificial intelligence, Middle East AI, Kalym",
  canonicalUrl: "https://kalym.me",
  ogImage: "https://kalym.me/og-image.png",
  ogType: "website"
};

export const generatePageTitle = (title?: string): string => {
  if (!title) return defaultSEO.title;
  return `${title} | Kalym`;
};

export const generateMetaDescription = (description?: string): string => {
  return description || defaultSEO.description;
};

export const generateKeywords = (keywords?: string): string => {
  const baseKeywords = defaultSEO.keywords || "";
  return keywords ? `${keywords}, ${baseKeywords}` : baseKeywords;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = "https://kalym.me";
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const formatDateForSchema = (date: string): string => {
  return new Date(date).toISOString();
};