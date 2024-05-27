import axios from "axios";
import Checkbox from "./Checkbox";
import "./listTodo.css";
import { useEffect, useState } from "react";

const ListTodo = ({ tasks, setTasks, editBtnHandle, setIsEditBtnClick}) => {
  // 
  let editTaskId = '';

  async function deleteHandle(id) {
    await axios.delete(`todos/${id}`);
    setTasks(prev => prev.filter(el => el.id !== id));
  }
 
  useEffect(()=>{
    console.log(editTaskId);
  },[tasks])
  
  
  return (
    <div className="list-block">
      {tasks.map((item) => (
        <div key={item.id} className="box-item">
          <div>
            <Checkbox item={item} setTasks={setTasks} />
            <span>Task:</span> {item.title}
          </div>
          <div>
            <span>Description:</span> {item.description}
          </div>
          <div>
            <span>Creation Date:</span> {item.creationDate}
          </div>
          <div>
            <button onClick={() => editBtnHandle(item.id)}>Змінити</button>
            <button onClick={() => deleteHandle(item.id)}>Видалити</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
