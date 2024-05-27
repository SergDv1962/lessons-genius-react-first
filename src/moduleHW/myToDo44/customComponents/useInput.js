import { useState } from "react";

export function useInput () {
   const [input, setInput] = useState('');

   const handleChangeInput = (e) => {
      const value = e.target.value;
      setInput(value);
   }

   // console.log("I'm render of useInput");

   return {input, setInput, handleChangeInput}
}