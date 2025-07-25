import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Trash2, Plus, Eye } from "lucide-react";
import { toast } from "sonner";

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
  author_bio?: string;
  category_id: string;
  published_at: string | null;
  reading_time: number;
  meta_title: string;
  meta_description: string;
  created_at: string;
  created_by?: string;
  featured_image_url?: string;
  view_count: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function AdminBlog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    status: "draft",
    featured: false,
    author_name: "",
    category_id: "",
    reading_time: 5,
    meta_title: "",
    meta_description: ""
  });

  useEffect(() => {
    checkAuth();
    fetchPosts();
    fetchCategories();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth');
      return;
    }
    
    // Check if user has admin role
    const { data: hasRole } = await supabase.rpc('has_role', {
      _user_id: session.user.id,
      _role: 'admin'
    });
    
    if (!hasRole) {
      toast.error('Access denied. Admin role required.');
      navigate('/');
      return;
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast.error('Failed to fetch posts');
      console.error(error);
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
      toast.error('Failed to fetch categories');
      console.error(error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    const slug = generateSlug(title);
    if (editingPost) {
      setEditingPost({ ...editingPost, title, slug });
    } else {
      setNewPost({ ...newPost, title, slug });
    }
  };

  const savePost = async () => {
    try {
      const postData = editingPost || newPost;
      
      if (!postData.title || !postData.content) {
        toast.error('Title and content are required');
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...postData,
            published_at: postData.status === 'published' ? new Date().toISOString() : null
          })
          .eq('id', editingPost.id);
        
        if (error) throw error;
        toast.success('Post updated successfully');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            ...postData,
            created_by: session.user.id,
            published_at: postData.status === 'published' ? new Date().toISOString() : null
          });
        
        if (error) throw error;
        toast.success('Post created successfully');
      }

      setEditingPost(null);
      setNewPost({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        status: "draft",
        featured: false,
        author_name: "",
        category_id: "",
        reading_time: 5,
        meta_title: "",
        meta_description: ""
      });
      fetchPosts();
    } catch (error) {
      toast.error('Failed to save post');
      console.error(error);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast.success('Post deleted successfully');
      fetchPosts();
    } catch (error) {
      toast.error('Failed to delete post');
      console.error(error);
    }
  };

  const currentPost = editingPost || newPost;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Blog Administration</h1>
          <Button onClick={() => navigate('/blog')} variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Blog
          </Button>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="editor">Editor</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">All Posts</h2>
              <Button onClick={() => setEditingPost(null)}>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                        {post.featured && <Badge variant="outline">Featured</Badge>}
                        <span className="text-sm text-muted-foreground">
                          {post.view_count} views
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPost(post)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Post title"
                      value={currentPost.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      placeholder="post-slug"
                      value={currentPost.slug}
                      onChange={(e) => editingPost 
                        ? setEditingPost({ ...editingPost, slug: e.target.value })
                        : setNewPost({ ...newPost, slug: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief description of the post"
                    value={currentPost.excerpt}
                    onChange={(e) => editingPost 
                      ? setEditingPost({ ...editingPost, excerpt: e.target.value })
                      : setNewPost({ ...newPost, excerpt: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Post content (supports HTML)"
                    rows={10}
                    value={currentPost.content}
                    onChange={(e) => editingPost 
                      ? setEditingPost({ ...editingPost, content: e.target.value })
                      : setNewPost({ ...newPost, content: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author Name</Label>
                    <Input
                      id="author"
                      placeholder="Author name"
                      value={currentPost.author_name}
                      onChange={(e) => editingPost 
                        ? setEditingPost({ ...editingPost, author_name: e.target.value })
                        : setNewPost({ ...newPost, author_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={currentPost.category_id}
                      onValueChange={(value) => editingPost 
                        ? setEditingPost({ ...editingPost, category_id: value })
                        : setNewPost({ ...newPost, category_id: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reading-time">Reading Time (mins)</Label>
                    <Input
                      id="reading-time"
                      type="number"
                      min="1"
                      value={currentPost.reading_time}
                      onChange={(e) => editingPost 
                        ? setEditingPost({ ...editingPost, reading_time: parseInt(e.target.value) || 5 })
                        : setNewPost({ ...newPost, reading_time: parseInt(e.target.value) || 5 })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                     <Select
                       value={currentPost.status}
                       onValueChange={(value: string) => editingPost 
                         ? setEditingPost({ ...editingPost, status: value })
                         : setNewPost({ ...newPost, status: value })
                       }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2 pt-8">
                    <Switch
                      id="featured"
                      checked={currentPost.featured}
                      onCheckedChange={(checked) => editingPost 
                        ? setEditingPost({ ...editingPost, featured: checked })
                        : setNewPost({ ...newPost, featured: checked })
                      }
                    />
                    <Label htmlFor="featured">Featured Post</Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input
                      id="meta-title"
                      placeholder="SEO title"
                      value={currentPost.meta_title}
                      onChange={(e) => editingPost 
                        ? setEditingPost({ ...editingPost, meta_title: e.target.value })
                        : setNewPost({ ...newPost, meta_title: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Input
                      id="meta-description"
                      placeholder="SEO description"
                      value={currentPost.meta_description}
                      onChange={(e) => editingPost 
                        ? setEditingPost({ ...editingPost, meta_description: e.target.value })
                        : setNewPost({ ...newPost, meta_description: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={savePost}>
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </Button>
                  {editingPost && (
                    <Button variant="outline" onClick={() => setEditingPost(null)}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}