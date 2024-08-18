import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

////////////// auth //////////////////
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


////////////// product //////////////////
const getProduct = (set) => ({
  product: "",
  setProduct: (product) => set({ product }),
});


const useGetProduct = create(
  devtools(persist(getProduct, {
    name: "product",
    getStorage: () => localStorage,
  }))
);


////////////////// product count  ////////////////
const getCount = (set) => ({
  count: "",
  setCount: (count) => set({ count }),
});


const useGetCount = create(
  devtools(getCount, {
    name: "count",
    getStorage: () => localStorage,
  })
);
////////////////// product pagination  ////////////////
const pagination = (set) => ({
  pageNo: 1,
  setPageNo: (pageNo) => set({ pageNo }),
});


const usePagination = create(
  devtools(persist(pagination, {
    name: "pageNo",
    getStorage: () => localStorage,
  }))
);




///////  Exports /////////////////////////
export { useAuthStore, useGetProduct, useGetCount, usePagination };

/* 
get().state --> useful when work conditional state

*/
