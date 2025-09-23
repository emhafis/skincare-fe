import AdminLayout from "../../layouts/AdminLayout";
import Sidebar from "../../components/admin/Sidebar";
import ProductsTable from "../../components/admin/ProductsTable";
import { Link } from "react-router-dom";

export default function ManageProducts() {
  return (
    <AdminLayout>
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Product Management
          </h2>
          <Link to={"/admin/product/create"}>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-sm">
              <span className="font-medium">+ Add Product</span>
            </button>
          </Link>
        </div>

        <ProductsTable />
      </main>
    </AdminLayout>
  );
}





