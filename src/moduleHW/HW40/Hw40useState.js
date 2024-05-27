import { useState, } from "react"

const Hw40useState = () => {
   const [count, setCount] = useState('');

   const name = ['Bob', 'Tom', 'Mary', 'Jon', 'Rony']
   
   const onClickHandel = () => {
      setCount(name[Math.floor(Math.random() * 5)]);
   }
   return (
      <>
         <p>Hello {count}</p>
         <button onClick={onClickHandel}>Click me</button>
      </>
   )
}
export default Hw40useState