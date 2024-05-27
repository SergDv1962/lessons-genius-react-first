import { useReducer } from "react";

function reducer(state, action) {
   switch (action.type) {
      case 'incremented_age': {
         return {
            name: state.name,
            age: state.age + 1
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

const initialState = {name: 'Taylor', age: 42}

export default function UseReducerFirstExample() {

   const [state, dispatch] = useReducer(reducer, initialState)

   function handleButtonClick () {
      dispatch ({
         type: 'incremented_age',
      })
   }

   function handleInputChange (e) {
      dispatch ({
         type: 'changed_name',
         nextName: e.target.value
      }); 
   }

   return (
      <>
         <input
            value={state.nextName} 
            onChange={handleInputChange}/>
         <button onClick={handleButtonClick}>Age incresment</button>
         <p>Hello, {state.name}! You are {state.age}</p>
      </>
   )
}