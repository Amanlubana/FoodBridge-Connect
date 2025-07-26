import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Globe,
  DollarSign,
  Star,
  BarChart3,
  MapPin,
  Phone,
  Users,
  Calendar,
} from "lucide-react";

export default function Suppliers() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expand Customer Base",
      description:
        "Connect with thousands of food vendors across multiple cities",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Predictable Orders",
      description: "Build recurring relationships with reliable order volumes",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Faster Payments",
      description: "Get paid within 24-48 hours with our secure payment system",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Analytics",
      description:
        "Track performance, demand patterns, and growth opportunities",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Route Optimization",
      description:
        "AI-powered delivery routing to maximize efficiency and reduce costs",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Market Expansion",
      description:
        "Reach new markets and customer segments beyond your current network",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Register & Verify",
      description:
        "Create your supplier profile and complete our quick verification process",
    },
    {
      step: "02",
      title: "List Products",
      description:
        "Add your products with pricing, availability, and delivery areas",
    },
    {
      step: "03",
      title: "Receive Orders",
      description:
        "Get notified of new orders and manage them through our dashboard",
    },
    {
      step: "04",
      title: "Deliver & Grow",
      description:
        "Fulfill orders, collect payments, and build your vendor network",
    },
  ];

  const testimonials = [
    {
      name: "Suresh Patel",
      business: "Gujarat Fresh Farms",
      rating: 5,
      comment:
        "Increased my monthly revenue by 40% within 3 months. The platform makes it so easy to manage multiple vendors.",
    },
    {
      name: "Meera Singh",
      business: "Punjab Vegetables",
      rating: 5,
      comment:
        "No more chasing payments! FreshLink ensures I get paid on time, every time. Game changer for my business.",
    },
    {
      name: "Rahman Wholesale",
      business: "Chennai Mandi",
      rating: 5,
      comment:
        "The route optimization saved me 25% on delivery costs. Now I can serve vendors across the entire city efficiently.",
    },
  ];

  const stats = [
    { number: "15,000+", label: "Active Vendors" },
    { number: "₹50L+", label: "Monthly Volume" },
    { number: "95%", label: "Payment Success" },
    { number: "4.8/5", label: "Supplier Rating" },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-accent/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-accent/20 text-accent"
            >
              <Truck className="w-4 h-4 mr-2" />
              For Suppliers
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Grow Your Business with
              <span className="text-accent"> More Food Vendors</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect directly with food vendors, eliminate middlemen, and build
              predictable revenue streams. Whether you're a farmer, wholesaler,
              or mandi dealer - expand your reach with FreshLink.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/signup">
                  Join as Supplier
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link to="/suppliers/dashboard">
                  <Phone className="w-5 h-5 mr-2" />
                  Request Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Suppliers Partner with FreshLink
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale your supply business and increase
              profitability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto text-accent">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              How It Works for Suppliers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start selling to food vendors in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Opportunity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="text-sm bg-accent/20 text-accent"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Revenue Growth
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Increase Your Revenue by 40-60%
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our suppliers typically see significant revenue growth within
                  the first 3 months. Direct vendor relationships mean better
                  margins and more predictable income.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Access to 15,000+ verified food vendors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Average 25% increase in order frequency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Eliminate payment delays and defaults</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Reduce delivery costs with route optimization</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto text-accent">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">
                  Supplier Success Story
                </CardTitle>
                <CardDescription>
                  Real results from our supplier partners
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Monthly Revenue</span>
                    <Badge className="bg-success text-success-foreground">
                      +55%
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">₹8,75,000</div>
                  <div className="text-sm text-muted-foreground">
                    From ₹5,65,000 before FreshLink
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Active Vendors</span>
                    <div className="text-accent font-medium">127</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Up from 45 vendors previously
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Payment Timeline</span>
                    <div className="text-success font-medium">24-48 hrs</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Previously 15-30 days
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Suppliers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from suppliers who've transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Scale Your Supply Business?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join the largest network of food suppliers in India. Start
              connecting with thousands of food vendors and grow your revenue
              with predictable, reliable orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/signup">
                  Join as Supplier
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                asChild
              >
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
