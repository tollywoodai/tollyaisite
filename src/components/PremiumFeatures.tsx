import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const PremiumFeatures = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for beginners",
      features: [
        "Basic AI tools access",
        "3 projects per month",
        "Community support",
        "Standard templates"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      description: "For serious filmmakers",
      features: [
        "Unlimited AI tools access",
        "Unlimited projects",
        "Priority support",
        "Premium templates",
        "Advanced customization",
        "Export in 4K quality",
        "Collaboration tools"
      ],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Studio",
      price: "$99",
      period: "month",
      description: "For production houses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "White-label solutions",
        "API access",
        "Custom AI training",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Crown className="h-3 w-3 mr-1" />
            Premium Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Creative Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock advanced AI tools and features to take your filmmaking to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="h-4 w-4 mr-2" />}
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            All plans include 7-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;