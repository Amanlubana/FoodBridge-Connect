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
  Users,
  Truck,
  ArrowRight,
  CheckCircle,
  Search,
  ShoppingCart,
  Star,
  Shield,
  Clock,
  Package,
} from "lucide-react";

export default function HowItWorks() {
  const vendorSteps = [
    {
      step: 1,
      icon: <Users className="w-8 h-8" />,
      title: "Sign Up & Get Verified",
      description:
        "Create your vendor account with business details. Our team verifies your information within 24 hours.",
      details: [
        "Business registration details",
        "Identity verification",
        "Location confirmation",
      ],
    },
    {
      step: 2,
      icon: <Search className="w-8 h-8" />,
      title: "Browse Verified Suppliers",
      description:
        "Explore our network of pre-vetted suppliers. Filter by location, products, ratings, and pricing.",
      details: [
        "Product catalog browsing",
        "Supplier ratings & reviews",
        "Price comparison tools",
      ],
    },
    {
      step: 3,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Place Orders Securely",
      description:
        "Order directly through our platform with secure payment processing and delivery scheduling.",
      details: [
        "Secure payment gateway",
        "Delivery time selection",
        "Order tracking system",
      ],
    },
    {
      step: 4,
      icon: <Star className="w-8 h-8" />,
      title: "Track & Rate",
      description:
        "Monitor deliveries in real-time and rate your experience to help maintain quality standards.",
      details: [
        "Real-time tracking",
        "Quality feedback system",
        "Supplier relationship building",
      ],
    },
  ];

  const supplierSteps = [
    {
      step: 1,
      icon: <Package className="w-8 h-8" />,
      title: "Register Your Business",
      description:
        "Complete your supplier profile with product catalog, pricing, and service areas.",
      details: [
        "Business verification",
        "Product catalog setup",
        "Pricing & inventory management",
      ],
    },
    {
      step: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Vendors",
      description:
        "Get discovered by food vendors in your area. Receive order requests based on your offerings.",
      details: [
        "Vendor discovery system",
        "Order notifications",
        "Customer relationship tools",
      ],
    },
    {
      step: 3,
      icon: <Truck className="w-8 h-8" />,
      title: "Fulfill Orders",
      description:
        "Accept orders, manage inventory, and deliver products using our optimized routing system.",
      details: [
        "Order management dashboard",
        "Route optimization",
        "Delivery scheduling",
      ],
    },
    {
      step: 4,
      icon: <Clock className="w-8 h-8" />,
      title: "Get Paid Fast",
      description:
        "Receive payments within 24-48 hours of successful delivery with our secure payment system.",
      details: [
        "Fast payment processing",
        "Automated invoicing",
        "Transaction history",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description:
        "All payments are processed securely with built-in dispute resolution and fraud protection.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Tracking",
      description:
        "Track orders from placement to delivery with live updates and notifications.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Rating system ensures quality suppliers and reliable service for all users.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description:
        "Smart tools to help suppliers manage stock levels and predict demand patterns.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              How FreshLink Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A simple, secure platform connecting food vendors with suppliers.
              Get started in minutes and transform your food supply chain today.
            </p>
          </div>
        </div>
      </section>

      {/* For Vendors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              For Food Vendors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Sourcing Better Ingredients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to access reliable suppliers and optimize your
              food business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-sm font-bold mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/vendors">
                Start as Vendor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Suppliers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-accent/20 text-accent"
            >
              <Truck className="w-4 h-4 mr-2" />
              For Suppliers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Grow Your Supply Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of food vendors and increase your revenue
              streams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplierSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground text-sm font-bold mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/suppliers">
                Start as Supplier
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose FreshLink?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built-in features that ensure security, efficiency, and growth for
              your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How do I get started on FreshLink?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simply sign up for free, choose whether you're a vendor or
                    supplier, complete your profile, and get verified. You can
                    start browsing and placing orders immediately after
                    verification.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How does payment work?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vendors pay securely through our platform when placing
                    orders. Suppliers receive payments within 24-48 hours of
                    successful delivery. All transactions are protected with
                    dispute resolution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    What areas do you serve?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We currently serve major cities across India including
                    Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune.
                    We're rapidly expanding to cover more regions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How are suppliers verified?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All suppliers go through a rigorous verification process
                    including business registration checks, quality
                    certifications, and background verification to ensure
                    reliable service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of vendors and suppliers who are already
              transforming their food supply chain with FreshLink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/signup">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
