import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../services/product";
import axios from "axios";
import apiUrl from "../services/apiUrl";

function ShippingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [shippingAddress, setShippingAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Fetch product dari API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${apiUrl}/order`,
        {
          productId: product.id,
          shippingAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("✅ Order berhasil dibuat!");
      navigate("/products"); // redirect ke halaman orders
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to create order");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            {error || "Product not found"}
          </h2>
          <Link
            to="/products"
            className="mt-6 inline-block bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 p-10 bg-white/50 dark:bg-black/20 rounded-xl shadow-lg">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                Shipping Information
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Please fill your address the form below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-lg space-y-4">
                <div>
                  <label className="font-medium text-sm">Product Name</label>
                  <input
                    className="form-input w-full mt-2 px-4 py-3 rounded-lg"
                    type="text"
                    value={product.name}
                    readOnly
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Price</label>
                  <input
                    className="form-input w-full mt-2 px-4 py-3 rounded-lg"
                    type="text"
                    value={`Rp ${product.price}`}
                    readOnly
                  />
                </div>

                <div>
                  <label
                    className="font-medium text-sm"
                    htmlFor="shipping-address"
                  >
                    Shipping Address
                  </label>
                  <input
                    className="form-input w-full mt-2 px-4 py-3 rounded-lg"
                    id="shipping-address"
                    name="shipping-address"
                    placeholder="1234 Main St, Anytown, USA"
                    required
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="space-y-2">
                <Link
                  className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                  to={`/products/${product.id}`}
                >
                  Cancel
                </Link>
                <button
                  disabled={submitting}
                  className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                  type="submit"
                >
                  {submitting ? "Processing..." : "Buy"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ShippingForm;
