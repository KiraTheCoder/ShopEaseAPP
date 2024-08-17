import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  token: "",
  setToken: (newToken) => set({ token: newToken }),
  removeToken: () => set({ token: null }),
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "token",
      getStorage: () => localStorage,
    })
  )
);

const getProduct = (set) => ({
  product: "",
  setProduct: (product) => set({ product }),
});

const useGetProduct = create(
  devtools(getProduct, {
    name: "product",
    getStorage: () => localStorage,
  })
);

export { useAuthStore, useGetProduct };

/* 
get().state --> useful when work conditional state

*/
