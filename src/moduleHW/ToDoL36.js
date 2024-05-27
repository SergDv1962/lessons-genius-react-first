import { useState } from "react";
import ToDoItemL36 from "./ToDoItemL36";

const ToDoL36 = () => {
   const [input, setInput] = useState('');
   const [item, setItem] = useState([]);

   const onClickHandler = (input) => {
      const updatedElement = [...item, input];
      setItem(updatedElement);
      setInput('');
   }
   const onChangeHandler = (e) => {
      const value = e.target.value;
      setInput(value)
   }
   const onEnterClick = (e) => {
      if (e.key === "Enter") {
         const updatedElement = [...item, input];
         setItem(updatedElement);
         setInput('');
      }
   }

   return (
      <div>
         <input
            placeholder="Add your new TO DO"
            onKeyDown={onEnterClick} 
            onChange={onChangeHandler} 
            value={input} 
         />
         <p>{item.length}</p>
         <ul>
            {item.map((element)=>
               <ToDoItemL36 element={element}/>
            )}
         </ul>
         <button onClick={()=>onClickHandler(input)} >Add TO DO</button>
      </div> 
   )
}
export default ToDoL36