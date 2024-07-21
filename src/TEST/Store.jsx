import { useState } from "react"
import {useCounter} from "@/services/zustandStore"
import { useEffect } from "react"

const Store = () => {
  const {count,incrementCount,reset} = useCounter((state) => ({
    count:state.count,
    incrementCount:state.incr,
    reset:state.reset
  }))

  useEffect(()=>{
    // reset()
  })
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={incrementCount}>A</button>
    </div>
  )
}

export default Store