import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  slug: string;
  updated_at: string;
}

const Sitemap = () => {
  const [sitemapXML, setSitemapXML] = useState<string>('');

  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = async () => {
    try {
      // Fetch published blog posts
      const { data: posts } = await supabase
        .from('blog_posts')
        .select('slug, updated_at')
        .eq('status', 'published')
        .order('updated_at', { ascending: false });

      const staticPages = [
        { url: '', priority: '1.0', changefreq: 'daily', lastmod: undefined },
        { url: '/blog', priority: '0.9', changefreq: 'daily', lastmod: undefined },
      ];

      const blogPosts = (posts || []).map((post: BlogPost) => ({
        url: `/blog/${post.slug}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: new Date(post.updated_at).toISOString().split('T')[0]
      }));

      const allPages = [...staticPages, ...blogPosts];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>https://kalym.me${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      setSitemapXML(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
    }
  };

  useEffect(() => {
    if (sitemapXML) {
      // Set the correct content type for XML
      const response = new Response(sitemapXML, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      
      // Create a blob URL and trigger download
      const blob = new Blob([sitemapXML], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      // You might want to serve this directly instead of downloading
      console.log('Sitemap generated successfully');
    }
  }, [sitemapXML]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-muted-foreground mb-4">
        This page generates the sitemap.xml for the website.
      </p>
      {sitemapXML && (
        <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">
          {sitemapXML}
        </pre>
      )}
    </div>
  );
};

export default Sitemap;