import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User } from 'lucide-react';

// Mock blog data - will be replaced with Supabase
const blogPosts = [
  {
    id: 'ai-transformation-gcc-2024',
    title: 'AI Transformation in the GCC: A 2024 Perspective',
    description: 'Exploring the rapid adoption of AI technologies across the Gulf Cooperation Council region and their impact on business transformation.',
    content: 'The Gulf Cooperation Council region is experiencing unprecedented growth in AI adoption...',
    category: 'AI Strategy',
    tags: ['AI', 'GCC', 'Digital Transformation', 'Strategy'],
    author: 'Dr. Sarah Al-Rashid',
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
    image: '/lovable-uploads/f9b61447-3ca0-48fa-a5c3-79b63e039560.png'
  },
  {
    id: 'ceo-guide-ai-implementation',
    title: 'CEO Guide to AI Implementation in Middle Eastern Markets',
    description: 'A comprehensive guide for C-level executives on successfully implementing AI initiatives while respecting regional business culture.',
    content: 'For CEOs in the Middle East, implementing AI requires a nuanced understanding...',
    category: 'Leadership',
    tags: ['CEO', 'Implementation', 'Middle East', 'Leadership'],
    author: 'Ahmed Hassan',
    publishedAt: '2024-01-10',
    readTime: 12,
    featured: false,
    image: '/lovable-uploads/f025e4d9-5cc0-4cca-a4c5-bb651f8ff98e.png'
  },
  {
    id: 'data-governance-gcc-regulations',
    title: 'Data Governance and AI Compliance in GCC Markets',
    description: 'Understanding regulatory frameworks and best practices for AI data governance across Gulf states.',
    content: 'Navigating the complex landscape of data governance in the GCC requires...',
    category: 'Compliance',
    tags: ['Data Governance', 'Compliance', 'Regulations', 'GCC'],
    author: 'Fatima Al-Zahra',
    publishedAt: '2024-01-05',
    readTime: 6,
    featured: false,
    image: '/lovable-uploads/massimiliano-masi.png'
  }
];

const categories = ['All', 'AI Strategy', 'Leadership', 'Compliance', 'Technology', 'Research'];

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <title>AI Insights & Research Blog | Kalym.me</title>
      <meta name="description" content="Expert insights on AI transformation, digital strategy, and technology leadership in the GCC region. Read the latest research and trends from Kalym.me." />
      <meta name="keywords" content="AI blog, GCC technology, digital transformation, AI strategy, Middle East AI, Kalym.me insights" />
      <meta property="og:title" content="AI Insights & Research Blog | Kalym.me" />
      <meta property="og:description" content="Expert insights on AI transformation and digital strategy in the GCC region" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kalym.me/blog" />

      <Navigation />
      
      {/* Blog Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light text-primary mb-6">
              AI Insights & Research
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Expert perspectives on AI transformation, digital strategy, and technology leadership 
              in the GCC region and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-light text-primary mb-8">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-4">
                      {featuredPost.category}
                    </Badge>
                    <CardTitle className="text-2xl font-light mb-4 text-primary">
                      <Link to={`/blog/${featuredPost.id}`} className="hover:text-primary/80 transition-colors">
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base mb-6">
                      {featuredPost.description}
                    </CardDescription>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Article
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-light">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        By {post.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-primary mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest research, trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground"
              />
              <Button className="px-8">
                Subscribe
              </Button>
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

export default BlogIndex;