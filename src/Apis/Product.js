import Products from "./ProductsApi.json";

export function getAll() {
  return Promise.resolve(Products);
}
export function getById(id) {
  const products = Products.find((item) => item.id === id);
  return Promise.resolve(products);
}
export default {
  getAll,
  getById,
};
