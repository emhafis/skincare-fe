import axios from "axios";

const API_URL = "http://localhost:1109";

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/product/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.error || "Failed to fetch product");
  }
};

export const updateProduct = async (id, productData, token) => {
  try {
    const res = await axios.put(`${API_URL}/update-product/${id}`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.error || "Failed to update product");
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data; // ini akan mengembalikan array produk
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.error || "Failed to fetch products");
  }
};


export const deleteProduct = async (id, token) => {
  try {
    const res = await axios.delete(`${API_URL}/delete-product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.error || "Failed to delete product");
  }
};

export const createProduct = async (productData, token) => {
  try {
    const res = await axios.post(`${API_URL}/create-product`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", 
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.error || "Failed to create product");
  }
};
