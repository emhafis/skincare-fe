import AdminLayout from "../../layouts/AdminLayout";
import Sidebar from "../../components/admin/Sidebar";
import StatsCard from "../../components/admin/StatsCard";
import OrdersTable from "../../components/admin/OrdersTable";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard label="Total Revenue" value="Rp 12,500,000" change="+10%" />
          <StatsCard label="Orders" value="350" change="+5%" />
          <StatsCard label="Customers" value="120" change="+8%" />
        </div>

        {/* Orders Table */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Orders</h2>
        <OrdersTable />
      </main>
    </AdminLayout>
  );
}