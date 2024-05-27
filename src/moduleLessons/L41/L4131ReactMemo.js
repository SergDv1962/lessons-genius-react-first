import { useState, useMemo, useCallback, useEffect } from "react";
import L4132ReactMemoChild from './L4132ReactMemoChild'
import L4133ReactMemoChildSecond from './L4133ReactMemoChildSecond'
import L4134ReactMemoChildThird from './L4134ReactMemoChildThird'

function L41ReactMemo () {
   const [list, setList] = useState([1, 2, 3, 4, 5]);
   
   
   return (
      <>
        hi i'm L41ReactMemo
        <L4133ReactMemoChildSecond/>
        <L4134ReactMemoChildThird name={'Jon'}/>
        {list.map((item, index)=>{
         return <L4132ReactMemoChild key={index} item={item}/> 
        })}
        <button onClick={()=>{setList([...list, 6])}}>Click Me</button>
      </>
   )
}

export default L41ReactMemo