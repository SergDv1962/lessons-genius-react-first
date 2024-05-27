import { useReducer } from "react";

const initialState = { name: 'Serhiy', age: 61};

function reducer (state, action) {
   switch (action.type) {
      case 'incremeted_age': {
         return {
            name: state.name,
            age: state.age + 1
         }
      }
      case 'decremeted_age': {
         return {
            name: state.name,
            age: state.age - 1
         }
      }
      case 'changed_name': {
         
         return {
            name: action.nextName,
            age: state.age
         }
      } 
   }
}

export default function Hw40useReducer () {

   const [state, dispatch] = useReducer(reducer, initialState);

   function handleButtonClickIncr() {
      dispatch ({
         type: 'incremeted_age',
      })
   }
   function handleButtonClickDecr() {
      dispatch ({
         type: 'decremeted_age',
      })
   }

   function handleChangeInput(e) {
      dispatch ({
         type: 'changed_name',
         nextName: e.target.value
      })
   }
   
   return (
      <>
         <p style={{color:"black", backgroundColor:"aqua"}}>
               Hello {state.name}! You age: {state.age}</p>
         <input 
            value={state.nextName}
            onChange={handleChangeInput}/>
         <button onClick={handleButtonClickIncr}>Incremented age</button>
         <button onClick={handleButtonClickDecr}>Decremented age</button>
      </>
   )
}