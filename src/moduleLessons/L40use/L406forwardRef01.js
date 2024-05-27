import { useRef } from "react";
import L406forwardRef01children from "./L406forwardRef01children";

const L406forwardRef01 = () => {
   const childrenComponentRef = useRef();
   console.log('I`m parent component');
   
   const handleClick = () => {
      console.log(childrenComponentRef.current.textContent);
   }
   return (
      <div>
         <L406forwardRef01children ref={childrenComponentRef}/>
         <button onClick={handleClick}>Click me</button>
      </div>
   )
}
export default L406forwardRef01