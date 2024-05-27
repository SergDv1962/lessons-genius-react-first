import { useState, useEffect } from "react"

const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   console.log('start useWindowWidth');
   
   const changeWidth = () => {
      setWindowWidth(window.innerWidth)
   }

   useEffect(()=>{
      window.addEventListener('resize', changeWidth);
      console.log('into useEffect of useWindowWidth');
      return () => {
         window.removeEventListener('resize', changeWidth);
         console.log('remove addListener');
      }
   },[windowWidth])
   

   return {windowWidth}
}

export default useWindowWidth