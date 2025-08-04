import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Zap, Award, Target } from "lucide-react";
import GoogleAdsense from "./GoogleAdsense";

const MonetizationHub = () => {
  const monetizationStats = [
    {
      title: "Revenue This Month",
      value: "$12,847",
      change: "+23%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Premium Subscribers",
      value: "2,847",
      change: "+18%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Ad Revenue",
      value: "$3,249",
      change: "+31%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: "8.4%",
      change: "+5%",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const sponsorshipOpportunities = [
    {
      title: "Featured Tool Placement",
      description: "Showcase your AI tool on our homepage",
      price: "$299/month",
      reach: "25K+ monthly views",
      cta: "Sponsor Now"
    },
    {
      title: "Newsletter Sponsorship",
      description: "Exclusive mention in our weekly newsletter",
      price: "$199/week",
      reach: "15K+ subscribers",
      cta: "Book Slot"
    },
    {
      title: "Premium Content Partnership",
      description: "Co-create premium content with our team",
      price: "$499/month",
      reach: "Full platform exposure",
      cta: "Partner With Us"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Revenue Dashboard */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Monetization Dashboard</h2>
          <Badge variant="secondary">Live Data</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {monetizationStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className={`text-sm ${stat.color} font-medium`}>
                        {stat.change} vs last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-muted/50`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Google AdSense Integration */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Advertisement Spaces</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Banner Ad Space</CardTitle>
            </CardHeader>
            <CardContent>
              <GoogleAdsense 
                adSlot="1234567890"
                style={{ width: "100%", height: "250px" }}
                className="border border-dashed border-muted-foreground/30 rounded-lg"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sidebar Ad Space</CardTitle>
            </CardHeader>
            <CardContent>
              <GoogleAdsense 
                adSlot="0987654321"
                style={{ width: "100%", height: "250px" }}
                className="border border-dashed border-muted-foreground/30 rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Sponsorship Opportunities</h3>
          <Button variant="outline" size="sm">
            View All Packages
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsorshipOpportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Award className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">{opportunity.reach}</Badge>
                </div>
                <CardTitle className="text-lg">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {opportunity.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {opportunity.price}
                  </span>
                  <Button size="sm">
                    <Zap className="h-4 w-4 mr-2" />
                    {opportunity.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact for Custom Deals */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Custom Sponsorship Packages</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking for a custom advertising solution? We create tailored packages that align with your brand goals and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <DollarSign className="h-4 w-4 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales Team
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Email: tollywoodaics@gmail.com • Response within 24 hours
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonetizationHub;