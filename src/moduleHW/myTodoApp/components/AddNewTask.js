import "./addNewTask.css";
import useInput from "../utils/useInput";
import axios from "axios";
import ModalWindow from "./ModalWindow ";
import useDate from "../utils/useDate";

const AddNewTask = ({ setTasks, setIsAddTaskBtn }) => {
  const {
    txt: title,
    setTxt: setTitle,
    handleTxtInput: handleTitleInput,
  } = useInput();
  
  const {
    txt: text,
    setTxt: setText,
    handleTxtInput: handleTextInput,
  } = useInput();

  const payload = {
    title: title,
    description: text,
    checked: "false",
    creationDate: useDate(),
  };

  async function handleAddTask() {
    const response = await axios.post("todos", payload);
    setTasks((prev) => [...prev, response.data]);
    setTitle('');
    setText('');
    setIsAddTaskBtn(false);
  }

  function handleReturn() {
    setIsAddTaskBtn(false);
  }
  return (
    <div className="addNewTask-box">
      <ModalWindow
        title={title}
        handleTitleInput={handleTitleInput}
        text={text}
        handleTextInput={handleTextInput}
      />
      <button onClick={handleAddTask}>Зберегти</button>
      <button onClick={handleReturn}>Повернутись</button>
    </div>
  );
};

export default AddNewTask;
