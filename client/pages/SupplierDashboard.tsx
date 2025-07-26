import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  DollarSign,
  Users,
  Package,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  MapPin,
  Truck,
} from "lucide-react";

export default function SupplierDashboard() {
  const stats = [
    {
      title: "Monthly Revenue",
      value: "₹1,25,000",
      change: "+23%",
      changeType: "positive",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      title: "Active Vendors",
      value: "45",
      change: "+8",
      changeType: "positive",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Orders This Month",
      value: "234",
      change: "+15%",
      changeType: "positive",
      icon: <Package className="w-4 h-4" />,
    },
    {
      title: "Avg Rating",
      value: "4.8",
      change: "+0.2",
      changeType: "positive",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const recentOrders = [
    {
      id: "ORD-501",
      vendor: "Mumbai Street Food",
      items: "Tomatoes (10kg), Onions (5kg)",
      amount: "₹890",
      status: "pending",
      date: "2024-01-15",
      location: "Bandra, Mumbai",
    },
    {
      id: "ORD-502",
      vendor: "Sharma Catering",
      items: "Mixed Vegetables (25kg)",
      amount: "₹2,450",
      status: "in-transit",
      date: "2024-01-15",
      location: "Andheri, Mumbai",
    },
    {
      id: "ORD-503",
      vendor: "Delhi Food Truck",
      items: "Potatoes (15kg), Carrots (8kg)",
      amount: "₹1,200",
      status: "delivered",
      date: "2024-01-14",
      location: "Connaught Place, Delhi",
    },
    {
      id: "ORD-504",
      vendor: "Royal Restaurant",
      items: "Premium Vegetables Mix",
      amount: "₹3,200",
      status: "delivered",
      date: "2024-01-14",
      location: "Powai, Mumbai",
    },
  ];

  const topVendors = [
    {
      name: "Sharma Catering",
      type: "Catering Service",
      totalOrders: 45,
      monthlyValue: "₹25,400",
      lastOrder: "2 hours ago",
      rating: 4.9,
    },
    {
      name: "Mumbai Street Food",
      type: "Street Vendor",
      totalOrders: 67,
      monthlyValue: "₹18,200",
      lastOrder: "1 day ago",
      rating: 4.7,
    },
    {
      name: "Royal Restaurant",
      type: "Restaurant",
      totalOrders: 23,
      monthlyValue: "₹32,100",
      lastOrder: "3 hours ago",
      rating: 4.8,
    },
  ];

  const products = [
    {
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: "₹45/kg",
      stock: "500kg",
      orders: 45,
      revenue: "₹23,400",
    },
    {
      name: "Red Onions",
      category: "Vegetables",
      price: "₹30/kg",
      stock: "800kg",
      orders: 67,
      revenue: "₹18,900",
    },
    {
      name: "Green Chilies",
      category: "Vegetables",
      price: "₹80/kg",
      stock: "150kg",
      orders: 34,
      revenue: "₹15,600",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-transit":
        return <Truck className="w-4 h-4 text-blue-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "in-transit":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Supplier Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Fresh Farm Vegetables
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
            <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Eye className="w-4 h-4" />
              View Orders
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className="text-accent">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}
                >
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="vendors">Top Vendors</TabsTrigger>
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Recent Orders</h2>
              <Button variant="outline" size="sm">
                View All Orders
              </Button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card
                  key={order.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{order.vendor}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">
                              {order.status}
                            </span>
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {order.items}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>#{order.id}</span>
                          <span>{order.date}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{order.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-lg font-semibold text-accent">
                          {order.amount}
                        </div>
                        {order.status === "pending" && (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              className="bg-accent hover:bg-accent/90"
                            >
                              Accept
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Top Vendors</h2>
              <Button variant="outline">Find New Vendors</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topVendors.map((vendor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{vendor.name}</CardTitle>
                        <CardDescription>{vendor.type}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {vendor.rating}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Total Orders
                      </span>
                      <span className="font-medium">{vendor.totalOrders}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Monthly Value
                      </span>
                      <span className="font-medium text-accent">
                        {vendor.monthlyValue}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Last Order
                      </span>
                      <span className="font-medium">{vendor.lastOrder}</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">My Products</h2>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Add New Product
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Price
                      </span>
                      <span className="font-medium text-accent">
                        {product.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Stock
                      </span>
                      <span className="font-medium">{product.stock}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Orders
                      </span>
                      <span className="font-medium">{product.orders}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Revenue
                      </span>
                      <span className="font-medium text-green-600">
                        {product.revenue}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        className="flex-1 bg-accent hover:bg-accent/90"
                        size="sm"
                      >
                        Update Stock
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics & Performance</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-accent" />
                      <p>Revenue chart visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order Distribution</CardTitle>
                  <CardDescription>Orders by vendor type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Restaurants</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Street Vendors</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Catering Services</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Food Trucks</span>
                      <span className="font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      98.5%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      On-time delivery rate
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">
                      4.8/5
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average rating
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">+23%</div>
                    <div className="text-sm text-muted-foreground">
                      Monthly growth
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
