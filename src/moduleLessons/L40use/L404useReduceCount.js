import { useReducer } from "react"

const initialState = {count: 0};

const reducer = (state, action) => {
   switch (action.type) {
      case 'increment':
         return {count: state.count + 1};
      case 'decrement':
         return {count: state.count - 1};
      case 'reset':
         return {count: 0};
      default:
         throw new Error('Невідома дія')
   }
};

const L404useReducerCount = () => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const increment = () => {
      dispatch({type: 'increment'});
   };

   const decrement = () => {
      dispatch({type: 'decrement'});
   };

   const reset = () => {
      dispatch({type: 'reset'});
   };

   return (
      <div>
         <p>Лічильник {state.count}</p>
         <button onClick={increment}>Збільшити</button>
         <button onClick={decrement}>Зменшити</button>
         <button onClick={reset}>Скинути</button>
      </div>
   )
}
export default L404useReducerCount