import { API_BASE } from "../constants";

export const endpoints = {
    cartById: (id: number) => `${API_BASE}/carts/${id}`,
    productById: (id: number) => `${API_BASE}/products/${id}`,
  };