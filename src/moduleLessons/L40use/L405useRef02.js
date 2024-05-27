import { useRef, useState, useEffect } from 'react';

const L405useRef02 = () => {
   const [text, setText] = useState('');
   const prevTextRef = useRef('');

   useEffect(()=>{
      prevTextRef.current = text;
   },[text]);

   const handleChange = (event) => {
      setText(event.target.value);
   };

   return (
      <div>
         <input type='text' value={text} onChange={handleChange}/>
         <p>Поточний текст: {text}</p>
         <p>Попередній текст: {prevTextRef.current}</p>
      </div>
   )
}
export default L405useRef02