import { useState, useMemo, useEffect, useCallback } from "react";

function L412useCallback () {
   const [list, setList] = useState([1, 2, 3, 4, 5]);

  const handleUseCallbackExample = useCallback(()=>{
      console.log('into callback');
      setList([...list, 6]);
   },[]);
  // !!! Не змінюй залежності бо буде безкінечна ціклічність
   
   useEffect(()=>{ 
      handleUseCallbackExample();
      console.log('render');
   }, [handleUseCallbackExample]);
   
   const handleClick = ()=>console.log('Click');
   

   return (
      <>
         Hi
         <button onClick={handleClick}>Click Me</button>
         {list.map((el, index)=><p key={index}>{el}</p>)}
      </>
   )
}

export default L412useCallback