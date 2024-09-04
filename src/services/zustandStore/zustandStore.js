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


////////////// product //////////////////

const getSearchProduct = (set) => ({
  products: "",
  setSearchProduct: (products) => set({ products }),
});

const useGetSearchProduct = create(
  devtools(getSearchProduct, {
    name: "products",
    getStorage: () => localStorage,
  })
);


////////////////// product count  ////////////////
const getCount = (set) => ({
  count: "",
  wishlistcount:"",
  cartitems:"",
  subAmount:"",
  setCount: (count) => set({ count }),
  setCartitems: (cartitems)=> set ({cartitems}),
  setWishlistcount: (wishlistcount)=> set ({wishlistcount})
});

const useGetCount = create(
  devtools(getCount, {
    name: "count",
    cart:"cartitems",
    wishlist:"wishlistcount",
    // payAmt:"subAmount",
    getStorage: () => localStorage,
  })
);


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
  devtools(pagination, {
    name: "pageNo",
    getStorage: () => localStorage,
  })
);

// /////////////  home page api data ///////////

const optimizedProductsfetched=(set)=>({
  datafetchedpageNo:null,
  fetchedProducts:null,
  setFetchedData:({datafetchedpageNo,fetchedProducts})=>set({datafetchedpageNo,fetchedProducts})
})

const useOptimizeProductsfetched=create(
  devtools(persist(optimizedProductsfetched,{
    name:"fetchedproductdetails",
    getStorage:()=>sessionStorage,
  }))
)


///////  Exports /////////////////////////
export { useAuthStore, useGetProduct, useGetCount, usePagination, useBuyProduct, useGetSearchProduct ,useOptimizeProductsfetched};

/* 
get().state --> useful when work conditional state

*/
