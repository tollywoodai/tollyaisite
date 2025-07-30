import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Tollywood Cinema",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we create films in the Telugu film industry.",
      author: "Raj Kumar",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Creating Realistic Characters with AI",
      excerpt: "A deep dive into the process of generating believable characters using our AI tools.",
      author: "Priya Sharma",
      date: "2024-01-10",
      category: "Tutorial",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Behind the Scenes: AI-Generated Action Sequences",
      excerpt: "How we're using AI to conceptualize and plan complex action scenes before filming.",
      author: "Vikram Singh",
      date: "2024-01-08",
      category: "Case Study",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The Art of AI-Powered Storytelling",
      excerpt: "Balancing creativity and technology to tell compelling stories in the digital age.",
      author: "Anita Reddy",
      date: "2024-01-05",
      category: "Creative",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Cost-Effective Film Production with AI",
      excerpt: "How independent filmmakers can leverage AI tools to reduce production costs.",
      author: "Suresh Babu",
      date: "2024-01-03",
      category: "Business",
      readTime: "4 min read",
      featured: false
    }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">TollywoodAI Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and stories from the intersection of AI and filmmaking
          </p>
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
                </div>
                <Button className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        )}

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