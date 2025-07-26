import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, Users, Truck, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'For Vendors', href: '/vendors' },
    { name: 'For Suppliers', href: '/suppliers' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">FreshLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">FreshLink</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connecting street food vendors with local suppliers for a more efficient, 
                reliable, and cost-effective food supply chain.
              </p>
            </div>

            {/* For Vendors */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>For Vendors</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/vendors" className="text-muted-foreground hover:text-primary transition-colors">Join as Vendor</Link></li>
                <li><Link to="/vendors/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Vendor Dashboard</Link></li>
                <li><Link to="/vendors/support" className="text-muted-foreground hover:text-primary transition-colors">Vendor Support</Link></li>
              </ul>
            </div>

            {/* For Suppliers */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center space-x-2">
                <Truck className="w-4 h-4 text-primary" />
                <span>For Suppliers</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/suppliers" className="text-muted-foreground hover:text-primary transition-colors">Join as Supplier</Link></li>
                <li><Link to="/suppliers/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Supplier Dashboard</Link></li>
                <li><Link to="/suppliers/support" className="text-muted-foreground hover:text-primary transition-colors">Supplier Support</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@freshlink.in</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FreshLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
