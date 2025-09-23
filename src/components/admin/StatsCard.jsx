export default function StatsCard({ label, value, change }) {
  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-primary/20 dark:border-primary/30">
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
      <p className="text-green-500 text-sm font-medium mt-1">{change}</p>
    </div>
  );
}
