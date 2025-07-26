import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Package,
  Phone,
  Headphones
} from 'lucide-react';

export default function Vendors() {
  const benefits = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Verified Suppliers',
      description: 'Access to pre-vetted, reliable suppliers with quality guarantees'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Pricing',
      description: 'Direct connections eliminate middlemen, reducing your costs by 15-30%'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Reliable Delivery',
      description: 'Predictable supply schedules to keep your business running smoothly'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Payment Protection',
      description: 'Secure transactions with built-in dispute resolution and insurance'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Business Growth',
      description: 'Analytics and insights to help optimize your inventory and profits'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Dedicated support team to help resolve any supply chain issues'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up with your business details and get verified within 24 hours'
    },
    {
      step: '02',
      title: 'Browse Suppliers',
      description: 'Explore our network of verified local suppliers and compare offers'
    },
    {
      step: '03',
      title: 'Place Orders',
      description: 'Order directly through our platform with secure payment processing'
    },
    {
      step: '04',
      title: 'Track & Receive',
      description: 'Monitor deliveries in real-time and build lasting supplier relationships'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Mumbai Street Food',
      rating: 5,
      comment: 'FreshLink saved my business! Now I get fresh vegetables 30% cheaper with guaranteed morning delivery.'
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Catering',
      rating: 5,
      comment: 'The reliability is amazing. No more last-minute supplier cancellations ruining my events.'
    },
    {
      name: 'Ahmed Ali',
      business: 'Delhi Food Truck',
      rating: 5,
      comment: 'Payment protection gives me peace of mind. I can focus on cooking while FreshLink handles my supply.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              For Food Vendors
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Reliable Supply Chain for 
              <span className="text-primary"> Your Food Business</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of food vendors who've eliminated supply chain headaches. 
              Get access to verified suppliers, competitive pricing, and guaranteed delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/vendors/dashboard">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Sales
                </Link>
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 5,000+ food vendors across India</p>
              <div className="flex justify-center items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-medium ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Food Vendors Choose FreshLink
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a more efficient and profitable food business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
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

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and transform your supply chain today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Vendors Say About Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from food vendors who've transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Food Business?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of successful food vendors who've already optimized their supply chain with FreshLink. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
