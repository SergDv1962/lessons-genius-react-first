import { useState, useEffect, useRef} from "react"

const Hw401useEffect = () => {
   const [count, setCount] = useState(0);

   const textRef = useRef()

   useEffect (() => {
      console.log('useEffect one');
      console.log(textRef);
      
      return console.log('useEffect two');
   }, [count])

   const onClickHandel = () => {
      setCount(count + 1);
   }
   return (
      <>
         <p ref={textRef}>{count}</p>
         <button onClick={onClickHandel}>Click me</button>
      </>
   )
}
export default Hw401useEffect