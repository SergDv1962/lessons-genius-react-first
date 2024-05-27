import { useReducer } from "react";

const initialPerson = {
  name: "",
  draftName: "",
  lastName: "",
  draftLastName: "",
  birthYear: "",
  draftBirthYear: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        draftName: action.nextDraftName,
      };
    case "clickName":
      return {
        ...state,
        name: state.draftName,
        draftName: "",
      };
    case "changeLastName":
      return {
        ...state,
        draftLastName: action.nextDraftLastName,
      };
    case "clickLastName":
      return {
        ...state,
        lastName: state.draftLastName,
        draftLastName: "",
      };
    case "changeBirthYear":
      return {
        ...state,
        draftBirthYear: action.nextDraftBirthYear,
      };
    case "clickBirthYear":
      return {
        ...state,
        birthYear: state.draftBirthYear,
        draftBirthYear: "",
      };
  }
}

const HW404useReducer = () => {
  const [person, dispatch] = useReducer(reducer, initialPerson);

  function handleClickName() {
    console.log("clickName");
    dispatch({
      type: "clickName",
    });
  }
  function handleInputChangeName(e) {
    console.log("changeName");
    dispatch({
      type: "changeName",
      nextDraftName: e.target.value,
    });
  }
  function handleClickLastName() {
    dispatch({
      type: "clickLastName",
    });
  }
  function handleInputChangeLastName(e) {
    dispatch({
      type: "changeLastName",
      nextDraftLastName: e.target.value,
    });
  }
  function handleClickBirthYear() {
    dispatch({
      type: "clickBirthYear",
    });
  }
  function handleInputChangeBirthYear(e) {
    dispatch({
      type: "changeBirthYear",
      nextDraftBirthYear: e.target.value,
    });
  }
  console.log(person);

  return (
    <div>
      <div>
        <input onChange={handleInputChangeName} value={person.draftName} />
        <button onClick={handleClickName}>Name</button>
      </div>
      <div>
        <input
          onChange={handleInputChangeLastName}
          value={person.draftLastName}
        />
        <button onClick={handleClickLastName}>Last Name</button>
      </div>
      <div>
        <input
          onChange={handleInputChangeBirthYear}
          value={person.draftBirthYear}
        />
        <button onClick={handleClickBirthYear}>Birth year</button>
      </div>
      <div>
        <p>Name: {person.name}</p>
        <p>Last name: {person.lastName}</p>
        <p>Birth year: {person.birthYear}</p>
      </div>
    </div>
  );
};
export default HW404useReducer;