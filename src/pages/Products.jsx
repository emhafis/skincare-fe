import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/product";
import { useEffect, useState } from "react";
import apiUrl from "../services/apiUrl";

function Products() {
  const [products, setProducts] = useState([]); // <-- state untuk produk
  const [loading, setLoading] = useState(true); // <-- state loading
  const [error, setError] = useState(null);     // <-- state error

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to show products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-20 lg:px-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Skincare Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              image={`${apiUrl}/${p.imageUrl.replace(/\\/g, "/")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
