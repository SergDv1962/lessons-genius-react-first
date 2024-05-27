import { useEffect, useState } from "react";
import useFetch from "./api/useFetch";
import ListTodo from "./components/ListTodo";

import "./todoApp.css";
import AddNewTodo from "./components/AddNewTodo";
import EditTodo from "./components/EditTodo";

const TodoApp2 = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddBtn, setIsAddBtn] = useState(false);
  const [isQuantityTasks, setIsQuantityTasks] = useState(false);
  const [isEditBtn, setIsEditBtn] = useState(false);
  const [editTaskId, setEditTaskId] = useState('');
  const { data, isloading, error } = useFetch("todos");

  useEffect(() => {
    setTasks(data);
    setIsQuantityTasks(() => {
      if (data.length === 0) {
        return true;
      } else {
        return false;
      }
    });
  }, [data]);

  function handleAddBtn() {
    setIsAddBtn(true);
  }

  return (
    <div className="container">
      <h2 className="title">My Time Manager</h2>
      {isEditBtn ? (
        <div><EditTodo setTasks={setTasks} editTaskId={editTaskId} setIsEditBtn={setIsEditBtn}/></div>
      ) : isAddBtn ? (
        <AddNewTodo setTasks={setTasks} setIsAddBtn={setIsAddBtn} />
      ) : isloading ? (
        <p>Loading...</p>
      ) : (
        <div className="mainBox">
          {isQuantityTasks ? (
            <p>Наразі у Вас нема завдань</p>
          ) : (
            <div className="general-text">
              Загальна кількість завдань: <b>{tasks.length}</b>
            </div>
          )}
          <button onClick={handleAddBtn} className="addBtn">
            Додати нове завдання
          </button>
          <ListTodo
            tasks={tasks}
            setTasks={setTasks}
            setIsEditBtn={setIsEditBtn}
            setEditTaskId={setEditTaskId}
          />
        </div>
      )}
    </div>
  );
};

export default TodoApp2;
