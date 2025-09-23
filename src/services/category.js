export async function getCategories() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");

  const res = await fetch("http://localhost:1109/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Failed to fetch categories");
  }

  return res.json(); // { categories: [...] }
}

export async function createCategory(name) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");

  const res = await fetch("http://localhost:1109/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Failed to create category");
  }

  return res.json(); // { message, category }
}

export async function deleteCategory(id) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");

  const res = await fetch(`http://localhost:1109/category/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Failed to delete category");
  }

  return res.json(); 
}

