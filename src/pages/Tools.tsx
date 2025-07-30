import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Image, Music, Video, Wand2, Sparkles } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Script Generator",
      description: "Generate compelling movie scripts with AI assistance",
      status: "Available"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Character Generator",
      description: "Create unique characters with AI-powered design",
      status: "Available"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Composer",
      description: "Generate background music and soundtracks",
      status: "Coming Soon"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editor",
      description: "AI-powered video editing and enhancement",
      status: "Coming Soon"
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "Scene Builder",
      description: "Create detailed movie scenes with AI guidance",
      status: "Available"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Effect Generator",
      description: "Generate special effects and CGI concepts",
      status: "Beta"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Tools for Filmmakers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful AI tools designed specifically for the Tollywood film industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tool.status === 'Available' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : tool.status === 'Beta'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  disabled={tool.status === 'Coming Soon'}
                  variant={tool.status === 'Available' ? 'default' : 'secondary'}
                >
                  {tool.status === 'Available' ? 'Try Now' : 
                   tool.status === 'Beta' ? 'Join Beta' : 'Notify Me'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;