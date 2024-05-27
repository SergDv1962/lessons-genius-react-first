import { useEffect, useState } from "react";

const useWindowWidth = () => {

   const [widthWindow, setWidthWindow] = useState({ww:window.innerWidth});

   const checkedWidth = () => {
      setWidthWindow({ww:window.innerWidth})
   }
   useEffect(()=>{
      window.addEventListener('resize', checkedWidth);
      return () => {window.removeEventListener('resize', checkedWidth)}
   },[widthWindow])
   
   console.log('useWW: ', widthWindow.ww);
   
   console.log('I`m useWidthWindow');
   
   return {widthWindow}
}
export default useWindowWidth