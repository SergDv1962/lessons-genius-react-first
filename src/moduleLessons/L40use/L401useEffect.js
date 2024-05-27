import {useEffect, useState} from 'react'
import L401UnmountComponent from './L401UnmountComponent'

const L401useEffect = () => {
   const [value, setValue] = useState(0)
   const [isMounted, setIsMounted] = useState(false)

   useEffect(() => {
      console.log('componentDidMount useEffect');
   }, []);

   useEffect(() => {
      console.log('componentDidUpdate useEffect');
   }, [value]);

   const handleClick = () => {
      // setValue( value + 1 )          //або приклад для componentDidUpdate
      setIsMounted(!isMounted)         //або приклад для componentWillUpmount
   }
   return (
      <>
         <p>{value}</p>
         {isMounted ? <L401UnmountComponent/> : <p>Text</p>}
         <button onClick={handleClick}>Click me</button>
      </>
   )
}

export default L401useEffect