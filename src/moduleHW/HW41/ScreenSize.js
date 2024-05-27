import { useState, useEffect } from "react";

const ScreenSize = () => {
   const [windowSize, setWindowSize] = useState({
      windowWidth:window.innerWidth,
      windowHeight:window.innerHeight
   }) 
   const changeWindowSize = () => {
      setWindowSize({
         windowWidth: window.innerWidth,
         windowHeight: window.innerHeight
      });
   }
   useEffect(() => {
      window.addEventListener('resize', changeWindowSize);
      return () => window.removeEventListener('resize', changeWindowSize);
   }, [windowSize])

   return (
      <>
       Hello
       <p>Width: {windowSize.windowWidth}</p>
       <p>Height: {windowSize.windowHeight}</p>
      </>
   )
}
export default ScreenSize