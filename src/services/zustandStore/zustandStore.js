import {create} from "zustand"
import { devtools, persist } from "zustand/middleware"

const counter = (set,get)=>({
    count:0,
    extraCount:0,
    incr: () => set((state)=>({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    printCount:()=>console.log(get().count),
    reset: () => set({ count: 0, extraCount: 0 }),
})


const useCounter = create(devtools(persist(counter,{
    name: "counter-storage", 
    getStorage: () => localStorage, 
    // getStorage: () => sessionStorage, //  for session storage
})))


const authStore = (set)=>({
    token:"",
    setToken: (newToken) => set({ token: newToken })
})

const useAuthStore =create(devtools(persist(authStore,{
    name:"token",
    getStorage: () => localStorage
})))


export { useCounter,useAuthStore }

/* 
get().state --> useful when work conditional state

*/