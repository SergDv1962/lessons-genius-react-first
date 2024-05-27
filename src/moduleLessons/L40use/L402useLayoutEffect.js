import { useLayoutEffect, useRef } from "react"

const L402LayoutEffect = () => {
   const elementRef = useRef(null);
   
   useLayoutEffect(()=>{
      const height = elementRef.current.offsetHeight;
      console.log("висота елемента (div):", height);
      
   },[])
   
   return (
      <div ref={elementRef}>
         Елемент, висоту котрого ми дивимось 
      </div>
   )
}
export default L402LayoutEffect