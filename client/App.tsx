import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '@/components/Layout';
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Placeholder from "@/pages/Placeholder";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Vendors from "@/pages/Vendors";
import Suppliers from "@/pages/Suppliers";
import VendorDashboard from "@/pages/VendorDashboard";
import SupplierDashboard from "@/pages/SupplierDashboard";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Vendor Routes */}
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendors/dashboard" element={<VendorDashboard />} />
          <Route path="/vendors/support" element={<Placeholder />} />
          
          {/* Supplier Routes */}
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/dashboard" element={<SupplierDashboard />} />
          <Route path="/suppliers/support" element={<Placeholder />} />
          
          {/* Info Pages */}
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<Placeholder />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
