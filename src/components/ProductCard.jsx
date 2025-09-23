import { Link } from "react-router-dom";

function ProductCard({ id, name, price, image }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden group shadow hover:shadow-lg transition">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        <p className="text-lg font-semibold text-primary mb-4">Rp {price}</p>
        <Link
          to={`/products/${id}`}
          className="w-full block bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
