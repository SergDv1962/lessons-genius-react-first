import axios from "axios";
import useInput from "../api/useInput";
import ModalWindow from "./ModalWindow";
import useDate from "../api/useDate";

const AddNewTodo = ({ setTasks, setIsAddBtn }) => {
  const { input: title, handleInputChange: handleTitleChange } = useInput();
  const { input: text, handleInputChange: handleTextChange } = useInput();
  const createdDate = useDate();

  async function handleAddNewTask() {
    const response = await axios.post("todos", {
      title: title,
      description: text,
      checked: "false",
      creationDate: createdDate,
    });
    setTasks((prev) => [...prev, response.data]);
    setIsAddBtn(false);
  }
  return (
    <div>
      <div>Додай нове завдання</div>
      <ModalWindow
        title={title}
        text={text}
        handleTitleChange={handleTitleChange}
        handleTextChange={handleTextChange}
        plhlTitle={'Введи назву завдання'}
        plhlText={'Зроби опис завдання'}
      />
      <div>
        <span>Дата створення</span>
        {createdDate}
      </div>
      <button onClick={handleAddNewTask}>Зберегти</button>
    </div>
  );
};

export default AddNewTodo;
