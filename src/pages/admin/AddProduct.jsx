import AdminLayout from "../../layouts/AdminLayout";
import Sidebar from "../../components/admin/Sidebar";
import ProductForm from "../../components/admin/ProductForm";
import CategoryManager from "../../components/admin/CategoryManager";

export default function AddProduct() {
  return (
    <AdminLayout>
      <Sidebar />
      <main className="flex-1 bg-subtle-light dark:bg-subtle-dark/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <ProductForm />
          <CategoryManager />
        </div>
      </main>
    </AdminLayout>
  );
}
