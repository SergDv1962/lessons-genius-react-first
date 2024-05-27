import { useReducer, useState} from "react";
import {v4 as uuidv4} from "uuid"

const Hw40useStateTwo = () => {
   const [person, setPerson] = useState([]);
   const [inputName, setInputName] = useState('');
   const [inputLastName, setInputLastName] = useState('');

   const onClickHandle = () => {
      let newPerson = {id: uuidv4(), name: inputName, lastName: inputLastName};
      let updatePersons = [...person, newPerson]
      setPerson(updatePersons);
      setInputName('');
      setInputLastName('');
      console.log('Click'); 
   }

   const onChangeHandle = (e) => {
      const value = e.target.value;
      setInputName(value)
   }
   const onChangeHandleLN = (e) => {
      const value = e.target.value;
      setInputLastName(value)
   }

   return(
      <>
         <p>List person</p>
         <input onChange={onChangeHandle} value={inputName}/>
         <input onChange={onChangeHandleLN} value={inputLastName}/>
         <button onClick={onClickHandle}>Add name</button>
         {person.map((el)=><li key={el.id}>{el.name} {el.lastName}</li>)}
      </>
   )
}

export default Hw40useStateTwo