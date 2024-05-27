import { useState, useEffect, useLayoutEffect, useRef} from "react"

const Hw40useLayoutEffect = () => {
   const [count, setCount] = useState(0);
   const elementRef = useRef(null);

   useLayoutEffect(()=>{
      let height = elementRef.current.offsetHeight;
      elementRef.current.insertAdjacentHTML(
         'afterbegin',
         `<p>text second ${height}</p>`)
      height = elementRef.current.offsetHeight;
      console.log('Висота елемента', height);
      },[count])

   const onClickHandel = () => {
      setCount(count + 1)
    }
   
   return (
      <div ref={elementRef}>
         <p>Text first free</p>
         <p>{count}</p>
         <button onClick={onClickHandel}>Click me</button>
      </div>
   )
}
export default Hw40useLayoutEffect