import {useState} from 'react'

const L403useState = () => {
   const [count, setCount] = useState(0)
   const [value, setValue] = useState(0)

   const handleClickCount = () => {
      setCount(count + 1)
   }

   const handleClickValueIncrement = () => {
      setValue((prevValue)=>prevValue + 1)
      setValue((prevValue)=>prevValue * 2)
      setValue((prevValue)=>prevValue + 1)
   }

   const handleClickValueDecrement = () => {
      setValue((prevValue)=>prevValue - 1)
   }
   return (
      <>
         <p>{count}</p>
         <button onClick={handleClickCount}>Click me</button>
         <p> Для врахування попереднього стану "prevState"</p>
         <p>{value}</p>
         <button onClick={handleClickValueIncrement}>Plus</button>
         <button onClick={handleClickValueDecrement}>Minus</button>
      </>
   )
}

export default L403useState