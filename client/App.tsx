import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '@/components/Layout';
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Vendor Routes */}
          <Route path="/vendors" element={<Placeholder />} />
          <Route path="/vendors/dashboard" element={<Placeholder />} />
          <Route path="/vendors/support" element={<Placeholder />} />
          
          {/* Supplier Routes */}
          <Route path="/suppliers" element={<Placeholder />} />
          <Route path="/suppliers/dashboard" element={<Placeholder />} />
          <Route path="/suppliers/support" element={<Placeholder />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Placeholder />} />
          <Route path="/signup" element={<Placeholder />} />
          
          {/* Info Pages */}
          <Route path="/how-it-works" element={<Placeholder />} />
          <Route path="/about" element={<Placeholder />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
