import Navigation from "@/components/Navigation";
import AdSpace from "@/components/AdSpace";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-hero.jpg";

const Blog = () => {
  const posts = [
    {
      title: "2025 AI Revolution: Telugu Cinema's $100M Transformation",
      excerpt: "How AI technology is projected to generate over $100 million in cost savings for Tollywood productions this year.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-20",
      category: "Technology",
      readTime: "6 min read",
      views: "28.5K",
      comments: 247,
      featured: true
    },
    {
      title: "Neural Network Casting: AI Finds Perfect Actors for Roles",
      excerpt: "Revolutionary AI casting system analyzes facial features, voice patterns, and emotional range to match actors with characters.",
      author: "Priya Sharma",
      date: "2025-01-18",
      category: "Innovation",
      readTime: "7 min read",
      views: "19.2K",
      comments: 183,
      featured: false
    },
    {
      title: "Real-Time VFX: On-Set AI Visual Effects Change Everything",
      excerpt: "New AI technology allows directors to see final VFX during filming, reducing post-production time by 60%.",
      author: "Vikram Singh",
      date: "2025-01-16",
      category: "Case Study",
      readTime: "5 min read",
      views: "15.7K",
      comments: 124,
      featured: false
    },
    {
      title: "AI Scriptwriting Collaborations Win International Awards",
      excerpt: "Three AI-assisted Telugu films receive recognition at Cannes, marking a new era in global cinema.",
      author: "Anita Reddy",
      date: "2025-01-14",
      category: "Awards",
      readTime: "4 min read",
      views: "22.1K",
      comments: 156,
      featured: false
    },
    {
      title: "Budget Breakdown: $50K Films That Look Like $5M Productions",
      excerpt: "Independent filmmakers share how AI tools helped them create blockbuster-quality content on micro-budgets.",
      author: "Suresh Babu",
      date: "2025-01-12",
      category: "Business",
      readTime: "8 min read",
      views: "31.4K",
      comments: 298,
      featured: false
    }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <img 
              src={blogImage} 
              alt="TollywoodAI Blog"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-background/60 rounded-lg flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-foreground">TollywoodAI Blog</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Insights, tutorials, and stories from the intersection of AI and filmmaking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="banner" title="Blog Sponsor" />
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/20">FEATURED</div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default">Featured</Badge>
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                </div>
                <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <span>{featuredPost.readTime}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {featuredPost.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {featuredPost.comments}
                  </div>
                </div>
                <Button className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="medium" title="Related Articles" />
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {regularPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.comments}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
        {/* Ad Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AdSpace size="medium" title="Tech Resources" />
          <AdSpace size="medium" title="Industry Events" />
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;