import {useRef, useState} from 'react'

const L405useRef = () => {
   const [value, setValue] = useState(0)
   const headerRef = useRef();
   const pRef = useRef();

   console.log(headerRef.current);
   

   const inputRef = useRef();

   const handleFocus = () => {
      inputRef.current.focus();
      console.log(inputRef.current.value);
      console.log(pRef.current);
      pRef.current.innerHTML = `<span>А зараз вставляємо інший елемент з текстом без рендеренгу компаненту!</span>`; 
       headerRef.current.insertAdjacentHTML('afterbegin', `<p>hello</p>`);
   }

 
   return (
      <div>
         <header ref = {headerRef}>
            <input ref={inputRef}/>
            <p ref={pRef}>Text</p>
            <p>{value}</p>
            <button onClick={handleFocus}>Focus me</button>
            <button onClick={()=>setValue(value+1)}>Click me</button>
         </header>
      </div>
   )
}

export default L405useRef