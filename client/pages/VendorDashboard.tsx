import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Filter
} from 'lucide-react';

export default function VendorDashboard() {
  const stats = [
    {
      title: 'Total Orders',
      value: '145',
      change: '+12%',
      changeType: 'positive',
      icon: <ShoppingCart className="w-4 h-4" />
    },
    {
      title: 'Monthly Spending',
      value: '₹45,670',
      change: '-8%',
      changeType: 'positive',
      icon: <DollarSign className="w-4 h-4" />
    },
    {
      title: 'Active Suppliers',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: <Package className="w-4 h-4" />
    },
    {
      title: 'Savings',
      value: '₹12,450',
      change: '+18%',
      changeType: 'positive',
      icon: <TrendingUp className="w-4 h-4" />
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      supplier: 'Fresh Farm Vegetables',
      items: 'Tomatoes, Onions, Potatoes',
      amount: '₹2,450',
      status: 'delivered',
      date: '2024-01-15',
      rating: 5
    },
    {
      id: 'ORD-002',
      supplier: 'Mumbai Spice Center',
      items: 'Cumin, Coriander, Turmeric',
      amount: '₹890',
      status: 'in-transit',
      date: '2024-01-14',
      rating: null
    },
    {
      id: 'ORD-003',
      supplier: 'Dairy Fresh Co.',
      items: 'Milk, Paneer, Yogurt',
      amount: '₹1,200',
      status: 'pending',
      date: '2024-01-14',
      rating: null
    },
    {
      id: 'ORD-004',
      supplier: 'Green Valley Farms',
      items: 'Spinach, Cabbage, Carrots',
      amount: '₹780',
      status: 'delivered',
      date: '2024-01-13',
      rating: 4
    }
  ];

  const suppliers = [
    {
      name: 'Fresh Farm Vegetables',
      category: 'Vegetables',
      rating: 4.8,
      orders: 45,
      avgDelivery: '2 hours',
      reliability: 98
    },
    {
      name: 'Mumbai Spice Center',
      category: 'Spices & Condiments',
      rating: 4.6,
      orders: 23,
      avgDelivery: '4 hours',
      reliability: 95
    },
    {
      name: 'Dairy Fresh Co.',
      category: 'Dairy Products',
      rating: 4.9,
      orders: 67,
      avgDelivery: '1.5 hours',
      reliability: 99
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-transit':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Rajesh Kumar</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Order
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="suppliers">My Suppliers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Recent Orders</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{order.supplier}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{order.items}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Order #{order.id}</span>
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-lg font-semibold">{order.amount}</div>
                        {order.rating && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < order.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">My Suppliers</h2>
              <Button variant="outline">Find New Suppliers</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{supplier.name}</CardTitle>
                    <CardDescription>{supplier.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{supplier.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Orders</span>
                      <span className="font-medium">{supplier.orders}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg Delivery</span>
                      <span className="font-medium">{supplier.avgDelivery}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Reliability</span>
                      <span className="font-medium text-green-600">{supplier.reliability}%</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      View Catalog
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics & Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Spending Trend</CardTitle>
                  <CardDescription>Your procurement costs over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center text-muted-foreground">
                    <p>Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Categories</CardTitle>
                  <CardDescription>Most ordered product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Vegetables</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dairy Products</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Spices</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Others</span>
                      <span className="font-medium">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cost Savings Report</CardTitle>
                <CardDescription>How much you've saved by using FreshLink</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₹12,450</div>
                    <div className="text-sm text-muted-foreground">Total Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">18%</div>
                    <div className="text-sm text-muted-foreground">Average Discount</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2.5 hrs</div>
                    <div className="text-sm text-muted-foreground">Time Saved Daily</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
