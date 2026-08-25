import apiClient from "./client";

// products
export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

// single product
export const getProduct = async (productId) => {
  const response = await apiClient.get(`/products/${productId}`);
  return response.data;
};

// create product
export const createProduct = async (productData) => {
  const response = await apiClient.post("/products", productData);
  return response.data;
};

// delete product
export const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`/products/${productId}`);
  return response.data;
};
