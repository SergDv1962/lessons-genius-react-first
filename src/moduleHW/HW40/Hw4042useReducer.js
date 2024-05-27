import { useReducer, useState } from "react";

const initialUser = {
  name: "",
  draftName: "",
  lastName: "",
  draftLastName: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, draftName: action.value1 };
    case "clickName":
      return { ...state, name: state.draftName, draftName: "" };
    case "changeLastName":
      return { ...state, draftLastName: action.value2 };
    case "clickLastName":
      return { ...state, lastName: state.draftLastName, draftLastName: "" };
    case "reset":
      return initialUser;
  }
}

const Hw4042useReducer = () => {
   const [people, setPeople]  = useState([]);
  const [user, dispatch] = useReducer(reducer, initialUser);
  console.log(user);
  
  function handleAddPerson () {
    let person = {name:user.name, lastName:user.lastName};
    setPeople([...people, person]);
  }
  console.log(people);
  return (
    <div>
      <div>
        <input
          value={user.draftName}
          onChange={(e) =>
            dispatch({ type: "changeName", value1: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "clickName" })}>
          Add name
        </button>
      </div>
      <div>
        <input
          value={user.draftLastName}
          onChange={(e) =>
            dispatch({ type: "changeLastName", value2: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "clickLastName" })}>
          Add last name
        </button>
      </div>
      <div>
        <p>Name: {user.name}</p>
        <p>Last name: {user.lastName}</p>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={handleAddPerson}>Submit</button>
      
      {people.map((el, index)=><p key={index}>{el.name} {el.lastName}</p>)}
      
    </div>
  );
};
export default Hw4042useReducer;
