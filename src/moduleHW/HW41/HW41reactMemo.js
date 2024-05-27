import React from 'react';
import { useState } from 'react';
import HW41reactMemoChild from './HW41reactMemoChild'
import HW41reactMemoChildSecond from './HW41reactMemoChildSecond'

const HW41reactMemo = () => {

   const [list, setList] = useState([
      {id:1, name: 'Tom'},
      {id:2, name: 'Jon'},
      {id:3, name: 'Ann'},
   ])
   console.log("i'm a parent component");
   
   const handleDelete = (id) => {
      console.log('delete')
      const filtredList = list.filter((el)=>el.id !== id)
      setList(filtredList)
   }

   return (
      <>
         <ul>
            {list.map((item)=>
               <li key={item.id}>
                  <HW41reactMemoChild 
                     name={item.name}
                     id={item.id}
                     onClick={()=>handleDelete(item.id)}
                  />
               </li>
            )}
         </ul>
         <HW41reactMemoChildSecond/>
      </>
   )
}

export default HW41reactMemo