import { useState } from "react";

export default function AddTask ({onClickAdd}) {
   const [text, setText] = useState('');

   const onChangeInput = (e)=>{
      setText(e.target.value)};

   const onClickHendle = ()=>{
      onClickAdd(text);
      setText('')
   
   }
      
   return (
      <>
         addTask
         <input
            value={text} 
            onChange={onChangeInput}
            placeholder="Add task"
            />
         <button onClick={onClickHendle}>
            Add</button>
      </>
   )
}