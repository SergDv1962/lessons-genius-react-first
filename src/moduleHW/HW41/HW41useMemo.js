import React, { useState, useMemo } from "react"

export default function HW41useMemo () {

   const [list, setList]= useState([1, 2, 8, 4, 5])
   const [count, setCount]= useState(0)

   let sum = null;

   const memoizedList = useMemo(()=>{
      list.forEach((item)=>{
      sum = sum + item;
      return sum
      })
      console.log(sum, "I'm useMemo")
   },[list])

   const handleChange = () => {
      setList([...list, 10])
   }

   const handleClick = () => {
      setCount(count + 1)
   }

   return (
      <>
         <p>{count}</p>
         Hi HW41useMemo
         <h2>{sum}</h2>
         
         <button onClick={handleChange}>Click Me</button>
         <button onClick={handleClick}>Plus</button>
      </>
   )
}