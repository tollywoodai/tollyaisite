import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import AdSpace from "@/components/AdSpace";
import PremiumFeatures from "@/components/PremiumFeatures";
import AIContentGenerator from "@/components/AIContentGenerator";
import MonetizationHub from "@/components/MonetizationHub";
import GoogleAdsense from "@/components/GoogleAdsense";
import DailyUpdates from "@/components/DailyUpdates";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Film, Users, TrendingUp, Play, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tollywood.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              Powered by Advanced AI
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TollywoodAI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionizing Telugu cinema with cutting-edge AI tools for filmmakers, 
              creators, and storytellers across the Tollywood industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link to="/tools">
                  Explore AI Tools
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-sm opacity-90">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$62K+</div>
              <div className="text-sm opacity-90">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured AI Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular tools used by Tollywood filmmakers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Play className="h-8 w-8 text-primary" />
                  <Badge className="bg-green-100 text-green-800">Live</Badge>
                </div>
                <CardTitle>AI Script Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generate compelling Telugu movie scripts with AI assistance. Perfect for writers and directors.
                </p>
                <Button className="w-full">Try Free Demo</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Film className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Beta</Badge>
                </div>
                <CardTitle>Character Designer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create unique character designs with traditional Telugu elements and modern aesthetics.
                </p>
                <Button className="w-full" variant="outline">Join Beta</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Award className="h-8 w-8 text-primary" />
                  <Badge className="bg-blue-100 text-blue-800">Premium</Badge>
                </div>
                <CardTitle>Scene Builder Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced scene planning with AI-powered visualization and storyboard generation.
                </p>
                <Button className="w-full">Upgrade to Pro</Button>
              </CardContent>
            </Card>
          </div>

          {/* Google AdSense Banner */}
          <div className="my-8">
            <GoogleAdsense 
              adSlot="1234567890"
              style={{ width: "100%", height: "100px" }}
              format="horizontal"
            />
          </div>
        </div>
      </section>

      {/* AI Content & Newsletter Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Newsletter />
            </div>
            <div className="space-y-6">
              <AIContentGenerator />
              <DailyUpdates />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Global Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    TollywoodAI powers productions in 25+ countries, generating $50M+ in value for the global film industry.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Success Stories
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <PremiumFeatures />

      {/* Monetization Hub */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <MonetizationHub />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TollywoodAI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering filmmakers with AI-driven solutions for every stage of production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Film className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Creative Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate stunning visuals, compelling scripts, and immersive scenes 
                  that capture the essence of Telugu storytelling.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce production costs by up to 60% with AI-powered pre-visualization 
                  and planning tools designed for independent filmmakers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built specifically for Tollywood, understanding the unique cultural 
                  nuances and storytelling traditions of Telugu cinema.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Filmmaking?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of filmmakers already using TollywoodAI to bring their 
              creative visions to life with the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/tools">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
