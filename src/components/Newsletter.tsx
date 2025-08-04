import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, TrendingUp, Star } from "lucide-react";
import newsletterBanner from "@/assets/newsletter-banner.jpg";

const Newsletter = () => {
  const latestNews = [
    {
      title: "AI-Powered Telugu Film 'Digital Dreams' Breaks International Records",
      excerpt: "The first fully AI-assisted Telugu film has garnered $2.5M in global box office, setting new benchmarks for indie productions...",
      date: "2025-01-15",
      category: "Breaking News",
      trending: true
    },
    {
      title: "Revolutionary AI Dubbing Technology Launches for Tollywood",
      excerpt: "New neural voice synthesis allows real-time dubbing in 15+ languages, expanding Telugu cinema's global reach...",
      date: "2025-01-14",
      category: "Technology",
      trending: false
    },
    {
      title: "Major Studios Invest $50M in AI-Enhanced Production Pipeline",
      excerpt: "Leading Tollywood production houses announce massive investment in AI infrastructure for next-gen filmmaking...",
      date: "2025-01-13",
      category: "Industry News",
      trending: true
    },
    {
      title: "Box Office: AI-Enhanced Films Generate $125M Revenue This Quarter",
      excerpt: "Films utilizing AI tools show 40% higher ROI compared to traditional productions, industry report reveals...",
      date: "2025-01-12",
      category: "Box Office",
      trending: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader className="text-center">
          <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src={newsletterBanner} 
              alt="Newsletter Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-2xl">Stay Updated with Tollywood News</CardTitle>
          <p className="text-muted-foreground">
            Get the latest Telugu movie updates, AI filmmaking insights, and exclusive content delivered to your inbox
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="flex-1" />
            <Button>
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Join 25,000+ subscribers • No spam • Unsubscribe anytime
          </p>
        </CardContent>
      </Card>

      {/* Latest News */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Latest Telugu Movie News
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {latestNews.map((news, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={news.trending ? "default" : "secondary"}>
                      {news.category}
                    </Badge>
                    {news.trending && (
                      <Badge variant="destructive" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{news.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Ad Space */}
      <Card className="bg-muted/30">
        <CardContent className="p-8 text-center">
          <div className="border-2 border-dashed border-muted-foreground/30 p-8 rounded-lg">
            <p className="text-muted-foreground text-sm mb-2">Advertisement</p>
            <p className="text-lg font-medium mb-4">Premium Ad Space Available</p>
            <Button variant="outline" size="sm">Contact for Advertising</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Newsletter;