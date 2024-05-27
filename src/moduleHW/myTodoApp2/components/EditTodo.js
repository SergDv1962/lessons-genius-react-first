import axios from "axios";
import useFetch from "../api/useFetch";
import useInput from "../api/useInput";
import useDate from "../api/useDate";
import ModalWindow from "./ModalWindow";
import { useEffect } from "react";

const EditTodo = ({ setTasks, editTaskId, setIsEditBtn }) => {
  const { input: title, setInput: setTitle, handleInputChange: handleTitleChange } = useInput();
  const { input: text, setInput: setText, handleInputChange: handleTextChange } = useInput();
  const createdDate = useDate();

  const { data: editTask } = useFetch(`todos/${editTaskId}`);

  useEffect(()=>{
   setTitle(editTask.title);
   setText(editTask.description);
  },[editTask])

  console.log(editTaskId);
  async function handleEditSaveTask() {
    const response = await axios.put(`todos/${editTaskId}`, {
      title: title,
      description: text,
      checked: "false",
      creationDate: createdDate,
    });
    setTasks((prev) =>
      prev.map((el) => {
        if (el.id === editTaskId) {
          return response.data;
        }
        return el;
      })
    );
    setIsEditBtn(false);
  }

  return (
    <div>
      <h3>Внесить зміни у завдання</h3>
      <ModalWindow
        title={title}
        text={text}
         handleTitleChange={handleTitleChange}
         handleTextChange={handleTextChange}
      />
      <button onClick={handleEditSaveTask}>Зберегти</button>
    </div>
  );
};

export default EditTodo;
