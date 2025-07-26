import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Truck,
  ArrowRight,
  Check,
  Mail,
  Lock,
  User,
  Phone,
  Building,
} from "lucide-react";

type UserType = "vendor" | "supplier" | null;

export default function Signup() {
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    businessName: "",
    location: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    console.log("Signup data:", { userType, ...formData });

    // Redirect to appropriate dashboard
    if (userType === "vendor") {
      navigate("/vendors/dashboard");
    } else if (userType === "supplier") {
      navigate("/suppliers/dashboard");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!userType) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Join FreshLink Today
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose your account type to get started with our marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Vendor Card */}
              <Card
                className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-2 hover:border-primary"
                onClick={() => setUserType("vendor")}
              >
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">Food Vendor</CardTitle>
                  <CardDescription className="text-base">
                    Street food sellers, restaurants, food trucks, caterers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Access to verified suppliers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Competitive wholesale pricing
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Reliable delivery schedules
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Payment protection</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Sign Up as Vendor
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Supplier Card */}
              <Card
                className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-2 hover:border-accent"
                onClick={() => setUserType("supplier")}
              >
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                    <Truck className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">Supplier</CardTitle>
                  <CardDescription className="text-base">
                    Farmers, wholesalers, mandi dealers, producers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">Expand your customer base</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">Predictable order volumes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">Faster payment processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">Route optimization tools</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="lg"
                  >
                    Sign Up as Supplier
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-8">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setUserType(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ← Back
                </Button>
                <Badge
                  variant={userType === "vendor" ? "default" : "secondary"}
                >
                  {userType === "vendor" ? (
                    <>
                      <Users className="w-4 h-4 mr-1" />
                      Vendor
                    </>
                  ) : (
                    <>
                      <Truck className="w-4 h-4 mr-1" />
                      Supplier
                    </>
                  )}
                </Badge>
              </div>
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription>
                Join FreshLink as a {userType} and start growing your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder={
                        userType === "vendor"
                          ? "Your restaurant/stall name"
                          : "Your farm/business name"
                      }
                      className="pl-10"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  style={
                    userType === "supplier"
                      ? {
                          backgroundColor: "hsl(var(--accent))",
                          color: "hsl(var(--accent-foreground))",
                        }
                      : {}
                  }
                >
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
