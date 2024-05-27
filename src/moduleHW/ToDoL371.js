import React from "react";
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";

import ToDoItemL371 from "./ToDoItemL371";
import ButtonComponent from "./ButtonComponent"

const ToDoL371 = () => {
   const initialValues = [
      {id: 1, name: 'Jon'},
      {id: 2, name: 'Mary'},
      {id: 3, name: 'Tom'}
   ];
   const [input, setInput] = useState('');
   const [item, setItem] = useState(initialValues);
   
   let num = uuidv4();
   const newItem = {id:num, name: input};

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
   const onHandleDelete = (id)=>{
      console.log('delete');
      const filtedItem = item.filter((item)=>item.id !== id);
      setItem(filtedItem)
      console.log(filtedItem);
      
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
            {item.map((element, index)=>(
               <ToDoItemL371 
                  key={element.id}
                  name={element.name}>
                     {<ButtonComponent 
                        type='button' 
                        text='delete' 
                        onClick={()=>onHandleDelete(element.id)} 
                     />}
               </ToDoItemL371>)
            )}
         </ul>
         <button onClick={()=>onClickHandler(input)} >Add TO DO</button>
      </div> 
   )
}
export default ToDoL371