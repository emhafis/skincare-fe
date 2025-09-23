import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageProducts from "../pages/admin/ManageProducts";
import AddProduct from "../pages/admin/AddProduct";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/products" element={<ManageProducts />} />
      <Route path="/product/create" element={<AddProduct />} />
    </Routes>
  );
}
