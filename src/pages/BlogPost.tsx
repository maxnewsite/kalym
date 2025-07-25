import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock blog data - will be replaced with Supabase
const blogPosts = [
  {
    id: 'ai-transformation-gcc-2024',
    title: 'AI Transformation in the GCC: A 2024 Perspective',
    description: 'Exploring the rapid adoption of AI technologies across the Gulf Cooperation Council region and their impact on business transformation.',
    content: `
      <h2>The Current State of AI in the GCC</h2>
      <p>The Gulf Cooperation Council region is experiencing unprecedented growth in AI adoption. From Saudi Arabia's Vision 2030 to the UAE's AI Strategy 2031, governments are leading the charge in creating AI-driven economies.</p>
      
      <h2>Key Drivers of AI Adoption</h2>
      <p>Several factors are accelerating AI transformation across the GCC:</p>
      <ul>
        <li>Government initiatives and substantial investments in AI infrastructure</li>
        <li>Growing digital literacy and tech-savvy populations</li>
        <li>Strategic positioning as global technology hubs</li>
        <li>Diversification away from oil-dependent economies</li>
      </ul>
      
      <h2>Industry Applications</h2>
      <p>AI is being implemented across various sectors:</p>
      <h3>Financial Services</h3>
      <p>Banks and financial institutions are leveraging AI for fraud detection, customer service automation, and personalized financial products.</p>
      
      <h3>Healthcare</h3>
      <p>AI-powered diagnostic tools and telemedicine platforms are revolutionizing healthcare delivery across the region.</p>
      
      <h3>Smart Cities</h3>
      <p>Cities like Dubai and Riyadh are implementing AI-driven urban planning and management systems.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While the potential is enormous, organizations face challenges in data governance, talent acquisition, and cultural adaptation. However, these challenges present opportunities for innovative solutions and partnerships.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI in the GCC looks promising, with continued investment in education, infrastructure, and international collaboration driving further innovation.</p>
    `,
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
    content: `
      <h2>Understanding the Regional Context</h2>
      <p>For CEOs in the Middle East, implementing AI requires a nuanced understanding of regional business culture, regulatory environments, and market dynamics.</p>
      
      <h2>Strategic Planning Framework</h2>
      <p>Successful AI implementation follows a structured approach:</p>
      <ol>
        <li>Assessment of current digital maturity</li>
        <li>Identification of high-impact use cases</li>
        <li>Development of governance frameworks</li>
        <li>Investment in talent and infrastructure</li>
        <li>Phased implementation with measurable outcomes</li>
      </ol>
      
      <h2>Cultural Considerations</h2>
      <p>Respecting local business customs and values is crucial for successful AI adoption. This includes ensuring AI solutions align with Islamic principles and regional business practices.</p>
      
      <h2>Building AI-Ready Organizations</h2>
      <p>Creating an AI-ready culture requires:</p>
      <ul>
        <li>Leadership commitment and vision</li>
        <li>Employee education and reskilling programs</li>
        <li>Cross-functional collaboration</li>
        <li>Continuous learning and adaptation</li>
      </ul>
    `,
    category: 'Leadership',
    tags: ['CEO', 'Implementation', 'Middle East', 'Leadership'],
    author: 'Ahmed Hassan',
    publishedAt: '2024-01-10',
    readTime: 12,
    featured: false,
    image: '/lovable-uploads/f025e4d9-5cc0-4cca-a4c5-bb651f8ff98e.png'
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

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
      <title>{post.title} | Kalym.me Blog</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.tags.join(', ')} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://kalym.me/blog/${post.id}`} />
      <meta property="og:image" content={post.image} />
      <meta property="article:author" content={post.author} />
      <meta property="article:published_time" content={post.publishedAt} />
      <meta property="article:tag" content={post.tags.join(', ')} />

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
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.description}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-light prose-p:text-foreground prose-li:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
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
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-lg font-light">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {relatedPost.readTime} min read
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