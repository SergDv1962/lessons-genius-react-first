
import axios from "axios";
import ItemTodo from "./ItemTodo";
import './listTodo.css'

const ListTodo = ({ tasks, setTasks, setIsEditBtn, setEditTaskId }) => {
  

  async function deleteHandle (id) {
    await axios.delete(`todos/${id}`);
    setTasks(prev => prev.filter(el => el.id !== id));
  }
  
  
  function editTaskHandle (id) {
    setEditTaskId(id)
    setIsEditBtn(true);
  }

  return (
    <div className="boxListTasks">
      {tasks.map((item) => (
        <div key={item.id} className="boxItemTasks">
          <ItemTodo setTasks={setTasks} item={item}/>
          <button onClick={() => editTaskHandle(item.id)}>Змінити</button>
          <button onClick={() => deleteHandle(item.id)}>Видалити</button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
