import { useState } from "react";

const useInput = () => {
   const [input, setInput] = useState('')

   const handleInputChange = (e) => {
   const value = e.target.value;
   setInput(value);
   }
   return  {input, setInput, handleInputChange};
}
 
export default useInput;