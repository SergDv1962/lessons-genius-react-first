import { useRef } from "react";
import L406ChildComponent from './L406ChildComponent'


const L406forwardRef = () => {

   const inputRef = useRef();
   console.log('I`m L406forwardRef');
   
   const focusInput = () => {
      inputRef.current.focus();
   }

   return (
      <div>
         <L406ChildComponent ref={inputRef}/>
         <button onClick={focusInput}>Фокус на поле вводу</button>
      </div>
   )
}

export default L406forwardRef