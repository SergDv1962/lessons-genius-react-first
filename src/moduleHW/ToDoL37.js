import React from "react";
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import ToDoItemL37 from "./ToDoItemL37";

const ToDoL37 = () => {
   const initialValues = [
      {id: 1, name: 'Jon'},
      {id: 2, name: 'Mary'},
      {id: 3, name: 'Tom'}
   ];
   const [input, setInput] = useState('');
   const [item, setItem] = useState(initialValues);
   const newItem = {id:uuidv4(), name: input}

   const onClickHandler = () => {
      const updatedElement = [...item, newItem];
      setItem(updatedElement);
      setInput('');
   }
   const onChangeHandler = (e) => {
      const value = e.target.value;
      setInput(value)
   }
   const onEnterClick = (e) => {
      if (e.key === "Enter") {
         const updatedElement = [...item, newItem];
         setItem(updatedElement);
         setInput('');
      }
   }
   const onClickHandlerRemove = (e) => {
      console.log("remove");
      item.forEach((todo, index)=>{
         if(todo.name === input) {
         //   console.log(item);
           item.splice(index,1);
           setItem(item)
         }
         setInput('');
      });
      
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
               <ToDoItemL37 key={element.id} name={element.name}/>
            )}
         </ul>
         <button onClick={()=>onClickHandler(input)} >Add TO DO</button>
         <button onClick={()=>onClickHandlerRemove(input)} >Delete TO DO</button>
      </div> 
   )
}
export default ToDoL37