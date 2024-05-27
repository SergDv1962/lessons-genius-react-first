import { useState } from "react";

const useInput = () => {
   const [txt, setTxt] = useState("");
   function handleTxtInput(e) {
    const value = e.target.value;
    setTxt(value);
  }
   return {txt, setTxt, handleTxtInput};
}
 
export default useInput;