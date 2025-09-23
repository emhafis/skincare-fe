import { useState, useEffect } from "react";
import { getCategories } from "../../services/category";
import { createProduct } from "../../services/product";

export default function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.categories);
      } catch (err) {
        console.error(err);
        alert("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [id === "dropzone-file" ? "image" :
        id === "product-name" ? "name" :
          id === "product-description" ? "description" :
            id === "product-price" ? "price" :
              id === "product-stock" ? "stock" :
                id === "product-category" ? "categoryId" : id
      ]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      formData.append("categoryId", form.categoryId);
      if (form.image) formData.append("imageUrl", form.image); // nama field sama dengan multer

      const res = await createProduct(formData, token);
      alert("Product created!");
      console.log(res.product);
    } catch (err) {
      alert(err.message);
    }
  };



  return (
    <section className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Add New Product</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="product-name" className="text-sm font-medium">Product Name</label>
          <input id="product-name" type="text" placeholder="e.g. Gentle Hydrating Cleanser" className="w-full py-3 px-3 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary" onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="product-price" className="text-sm font-medium">Price</label>
          <input id="product-price" type="number" placeholder="e.g. 25.00" className="w-full py-3 px-3 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary" onChange={handleChange} required />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="product-description" className="text-sm font-medium">Description</label>
          <textarea id="product-description" placeholder="Product details..." rows="4" className="w-full py-3 px-3 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary" onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="product-stock" className="text-sm font-medium">Stock</label>
          <input id="product-stock" type="number" placeholder="e.g. 100" className="w-full py-3 px-3 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary" onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="product-category" className="text-sm font-medium">Category ID</label>
          <select id="product-category" className="w-full py-3 px-3 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary" onChange={handleChange} required>
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="dropzone-file" className="text-sm font-medium">Product Image</label>
          <input id="dropzone-file" type="file" onChange={handleChange} className="w-full" />
        </div>
        <div className="md:col-span-2 text-right">
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
}
