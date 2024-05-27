import axios from "axios";

import "./ToDoList44.css";

import ToDoEdit from "./ToDoEdit44";
import ToDoCheckbox44 from "./ToDoCheckbox44";

const ToDoList44 = ({
  tasks,
  setTasks,
  isEditBtnClick,
  setIsEditBtnClick,
  editBtnHandle,
  editTaskId,
}) => {

  async function deleteTaskHandle(id) {
    await axios.delete(`todos/${id}`);
    setTasks((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <div className="block-listTodo">
      {isEditBtnClick ? (
        <ToDoEdit
          setTasks={setTasks}
          editTaskId={editTaskId}
          setIsEditBtnClick={setIsEditBtnClick}
        />
      ) : (
        tasks.map((item) => (
          <div key={item.id} className="box-itemTask">
            <div>
              <ToDoCheckbox44 item={item} setTasks={setTasks} />
              <span>{item.title}</span>
            </div>
            <p>{item.description}</p>
            <p>{item.creationDate}</p>

            <button onClick={() => editBtnHandle(item.id)}>Edit</button>
            <button onClick={() => deleteTaskHandle(item.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};
export default ToDoList44;
