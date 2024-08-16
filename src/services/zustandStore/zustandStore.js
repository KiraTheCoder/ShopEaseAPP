import {create} from "zustand"
import { devtools, persist } from "zustand/middleware"

const authStore = (set)=>({
    token:"",
    setToken: (newToken) => set({ token: newToken }),
    removeToken:()=>set({token:null})
})

const useAuthStore =create(devtools(persist(authStore,{
    name:"token",
    getStorage: () => localStorage
})))







const getProduct = (set)=>({
    product:"",
    setProduct: (product) => set({ product })
})

const useGetProduct =create(devtools(getProduct,{
    name:"product",
    getStorage: () => localStorage
}))


//  about cart data   
const useCartStore = create(devtools(persist((set, get) => ({
    cart: [],

    // Add product to cart
    addProduct: (product) => {
        const existingProduct = get().cart.find(item => item._id === product._id);
        if (existingProduct) {
            set(state => ({
                cart: state.cart.map(item => 
                    item._id === product._id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                )
            }));
        } else {
            set(state => ({
                cart: [...state.cart, { ...product, quantity: 1 }]
            }));
        }
    },

    // Remove product from cart
    removeProduct: (productId) => {
        set(state => ({
            cart: state.cart.filter(item => item._id !== productId)
        }));
    },

    // Update quantity of a product
    updateQuantity: (productId, quantity) => {
        set(state => ({
            cart: state.cart.map(item => 
                item._id === productId 
                    ? { ...item, quantity } 
                    : item
            )
        }));
    },

    // Calculate total price
    calculateTotal: () => {
        return get().cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    },

    // Clear the cart
    clearCart: () => {
        set({ cart: [] });
    }
}), {
    name: "cart-storage",
    getStorage: () => localStorage
})));






export {useAuthStore, useGetProduct ,useCartStore }

/* 
get().state --> useful when work conditional state

*/


