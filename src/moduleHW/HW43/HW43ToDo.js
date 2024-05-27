import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import "./HW43ToDo.css";

import ToDoItemHW43 from "./ToDoItemHW43";
import ButtonHW43 from "./ButtonHW43";
import CustomSelect from "./CustomSelect";

const HW43ToDo = () => {
  const initialValues = [
    { id: 1, name: "Jon", done: false },
    { id: 2, name: "Mary", done: false },
    { id: 3, name: "Tom", done: false },
  ];
  const [input, setInput] = useState("");
  const [item, setItem] = useState(initialValues);
  const [tasks, setTasks] = useState(item);
  const [select, setSelect] = useState("Активний");

  let num = uuidv4();
  const newItem = { id: num, name: input, done: false };

  useEffect(()=>{setTasks(item)},[item])

  const onClickHandler = () => {
    const updatedElement = [...item, newItem];
    setItem(updatedElement);
    setInput("");
  };
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const onEnterClick = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...item, newItem];
      setItem(updatedElement);
      setInput("");
    }
  };
  const onHandleDelete = (id) => {
    console.log("delete");
    const filtedItem = item.filter((item) => item.id !== id);
    setItem(filtedItem);
    console.log(filtedItem);
  };

  let activeItems = item.filter((el) => el.done !== true);
  console.log(activeItems);
  let doneItems = item.filter((el) => el.done !== false);
  console.log(doneItems);

  return (
    <div className="container">
      <div className="box-add">
        <input
          placeholder="Add your new TO DO"
          onKeyDown={onEnterClick}
          onChange={onChangeHandler}
          value={input}
        />
        <button className="button-add" onClick={() => onClickHandler(input)}>
          Add TO DO
        </button>
      </div>
      <span>Кількість: {item.length}</span>
      <CustomSelect
        select={select}
        setSelect={setSelect}
        item={item}
        setItem={setItem}
        activeItems={activeItems}
        doneItems={doneItems}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ul className="list">
        {tasks.map((element) => (
          <ToDoItemHW43
            key={element.id}
            name={element.name}
            id={element.id}
            done={element.done}
            select={select}
            setSelect={setSelect}
            item={item}
          >
            {
              <ButtonHW43
                type="button"
                text="delete"
                onClick={() => onHandleDelete(element.id)}
              />
            }
          </ToDoItemHW43>
        ))}
      </ul>
    </div>
  );
};
export default HW43ToDo;
