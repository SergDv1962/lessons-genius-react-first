import { useState } from "react";
import axios from "axios";
import { useInput } from "../customComponents/useInput";
import "./ToDoAdd44.css";
import ToDoWindowTask44 from "./ToDoWindowTask";

axios.defaults.baseURL = "http://localhost:3030/";

const ToDoAdd44 = ({ tasks, setTasks, setIsAddButton }) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const {
    input: title,
    setInput: setInputTitle,
    handleChangeInput: onChangeTitle,
  } = useInput();
  const {
    input: text,
    setInput: setInputText,
    handleChangeInput: onChangeText,
  } = useInput();
  const d = new Date();
  const dateShow = `${d.getFullYear()}/${
    d.getMonth() + 1
  }/${d.getDay()} - ${d.getHours()}:${d.getMinutes()}`;
  const payload = {
    title: title,
    description: text,
    checked: "false",
    creationDate: dateShow,
  };

  async function handleAddNewTask() {
    setIsPostLoading(true);
    const response = await axios.post("todos", payload);
    setTasks((prev) => [...prev, response.data]);
    setInputTitle("");
    setInputText("");
    setIsPostLoading(false);
    setIsAddButton(false);
  }

  function handleResetAction() {
    setIsAddButton(false);
  }

  return (
    <div className="block-add">
      <ToDoWindowTask44
        title={title}
        text={text}
        onChangeTitle={onChangeTitle}
        onChangeText={onChangeText}
        placeholderTitle={"Введіть назву завдання"}
        placeholderText={"Введіть опис завдання"}
      />
      <button disabled={isPostLoading} onClick={handleAddNewTask}>
        {isPostLoading ? "Loading add task..." : "Додати"}
      </button>
      <button onClick={handleResetAction}>Повернутись</button>
    </div>
  );
};
export default ToDoAdd44;
