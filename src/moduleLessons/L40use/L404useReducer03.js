import { useReducer } from "react";

const initialValue = {count: 0, isEven: false};

function reducer (state, action) {
   switch (action.type) {
      case 'increment':
         return {...state, count: state.count + 1};
      case 'decrement':
         return {...state, count: state.count - 1};
      case 'reset':
         return initialValue;
      case 'isEven':
         return {...state, isEven: !state.isEven};
   
      default:
         break;
   }
}

const L404useReducer03 = () => {
 
   const [value, dispatch] = useReducer(reducer, initialValue);

   function handleIncrement() {
      dispatch({type: 'increment'})
   }
   function handleDecrement() {
      dispatch({type: 'decrement'})
   }
   function toggleEven() {
      dispatch({type: 'isEven'})
   }
   function handleReset() {
      dispatch({type: 'reset'})
   }
   return (
      <>
         <p>Лічильник; {value.count}</p>
         <p>Число парне: {value.isEven ? "Yes" : 'No'}</p>    
         <button onClick={handleIncrement}>increment</button>
         <button onClick={handleDecrement}>decrement</button>
         <button onClick={toggleEven}>toggleEven</button>
         <button onClick={handleReset}>reset</button>
      </>
   )
}
export default L404useReducer03