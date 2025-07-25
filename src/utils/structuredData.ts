export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kalym",
  "url": "https://kalym.me",
  "logo": "https://kalym.me/assets/logo.png",
  "description": "AI Orchestration Platform for the GCC Region providing cutting-edge research, insights, and solutions for digital transformation.",
  "sameAs": [
    "https://www.linkedin.com/company/kalym"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "GCC",
    "availableLanguage": "English"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://kalym.me",
  "name": "Kalym",
  "description": "AI Orchestration Platform for the GCC Region",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://kalym.me/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export interface BlogPostSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  excerpt?: string;
  url: string;
  readingTime?: number;
}

export const generateBlogPostSchema = (props: BlogPostSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": props.headline,
  "datePublished": props.datePublished,
  "dateModified": props.dateModified || props.datePublished,
  "author": {
    "@type": "Person",
    "name": props.author
  },
  "image": props.image || "https://kalym.me/assets/logo.png",
  "description": props.excerpt,
  "url": props.url,
  "publisher": {
    "@type": "Organization",
    "name": "Kalym",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kalym.me/assets/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": props.url
  },
  ...(props.readingTime && {
    "timeRequired": `PT${props.readingTime}M`
  })
});

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Kalym Blog",
  "description": "Insights and research on AI implementation, digital transformation, and technology trends in the GCC region",
  "url": "https://kalym.me/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Kalym",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kalym.me/assets/logo.png"
    }
  }
};