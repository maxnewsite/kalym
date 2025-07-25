import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  featured: boolean;
  author_name: string;
  author_avatar?: string;
  category_id: string;
  published_at: string | null;
  reading_time: number;
  created_at: string;
  view_count: number;
  featured_image_url?: string;
  blog_categories?: {
    name: string;
    slug: string;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_categories (
            name,
            slug
          )
        `)
        .eq('status', 'published')
        .order('featured', { ascending: false })
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filteredPosts = posts.filter(post => 
    selectedCategory === "All" || 
    post.blog_categories?.name === selectedCategory
  );

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail("");
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Kalym Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, trends, and thought leadership on AI transformation in the GCC region
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="md:flex">
                <div className="md:w-1/2">
                  {featuredPost.featured_image_url && (
                    <OptimizedImage 
                      src={featuredPost.featured_image_url} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                      priority={true}
                    />
                  )}
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {featuredPost.blog_categories && (
                      <Badge variant="secondary">
                        {featuredPost.blog_categories.name}
                      </Badge>
                    )}
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author_name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.published_at)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.reading_time} min read
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button className="group">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="mb-2"
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {post.featured_image_url && (
                  <div className="aspect-video overflow-hidden">
                    <OptimizedImage 
                      src={post.featured_image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {post.blog_categories && (
                      <Badge variant="secondary" className="text-xs">
                        {post.blog_categories.name}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {post.view_count} views
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author_name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.reading_time} min
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.published_at)}
                    </span>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No posts found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI and digital transformation in the GCC region delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Kalym</h3>
          <p className="text-muted-foreground">
            Transforming the future of AI in the GCC region
          </p>
        </div>
      </footer>
    </div>
  );
}