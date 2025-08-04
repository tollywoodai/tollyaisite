import Navigation from "@/components/Navigation";
import AdSpace from "@/components/AdSpace";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Image, Music, Video, Wand2, Sparkles, Zap, Crown } from "lucide-react";
import toolsImage from "@/assets/ai-tools.jpg";

const Tools = () => {
  const tools = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Script Generator",
      description: "Generate compelling movie scripts with AI assistance",
      status: "Available",
      pricing: "Free",
      popular: true
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Character Generator",
      description: "Create unique characters with AI-powered design",
      status: "Available",
      pricing: "$3.59/month",
      popular: false
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Composer",
      description: "Generate background music and soundtracks",
      status: "Coming Soon",
      pricing: "$5.99/month",
      popular: false
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editor",
      description: "AI-powered video editing and enhancement",
      status: "Coming Soon",
      pricing: "$9.59/month",
      popular: false
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "Scene Builder",
      description: "Create detailed movie scenes with AI guidance",
      status: "Available",
      pricing: "$2.39/month",
      popular: false
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Effect Generator",
      description: "Generate special effects and CGI concepts",
      status: "Beta",
      pricing: "$4.79/month",
      popular: false
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Director's Suite",
      description: "Complete AI filmmaking toolkit for professionals",
      status: "Available",
      pricing: "$17.99/month",
      popular: true
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Render",
      description: "Fast AI-powered rendering and post-production",
      status: "Available",
      pricing: "$1.19/month",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with Image */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <img 
              src={toolsImage} 
              alt="AI Tools for Filmmakers"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-background/60 rounded-lg flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-foreground">AI Tools for Filmmakers</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Discover powerful AI tools designed specifically for the Tollywood film industry
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="banner" title="Featured Partner" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow relative">
              {tool.popular && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tool.status === 'Available' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : tool.status === 'Beta'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                        }`}>
                          {tool.status}
                        </span>
                        <span className="text-xs font-medium text-primary">
                          {tool.pricing}
                        </span>
                      </div>
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

        {/* Ad Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AdSpace size="medium" title="Tool Recommendations" />
          <AdSpace size="medium" title="Premium Features" />
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground mb-8">Start for free, upgrade as you grow</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">Free</div>
                <p className="text-muted-foreground">Perfect for beginners</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>✓ 5 AI script generations/month</div>
                <div>✓ Basic character design</div>
                <div>✓ Community support</div>
                <Button className="w-full mt-4">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">$11.99<span className="text-lg">/month</span></div>
                <p className="text-muted-foreground">For serious filmmakers</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>✓ Unlimited AI generations</div>
                <div>✓ Advanced tools access</div>
                <div>✓ Priority support</div>
                <div>✓ Commercial license</div>
                <Button className="w-full mt-4">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold">Custom</div>
                <p className="text-muted-foreground">For production houses</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>✓ Everything in Professional</div>
                <div>✓ Custom AI training</div>
                <div>✓ Dedicated support</div>
                <div>✓ API access</div>
                <Button variant="outline" className="w-full mt-4">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;