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
  cartitems:"",
  subAmount:"",
  setCount: (count) => set({ count }),
  setCartitems: (cartitems)=> set ({cartitems}),
  // setSubAmount: (subAmount)=> set ({subAmount})
});

const useGetCount = create(
  devtools(getCount, {
    name: "count",
    cart:"cartitems",
    // payAmt:"subAmount",
    getStorage: () => localStorage,
  })
);

// ////////////////// Buy Product  ////////////////
// const getBuyProduct = (set) => ({
//   buyingProduct: "",
//   setBuyProduct: (buyingProduct) => set({ buyingProduct }),
// });

// const useBuyProduct = create(
//   devtools(getBuyProduct, {
//     name: "buyingProduct",
//     getStorage: () => localStorage,
//   })
// );


////////////////// Buy Product  ////////////////
const getBuyProduct = (set) => ({
  buyingProduct: "",
  setBuyProduct: (buyingProduct) => set({ buyingProduct }),
});

const useBuyProduct = create(
  devtools(getBuyProduct, {
    name: "buyingProduct",
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
export { useAuthStore, useGetProduct, useGetCount, usePagination, useBuyProduct };

/* 
get().state --> useful when work conditional state

*/
