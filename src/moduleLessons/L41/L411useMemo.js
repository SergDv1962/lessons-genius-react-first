import { useState, useMemo } from "react";

function L411useMemo1 () {
   const [list, setList] = useState([1, 2, 3, 4, 5]);

   const memoizedList = useMemo(()=>{
      return list;
   }, []);

   function handleListChange () {
      setList([...list, 6])
   }

   console.log('render');
   console.log(list);
   
   

   return (
      <>
         {memoizedList.map((item, index)=><span key={index}>{item}</span>)}
         <button onClick={handleListChange}>Click me</button>
         {list.map((item, index)=><span key={index}>{item}</span>)}
      </>
   )
}

export default L411useMemo1