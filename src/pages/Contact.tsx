import Navigation from "@/components/Navigation";
import AdSpace from "@/components/AdSpace";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Star, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss your AI filmmaking projects
          </p>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="banner" title="Contact Partner" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company/Production House</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@tollywoodai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Film City, Hyderabad<br />
                      Telangana, India 500084
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're always looking to partner with innovative filmmakers, production houses, 
                  and technology enthusiasts. Whether you're a director, producer, or tech startup, 
                  let's explore how AI can enhance your creative vision.
                </p>
                <Button variant="outline" className="w-full">
                  Partnership Inquiry
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Need help with our tools or have technical questions? 
                  Our support team is here to assist you.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
            
            {/* Customer Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Customer Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="text-sm font-medium">Ravi Kumar</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "TollywoodAI transformed our film production process. Incredible results!"
                    </p>
                  </div>
                  <div className="border-b pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="text-sm font-medium">Meera Productions</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Saved us ₹10 lakhs in pre-production costs. Highly recommended!"
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">★★★★☆</div>
                      <span className="text-sm font-medium">Director Sunil</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Great tools for indie filmmakers. User-friendly and powerful."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ad Space */}
            <AdSpace size="medium" title="Contact Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;