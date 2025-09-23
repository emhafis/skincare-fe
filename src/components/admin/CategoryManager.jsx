import { useState, useEffect } from "react";
import { createCategory, deleteCategory, getCategories } from "../../services/category";
import CategoryItem from "./CategoryItem";

export default function CategoryManager() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

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

  const handleAddCategory = async () => {
    if (!categoryName) return;
    try {
      const res = await createCategory(categoryName);
      setCategories([...categories, res.category]);
      setCategoryName("");
      alert("Category added!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategory(id);
      setCategories(categories.filter(cat => cat.id !== id));
      alert("Category deleted!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Manage Categories</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            className="py-3 px-3 flex-grow rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary"
            placeholder="New category name"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button onClick={handleAddCategory} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90">
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {categories.map(cat => (
            <CategoryItem key={cat.id} category={cat} onDelete={handleDeleteCategory} />
          ))}
        </ul>
      </div>
    </section>
  );
}
