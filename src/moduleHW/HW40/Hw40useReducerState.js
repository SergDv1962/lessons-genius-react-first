import { useReducer, useState } from "react";
// import {v4 as uuidv4} from 'uuid';

const Hw40useReducerState = () => {
   const [inputName, setInputName] = useState('')
   const [inputLastName, setInputLastName] = useState('')
   const [inputBirthDay, setInputBirthDay] = useState('')
   
   const [personList, setPersonList] = useState([]);

   const reducer = (state, action) => {
      if(action.type === "addName") {
         return {name: inputName, lastName: inputLastName, birthDay: inputBirthDay}
      }
      if(action.type === "addLastName") {
         return {name: inputName, lastName: inputLastName, birthDay: inputBirthDay}
      }
      if(action.type === "addBirthDay") {
         return {name: inputName, lastName: inputLastName,  birthDay: inputBirthDay}
      }
   };
   const initialState = {name: '', lastName: '', birthDay: ''}
   const [value, dispatch] = useReducer(reducer, initialState);

   const handleClick = (type) => {
      dispatch(type)
   }
   const onChangeName = (e) => {
      let value = e.target.value;
      setInputName(value)
   }
   const onChangeLastName = (ev) => {
      let value = ev.target.value;
      setInputLastName(value)
   }
   const onChangeBirthDay = (event) => {
      let value = event.target.value;
      setInputBirthDay(value)
   }
   const handleClickPerson = () => {
      let personListUpdate = [...personList, value]
      setPersonList(personListUpdate)
      console.log(personListUpdate);
      setInputName('');
      setInputLastName('');
      setInputBirthDay('')
   }
   return (
      <>
         <p>{value.count} {value.name} {value.lastName} {value.birthDay}</p>
         <input onChange={onChangeName} value={inputName}/>
         <button onClick={()=>handleClick({type: "addName"})}>Add Name</button>
         <input onChange={onChangeLastName} value={inputLastName}/>
         <button onClick={()=>handleClick({type: "addLastName"})}>Add lastName</button>
         <input onChange={onChangeBirthDay} value={inputBirthDay}/>
         <button onClick={()=>handleClick({type: "addBirthDay"})}>Add birthDay</button>
         <br/>
         <button onClick={handleClickPerson}>Add person in personList</button>
         {personList.map((el, index)=><p key={index}>{el.name} {el.lastName} {el.birthDay}</p>)}
      </>
   )
}

export default Hw40useReducerState