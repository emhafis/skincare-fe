import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ShippingForm() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
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

            <form action="#" className="mt-8 space-y-6" method="POST">
              <div className="rounded-lg space-y-4">
                <div>
                  <label className="font-medium text-sm" htmlFor="product-name">
                    Product Name
                  </label>
                  <input
                    className="form-input w-full mt-2 px-4 py-3 rounded-lg"
                    id="product-name"
                    name="product-name"
                    type="text"
                    value={product.name}
                    readOnly
                  />
                </div>

                <div>
                  <label className="font-medium text-sm" htmlFor="price">
                    Price
                  </label>
                  <div className="mt-2 relative rounded-lg">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="text-gray-500 sm:text-sm">Rp</span>
                    </div>
                    <input
                      className="form-input w-full pl-10 pr-12 py-3 rounded-lg"
                      id="price"
                      name="price"
                      type="text"
                      value={product.price}
                      readOnly
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <span className="text-gray-500 sm:text-sm">IDR</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm" htmlFor="shipping-address">
                    Shipping Address
                  </label>
                  <input
                    className="form-input w-full mt-2 px-4 py-3 rounded-lg"
                    id="shipping-address"
                    name="shipping-address"
                    placeholder="1234 Main St, Anytown, USA"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                  to={`/products/${product.id}`}
                >
                  Cancel
                </Link>
                <button
                  className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                  type="submit"
                >
                  Buy
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
