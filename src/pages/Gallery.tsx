import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const projects = [
    {
      title: "Epic Battle Scene",
      category: "Action",
      image: "/placeholder.svg",
      description: "AI-generated concept art for a massive battle sequence"
    },
    {
      title: "Royal Palace Interior",
      category: "Architecture",
      image: "/placeholder.svg",
      description: "Detailed palace interior design with traditional elements"
    },
    {
      title: "Character Portraits",
      category: "Characters",
      image: "/placeholder.svg",
      description: "AI-generated character designs for upcoming film"
    },
    {
      title: "Fantasy Landscape",
      category: "Environment",
      image: "/placeholder.svg",
      description: "Mystical landscape for fantasy film sequence"
    },
    {
      title: "Modern Cityscape",
      category: "Urban",
      image: "/placeholder.svg",
      description: "Futuristic city design for sci-fi thriller"
    },
    {
      title: "Traditional Costumes",
      category: "Fashion",
      image: "/placeholder.svg",
      description: "Period-accurate costume designs with modern flair"
    }
  ];

  const categories = ["All", "Action", "Characters", "Environment", "Architecture", "Fashion", "Urban"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore stunning AI-generated content created for Tollywood productions
          </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
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