import { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "./useFetch";

const HW4421_Post = () => {
  const [tasks, setTasks] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { data, isLoading, error } = useFetch("todos");

  useEffect(() => {
    setTasks(data);
  }, [data]);

  async function addHandle() {
    setIsPostLoading(true);
    const payload = {
      title: "todo-payload",
      description: "description for add - task",
      creationDate: "date now add",
      checked: "false",
    };
    const response = await axios.post("todos", payload);
    setTasks((prev) => [...prev, response.data]);
    setIsPostLoading(false);
  };

  async function deleteHandle(id) {
   await axios.delete(`todos/${id}`);
   setTasks(prev => prev.filter(el => el.id !== id))
  }

  async function editHandle (id) {
   const payload = {
      title: "todo-edit",
      description: "description for edit - task",
      creationDate: "date now edit",
      checked: "false",
    };
   const response = await axios.put(`todos/${id}`, payload);
   setTasks(prev => prev.map(el => {
      if (el.id == id) {
         return response.data;
      }
      return el;
   }))
  }

  return (
    <div>
      <h2>HW4421_Post</h2>
      <button disabled={isPostLoading} onClick={addHandle}>
        {isPostLoading ? 'loading...' : 'Add'}
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={() => editHandle(item.id)}>Edit</button>
            <button onClick={()=>deleteHandle(item.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};
export default HW4421_Post;
