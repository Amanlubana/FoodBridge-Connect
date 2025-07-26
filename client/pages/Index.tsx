import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Users, 
  Truck, 
  Clock, 
  Shield, 
  TrendingDown, 
  CheckCircle, 
  Star,
  ArrowRight,
  Leaf,
  DollarSign,
  Globe
} from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Faster Delivery',
      description: 'Optimized logistics for quicker supply chain delivery'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trusted Network',
      description: 'Verified suppliers and secure transaction system'
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Better Prices',
      description: 'Direct connections reduce middleman costs'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Wide Network',
      description: 'Access to suppliers across different regions'
    }
  ];

  const vendorBenefits = [
    'Direct access to verified suppliers',
    'Competitive wholesale pricing',
    'Reliable delivery schedules',
    'Quality guarantee on products',
    'Payment protection & insurance',
    '24/7 customer support'
  ];

  const supplierBenefits = [
    'Expand your customer base',
    'Predictable order volumes',
    'Faster payment processing',
    'Digital inventory management',
    'Route optimization tools',
    'Market insights & analytics'
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Fresh • Local • Reliable
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connect Street Food Vendors with 
              <span className="text-primary"> Local Suppliers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              FreshLink is the digital marketplace that reduces vendor dependency on unreliable supply chains while helping suppliers expand their reach. Optimize costs, build trust, and improve delivery times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/vendors">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Vendor
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/suppliers">
                  <Truck className="w-5 h-5 mr-2" />
                  Join as Supplier
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose FreshLink?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform addresses the core challenges in the street food supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  For Food Vendors
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Reliable Supply Chain for Your Food Business
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you're running a street food stall, restaurant, food truck, or catering service, 
                  get access to verified suppliers with guaranteed quality and delivery.
                </p>
              </div>

              <div className="space-y-3">
                {vendorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/vendors">
                  Start as Vendor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Vendor Dashboard</CardTitle>
                <CardDescription>
                  Manage orders, track deliveries, and communicate with suppliers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Today's Orders</span>
                    <Badge variant="secondary">12 Active</Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>₹25,400 in orders</span>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Supplier Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">4.8</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average rating from 50+ suppliers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supplier Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="border-0 shadow-2xl order-2 lg:order-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto text-accent">
                  <Truck className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Supplier Portal</CardTitle>
                <CardDescription>
                  Manage inventory, process orders, and grow your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Monthly Revenue</span>
                    <Badge className="bg-success text-success-foreground">+23%</Badge>
                  </div>
                  <div className="text-2xl font-bold">₹1,25,000</div>
                  <div className="text-sm text-muted-foreground">
                    Connected to 45 vendors
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Delivery Efficiency</span>
                    <div className="text-success font-medium">98.5%</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    On-time delivery rate
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  <Truck className="w-4 h-4 mr-2" />
                  For Suppliers
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Expand Your Reach to More Food Vendors
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you're a farmer, wholesaler, or mandi dealer, connect directly with 
                  food vendors and grow your business with our digital platform.
                </p>
              </div>

              <div className="space-y-3">
                {supplierBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <Link to="/suppliers">
                  Start as Supplier
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Food Supply Chain?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of vendors and suppliers who are already building a more 
              efficient, reliable, and profitable food ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/vendors">Join as Vendor</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/suppliers">Join as Supplier</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
