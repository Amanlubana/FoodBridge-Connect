import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Truck, 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Star
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Transparency',
      description: 'Building reliable relationships between vendors and suppliers through verified profiles and transparent pricing.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mutual Growth',
      description: 'Creating opportunities for both vendors and suppliers to grow their businesses and increase profitability.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community First',
      description: 'Supporting local food ecosystems and strengthening community bonds through direct connections.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'Reducing food waste and promoting sustainable supply chain practices for a better future.'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Users' },
    { number: '500+', label: 'Cities Covered' },
    { number: '₹50 Cr+', label: 'Transaction Volume' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'CEO & Co-Founder',
      background: 'Former VP at BigBasket, 15+ years in supply chain',
      image: '/placeholder.svg'
    },
    {
      name: 'Priya Patel',
      role: 'CTO & Co-Founder',
      background: 'Ex-Senior Engineer at Swiggy, Tech innovation expert',
      image: '/placeholder.svg'
    },
    {
      name: 'Amit Kumar',
      role: 'Head of Operations',
      background: 'Former Director at Zomato, Logistics specialist',
      image: '/placeholder.svg'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'FreshLink Founded',
      description: 'Started with a vision to connect food vendors with reliable suppliers'
    },
    {
      year: '2023',
      title: 'First 100 Vendors',
      description: 'Reached our first milestone of 100 active food vendors in Mumbai'
    },
    {
      year: '2024',
      title: 'Multi-City Expansion',
      description: 'Expanded operations to Delhi, Bangalore, and Chennai'
    },
    {
      year: '2024',
      title: '10,000+ Users',
      description: 'Crossed 10,000 active users across vendors and suppliers'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transforming India's 
              <span className="text-primary"> Food Supply Chain</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              FreshLink is on a mission to create the most reliable, efficient, and transparent 
              marketplace connecting food vendors with local suppliers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To eliminate inefficiencies in the food supply chain by directly connecting vendors 
                  with suppliers, reducing costs, improving quality, and ensuring reliable delivery 
                  for India's vibrant food ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto text-accent">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To become India's largest and most trusted food supply marketplace, empowering 
                  millions of food vendors and suppliers to build sustainable, profitable businesses 
                  through technology and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90">
              Real results from our growing community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at FreshLink
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders from top food-tech and supply chain companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Journey So Far
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in building India's food supply marketplace
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Recognition & Awards
            </h2>
            <p className="text-xl text-muted-foreground">
              Acknowledged for innovation in food-tech and supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Award className="w-12 h-12 text-yellow-500 mx-auto" />
                <CardTitle className="text-lg">Best Food-Tech Startup 2024</CardTitle>
                <CardDescription>India Food Awards</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Star className="w-12 h-12 text-blue-500 mx-auto" />
                <CardTitle className="text-lg">Innovation in Supply Chain</CardTitle>
                <CardDescription>TechCircle Awards</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto" />
                <CardTitle className="text-lg">Top 50 Startups to Watch</CardTitle>
                <CardDescription>Economic Times</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Growing Community
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Be part of the revolution transforming India's food supply chain. 
              Whether you're a vendor or supplier, FreshLink is here to help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
