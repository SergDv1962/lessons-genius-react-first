import { useState } from 'react';
import L38ClassComponent from './L38ClassComponent';
import L38ClassToDo from "./L38ClassToDo";

const L38 = () => {
   const [isShowTimer, setIsShowTimer] = useState(false)
   return (
      <>
         {isShowTimer ? <L38ClassComponent/> : <L38ClassToDo/>}
         <button onClick={()=>setIsShowTimer((prev)=> !prev)}>Show timer</button>
         
      </>
   )
}
export default L38