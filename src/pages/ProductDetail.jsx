import { getProductById } from "../services/product";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id); // panggil API
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const [showMore, setShowMore] = useState(false);
  const [showMoreUsage, setShowMoreUsage] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link
          to="/products"
          className="mt-6 inline-block bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Ingredients text with line breaks
  const ingredientsText =
    "Water\\Aqua\\Eau, Bifida Ferment Lysate, Peg-8, Propanediol, Bis-Peg-18 Methyl Ether Dimethyl Silane, Methyl Gluceth-20, Glycereth-26, Peg-75, Butylene Glycol, Adansonia Digitata Seed Extract, Tripeptide-32, Sodium Hyaluronate, Yeast Extract\\Faex\\Extrait De Levure, Lactobacillus Ferment, Cola Acuminata (Kola) Seed Extract, Anthemis Nobilis (Chamomile) Flower Extract, Hydrolyzed Algin, Pantethine, Caffeine, Lecithin, Sodium Rna, Bisabolol, Squalane, Glycerin, Oleth-3 Phosphate, Caprylyl Glycol, Oleth-3, Oleth-5, Choleth-24, Hydrogenated Lecithin, Jojoba Wax Peg-120 Esters, Ceteth-24, Tocopheryl Acetate, Carbomer, Triethanolamine, Tetrasodium Edta, Bht, Xanthan Gum, Potassium Sorbate, Disodium Edta, Phenoxyethanol, Red 4 (Ci 14700), Yellow 5 (Ci 19140).";

  const previewLength = 200;
  const isLong = ingredientsText.length > previewLength;
  const displayedText = showMore
    ? ingredientsText
    : ingredientsText.slice(0, previewLength) + (isLong ? "..." : "");

  // Usage list
  const usageList = [
    "Use this face serum on clean skin before your moisturizer, AM & PM, Apply a full dropper of Advanced Night Repair to the palm of your hand, massage onto face in a heart shape, using all fingers on both hands, start at the center of your face and move out to ears. Glide hands from sides of face-down under chin.",
    "Next, trace large heart from middle forehead out to temples. Glide down to side of the face and close the heart again under your chin. Finish the heart ritual by gently massaging onto neck in downward motion.",
    "Use this face serum on clean skin before your moisturizer, AM & PM, Apply a full dropper of Advanced Night Repair to the palm of your hand, massage onto face in a heart shape, using all fingers on both hands, start at the center of your face and move out to ears. Glide hands from sides of face-down under chin.",
    "Next, trace large heart from middle forehead out to temples. Glide down to side of the face and close the heart again under your chin. Finish the heart ritual by gently massaging onto neck in downward motion.",
  ];

  const usagePreviewCount = 2;
  const isLongUsage = usageList.length > usagePreviewCount;
  const displayedUsage = showMoreUsage
    ? usageList
    : usageList.slice(0, usagePreviewCount);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 flex flex-col h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative items-start">
          {/* Product Image */}
          <div className="w-full lg:sticky lg:top-32 self-start">
            <div className="bg-subtle-light dark:bg-subtle-dark rounded-lg overflow-hidden lg:sticky lg:top-16">
              <img
                src={`http://localhost:1109/${product.imageUrl.replace(/\\/g, "/")}`}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg "
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link
                    to="/products"
                    className="text-primary hover:underline"
                  >
                    Back to Product List
                  </Link>
                </li>
                <li>
                  <span className="text-foreground-light/50 dark:text-foreground-dark/50">
                    /
                  </span>
                </li>
                <li>
                  <span className="font-medium">Cleansers</span>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-foreground-light/80 dark:text-foreground-dark/80 mb-6 lg:text-lg">
              A gentle, foaming cleanser that effectively removes makeup, dirt,
              and impurities without stripping the skin&apos;s natural moisture
              barrier. Formulated with soothing botanicals, it leaves skin
              feeling clean, refreshed, and balanced.
            </p>

            <p className="text-3xl font-bold text-primary mb-8">Rp {product.price}</p>

            <div className="flex mb-8">
              <Link to={`/shipping/${product.id}`}>
                <button className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                  Buy Now
                </button>
              </Link>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Ingredients
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {displayedText}
              </p>
              {isLong && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-3 text-gray-500 text-sm"
                >
                  {showMore ? "Show Less" : "Show More Ingredients"}
                </button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How to use</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {displayedUsage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              {isLongUsage && (
                <button
                  onClick={() => setShowMoreUsage(!showMoreUsage)}
                  className="mt-3 text-gray-500 text-sm"
                >
                  {showMoreUsage ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
