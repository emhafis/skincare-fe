import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import ShippingForm from "../pages/ShippingForm";
import PaymentSuccess from "../pages/PaymentSuccess";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/shipping/:id" element={<ShippingForm />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
