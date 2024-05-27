import { useEffect, useState } from "react";
import { useFetch } from "./utils/useFetch";
import ListTodo from "./components/ListTodo";

import "./mytodoApp.css";
import AddNewTask from "./components/AddNewTask";
import EditTask from "./components/EditTask";

const MytodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddTaskBtn, setIsAddTaskBtn] = useState(false);
  const [isEditBtnClick, setIsEditBtnClick] = useState(false);
  const [editTaskId, setEditTaskId] = useState('');
  const { data, isLoading, error } = useFetch("todos");

  useEffect(() => {
    setTasks(data);
  }, [data]);

  function addTaskBtn() {
    setIsAddTaskBtn(true);
  }

  function editBtnHandle(id) {
    setIsEditBtnClick(true);
    setEditTaskId(id)
  }

  return (
    <div className="main-block">
      <h2 className="title">My Timemanager</h2>
      {isEditBtnClick ? (
        <div>
          <EditTask setTasks={setTasks} editTaskId={editTaskId} setIsEditBtnClick={setIsEditBtnClick} />
        </div>
      ) : isAddTaskBtn ? (
        <div className="box-adding">
          <h3>Нове завдання</h3>
          <AddNewTask setTasks={setTasks} setIsAddTaskBtn={setIsAddTaskBtn} />
        </div>
      ) : (
        <div className="box-tasks">
          <p>Усього завдань: {tasks.length}</p>
          <ListTodo
            tasks={tasks}
            setTasks={setTasks}
            editBtnHandle={editBtnHandle}
            setIsEditBtnClick={setIsEditBtnClick}
          />
          <button onClick={addTaskBtn}>Додати завдання</button>
        </div>
      )}
    </div>
  );
};

export default MytodoApp;
