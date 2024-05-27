import { useEffect, useState } from "react";

import { useFetch } from "./customComponents/useFetch";

import ToDoList44 from "./components/ToDoList44";
import ToDoAdd44 from "./components/ToDoAdd44";

import "./ToDo44.css";

const ToDo44 = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddButton, setIsAddButton] = useState(false);
  const [isEditBtnClick, setIsEditBtnClick] = useState(false); //
  const [editTaskId, setEditTaskId] = useState(""); //
  const { data, isLoading, error } = useFetch("todos");

  useEffect(() => {
    setTasks(data);
  }, [data]);

  const addBtnHandle = () => {
    setIsAddButton(true);
  };

  function editBtnHandle(id) {
    //
    setIsEditBtnClick(true);
    setEditTaskId(id);
  }

  return (
    <div className="block-appTodo">
      <h2>ToDo44</h2>
      <p>
        {tasks.length !== 0
          ? `Усього завдань: ${tasks.length}`
          : "Наразі у Вас нема ще завдань"}
      </p>
      <div>
        {isAddButton ? (
          <ToDoAdd44
            tasks={tasks}
            setTasks={setTasks}
            setIsAddButton={setIsAddButton}
          />
        ) : isEditBtnClick ? null : (
          <button onClick={addBtnHandle}>Додати завдання</button>
        )}
      </div>
      <div>
        <ToDoList44
          tasks={tasks}
          setTasks={setTasks}
          isEditBtnClick={isEditBtnClick}
          setIsEditBtnClick={setIsEditBtnClick}
          editBtnHandle={editBtnHandle}
          editTaskId={editTaskId}
        />
      </div>
    </div>
  );
};
export default ToDo44;
