import { Helmet } from 'react-helmet-async';
import { SEOData, generatePageTitle, generateMetaDescription, generateKeywords } from '@/utils/seo';

interface SEOHeadProps {
  seo: Partial<SEOData>;
  structuredData?: any[];
}

export const SEOHead = ({ seo, structuredData = [] }: SEOHeadProps) => {
  const title = generatePageTitle(seo.title);
  const description = generateMetaDescription(seo.description);
  const keywords = generateKeywords(seo.keywords);
  const canonicalUrl = seo.canonicalUrl || "https://kalym.me";
  const ogImage = seo.ogImage || "https://kalym.me/og-image.png";
  const ogType = seo.ogType || "website";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kalym" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific tags */}
      {seo.author && <meta name="author" content={seo.author} />}
      {seo.publishedAt && <meta property="article:published_time" content={seo.publishedAt} />}
      {seo.readingTime && <meta name="reading-time" content={`${seo.readingTime} minutes`} />}
      
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};