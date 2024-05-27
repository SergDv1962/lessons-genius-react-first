import {useState} from 'react';
import LIstItem36L from './ListItem36L';

function List36L () {
   const [input, setInput] = useState('');
   const [item, setItem] = useState(['First element']);
   
   const onClickHandler = (input) => {
      const updatedElement = [...item, input];
      setItem(updatedElement);
      setInput('')
   }

   const onChangeHandler = (e) => {
      let value = e.target.value;
      setInput(value);
   }

   return (
      <div>
         <input onChange={onChangeHandler} value={input}></input>
         <ul>
            {item.map((element, index)=>
               <LIstItem36L element={element} index={index}/>
            )}
         </ul>
         <button onClick={()=>onClickHandler(input)}>Add new element</button>
      </div>
   )
}

export default List36L