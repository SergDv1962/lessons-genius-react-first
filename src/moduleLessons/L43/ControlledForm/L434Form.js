import { useState } from "react";
import InputData from './InputData';
import Checkbox from './Checkbox';
import Textinput from './Textinput';
import RadioButtons from "./RadioButtons";
import CustomSelect from './CustomSelect';

const L434Form = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: 'radio1',
    select: 'option 1',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Textinput value={value} setValue={setValue}/>
        <Checkbox value={value} setValue={setValue}/>
        <RadioButtons value={value} setValue={setValue}/>
        <CustomSelect value={value} setValue={setValue}/>
        <div style={{ padding: "10px" }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <InputData value={value}/>
    </>
  );
};
export default L434Form;
