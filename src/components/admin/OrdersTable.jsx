export default function OrdersTable() {
  const orders = [
    { id: "#12345", customer: "Sophia Clark", date: "2024-03-15", status: "Shipped", total: "$55.00" },
    { id: "#12346", customer: "Liam Carter", date: "2024-03-14", status: "Delivered", total: "$75.00" },
    { id: "#12347", customer: "Olivia Bennett", date: "2024-03-13", status: "Processing", total: "$40.00" },
    { id: "#12348", customer: "Noah Harper", date: "2024-03-12", status: "Shipped", total: "$60.00" },
    { id: "#12349", customer: "Ava Foster", date: "2024-03-11", status: "Delivered", total: "$90.00" },
  ];

  return (
    <div className="overflow-x-auto bg-background-light dark:bg-background-dark rounded-lg border border-primary/20 dark:border-primary/30">
      <table className="w-full text-left">
        <thead className="border-b border-primary/20 dark:border-primary/30">
          <tr>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Order ID</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Customer</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Date</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Status</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i} className="border-b border-primary/10 dark:border-primary/20">
              <td className="p-4 text-gray-900 dark:text-white">{o.id}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{o.customer}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{o.date}</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {o.status}
                </span>
              </td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
