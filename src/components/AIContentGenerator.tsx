import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Calendar, TrendingUp, Film, Users } from "lucide-react";

const AIContentGenerator = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const aiGeneratedContent = [
    {
      type: "Industry Insight",
      title: "AI-Powered VFX Revolution in Telugu Cinema",
      content: "Recent advancements in AI technology are transforming visual effects in Tollywood films. Productions are now achieving Hollywood-level effects at 40% lower costs using machine learning algorithms for realistic CGI.",
      metrics: { views: "12.5K", engagement: "87%", trend: "+15%" },
      timestamp: new Date().toISOString(),
      icon: Film
    },
    {
      type: "Market Analysis",
      title: "Telugu Film Industry Growth Projections for 2025",
      content: "Industry analysts predict a 25% growth in Telugu film market cap, driven by AI adoption and international expansion. OTT platforms are investing $200M+ in regional content.",
      metrics: { views: "8.9K", engagement: "92%", trend: "+22%" },
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      icon: TrendingUp
    },
    {
      type: "Technology Update",
      title: "New AI Script Analysis Tool Launched",
      content: "TollywoodAI introduces advanced script analysis that predicts box office performance with 89% accuracy. The tool analyzes dialogue patterns, emotional arcs, and audience preferences.",
      metrics: { views: "15.2K", engagement: "94%", trend: "+31%" },
      timestamp: new Date(Date.now() - 172800000).toISOString(),
      icon: Sparkles
    },
    {
      type: "Community Spotlight",
      title: "Independent Filmmaker Success Stories",
      content: "Three independent Telugu filmmakers share how AI tools helped them create award-winning short films on budgets under $5,000, showcasing the democratization of filmmaking technology.",
      metrics: { views: "6.7K", engagement: "88%", trend: "+18%" },
      timestamp: new Date(Date.now() - 259200000).toISOString(),
      icon: Users
    }
  ];

  const generateNewContent = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentContent((prev) => (prev + 1) % aiGeneratedContent.length);
      setIsRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % aiGeneratedContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const content = aiGeneratedContent[currentContent];
  const Icon = content.icon;

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Daily Insights</CardTitle>
              <p className="text-sm text-muted-foreground">Auto-generated content • Updated hourly</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={generateNewContent}
            disabled={isRefreshing}
            className="shrink-0"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            <Icon className="h-3 w-3 mr-1" />
            {content.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(content.timestamp).toLocaleDateString()}
          </Badge>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-2 leading-tight">
            {content.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {content.content}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-muted/30">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{content.metrics.views} views</span>
            <span>{content.metrics.engagement} engagement</span>
            <span className="text-green-600 font-medium">{content.metrics.trend}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;