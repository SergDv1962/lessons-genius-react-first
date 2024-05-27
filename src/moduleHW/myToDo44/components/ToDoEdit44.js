import axios from "axios";
import { useInput } from "../customComponents/useInput";
import ToDoWindowTask44 from "./ToDoWindowTask";
import { useEffect } from "react";
import { useFetch } from "../customComponents/useFetch";

axios.defaults.baseURL = "http://localhost:3030/";

const ToDoEdit44 = ({ setTasks, editTaskId, setIsEditBtnClick }) => {
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

  const { data: editTask } = useFetch(`todos/${editTaskId}`);

  useEffect(() => {
    setInputTitle(editTask.title);
    setInputText(editTask.description);
  }, [editTask]);

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

  async function saveTaskHandle() {
    const response = await axios.put(`todos/${editTaskId}`, payload);
    setTasks((prev) =>
      prev.map((el) => {
        if (el.id == editTaskId) {
          return response.data;
        }
        return el;
      })
    );
    setIsEditBtnClick(false);
  }

  return (
    <div>
      <ToDoWindowTask44
        title={title}
        text={text}
        onChangeTitle={onChangeTitle}
        onChangeText={onChangeText}
      />
      <button onClick={saveTaskHandle}>Save</button>
    </div>
  );
};
export default ToDoEdit44;
