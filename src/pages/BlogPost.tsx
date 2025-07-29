import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import ShareButton from '@/components/ShareButton';
import { OptimizedImage } from '@/components/OptimizedImage';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  status: string;
  featured: boolean;
  author_name: string;
  author_avatar: string | null;
  author_bio: string | null;
  category_id: string | null;
  published_at: string | null;
  reading_time: number | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  view_count: number | null;
  blog_categories?: {
    name: string;
    slug: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            *,
            blog_categories(name, slug)
          `)
          .eq('slug', slug)
          .eq('status', 'published')
          .single();

        if (error) {
          console.error('Error fetching blog post:', error);
          return;
        }

        setPost(data);

        // Increment view count
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ view_count: (data.view_count || 0) + 1 })
          .eq('id', data.id);

        if (updateError) {
          console.error('Error updating view count:', updateError);
        }

        // Fetch related posts from the same category
        if (data.category_id) {
          const { data: related } = await supabase
            .from('blog_posts')
            .select(`
              *,
              blog_categories(name, slug)
            `)
            .eq('category_id', data.category_id)
            .eq('status', 'published')
            .neq('id', data.id)
            .limit(3);

          if (related) {
            setRelatedPosts(related);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-light text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <title>{post.meta_title || post.title} | Kalym.me Blog</title>
      <meta name="description" content={post.meta_description || post.excerpt || ''} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.meta_description || post.excerpt || ''} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://kalym.me/blog/${post.slug}`} />
      {post.featured_image_url && <meta property="og:image" content={post.featured_image_url} />}
      <meta property="article:author" content={post.author_name} />
      {post.published_at && <meta property="article:published_time" content={post.published_at} />}

      <Navigation />

      {/* Breadcrumb */}
      <nav className="py-4 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.title}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              {post.blog_categories && (
                <Badge variant="secondary" className="mb-4">
                  {post.blog_categories.name}
                </Badge>
              )}
              <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 leading-tight">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-3">
                  {post.author_avatar ? (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author_avatar} alt={post.author_name} />
                      <AvatarFallback>
                        {post.author_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{post.author_name}</span>
                </div>
                {post.published_at && (
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </div>
                )}
                {post.reading_time && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.reading_time} min read</span>
                  </div>
                )}
                <ShareButton 
                  url={`/blog/${post.slug}`}
                  title={post.title}
                  description={post.meta_description || post.excerpt || ''}
                  size="sm"
                />
              </div>

              {/* Featured Image */}
              {post.featured_image_url && (
                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <OptimizedImage 
                    src={post.featured_image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-light prose-p:text-foreground prose-li:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />


            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              <ShareButton 
                url={`/blog/${post.slug}`}
                title={post.title}
                description={post.meta_description || post.excerpt || ''}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-primary mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                   {relatedPost.featured_image_url && (
                     <div className="aspect-video overflow-hidden">
                       <OptimizedImage 
                         src={relatedPost.featured_image_url} 
                         alt={relatedPost.title}
                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                       />
                     </div>
                   )}
                  <CardHeader>
                    {relatedPost.blog_categories && (
                      <Badge variant="secondary" className="w-fit mb-2">
                        {relatedPost.blog_categories.name}
                      </Badge>
                    )}
                    <CardTitle className="text-lg font-light">
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {relatedPost.reading_time || 5} min read
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-background rounded-full"></div>
            </div>
            <div className="text-3xl font-light text-primary tracking-tight">
              KALYM.me
            </div>
          </div>
          <p className="text-muted-foreground font-light text-lg mb-2">AI Orchestration Platform for the GCC Region</p>
          <p className="text-muted-foreground text-sm font-light">Powered by elite data scientists and proven research</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;