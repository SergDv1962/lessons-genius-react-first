import { useState } from "react";
import "./HW43ToDo";
import { forEach } from "lodash";

const ToDoItemHW43 = (props) => {
  const [checked, setChecked] = useState(false);
    let flag = false;
  const handleCheckedChange = (e) => {
    flag = e.target.checked;
    
    props.item.forEach((item) => {
      if (item.id === props.id) {
        return (item.done = flag);
      }
    });
    console.log(props.item);
    setChecked((prevState)=>({...prevState,flag}));
  };
  console.log(checked);
  
  return (
    <>
      <div className="item-box">
        <li className="item">
          <input onChange={handleCheckedChange} type="checkbox" />
          <span className={`${checked && "lineThough"}`}>{props.name} {props.done.toString()}</span>
        </li>
      </div>
      <span>{props.children}</span>
    </>
  );
};
export default ToDoItemHW43;
