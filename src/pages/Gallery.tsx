import Navigation from "@/components/Navigation";
import AdSpace from "@/components/AdSpace";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, Heart, Share2 } from "lucide-react";
import galleryImage from "@/assets/gallery-hero.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Epic Battle Scene",
      category: "Action",
      image: "/placeholder.svg",
      description: "AI-generated concept art for a massive battle sequence",
      views: "12.5K",
      likes: "2.1K",
      premium: false
    },
    {
      title: "Royal Palace Interior",
      category: "Architecture", 
      image: "/placeholder.svg",
      description: "Detailed palace interior design with traditional elements",
      views: "8.3K",
      likes: "1.8K",
      premium: true
    },
    {
      title: "Character Portraits",
      category: "Characters",
      image: "/placeholder.svg", 
      description: "AI-generated character designs for upcoming film",
      views: "15.2K",
      likes: "3.5K",
      premium: false
    },
    {
      title: "Fantasy Landscape",
      category: "Environment",
      image: "/placeholder.svg",
      description: "Mystical landscape for fantasy film sequence",
      views: "9.7K",
      likes: "2.3K",
      premium: false
    },
    {
      title: "Modern Cityscape",
      category: "Urban",
      image: "/placeholder.svg",
      description: "Futuristic city design for sci-fi thriller",
      views: "11.1K",
      likes: "2.7K",
      premium: true
    },
    {
      title: "Traditional Costumes",
      category: "Fashion",
      image: "/placeholder.svg",
      description: "Period-accurate costume designs with modern flair",
      views: "7.9K", 
      likes: "1.9K",
      premium: false
    }
  ];

  const categories = ["All", "Action", "Characters", "Environment", "Architecture", "Fashion", "Urban"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <img 
              src={galleryImage} 
              alt="AI Gallery"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-background/60 rounded-lg flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-foreground">AI Gallery</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Explore stunning AI-generated content created for Tollywood productions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="banner" title="Gallery Sponsor" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <Badge variant="secondary">
                    {project.category}
                  </Badge>
                  {project.premium && (
                    <Badge className="bg-yellow-500 text-white">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {project.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {project.likes}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AdSpace size="medium" title="Creative Tools" />
          <AdSpace size="medium" title="Download Premium Assets" />
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to see your project featured? <span className="text-primary cursor-pointer hover:underline">Submit your work</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;