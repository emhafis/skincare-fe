import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/product";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // misal token dari localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;

    try {
      await deleteProduct(id, token);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return <p className="p-4 text-gray-600 dark:text-gray-400">Loading products...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="p-4 text-gray-600 dark:text-gray-400">No products found.</p>;
  }

  return (
    <div className="overflow-x-auto bg-background-light dark:bg-background-dark rounded-lg border border-primary/20 dark:border-primary/30">
      <table className="w-full text-left">
        <thead className="border-b border-primary/20 dark:border-primary/30">
          <tr>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Product Name</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Price</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Category</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white">Image</th>
            <th className="p-4 font-semibold text-gray-900 dark:text-white text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b border-primary/10 dark:border-primary/20">
              <td className="p-4 text-gray-900 dark:text-white">{p.name}</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">
                {p.price != null ? `Rp ${Number(p.price).toFixed(2)}` : "-"}
              </td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{p.category?.name || "-"}</td>
              <td className="p-4">
                {p.imageUrl ? (
                  <img
                    src={`http://localhost:1109/${p.imageUrl.replace(/\\/g, "/")}`}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </td>
              <td className="p-4 text-right space-x-2">
                <button className="p-2 rounded-full hover:bg-primary/20 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="p-2 rounded-full hover:bg-red-500/20 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
