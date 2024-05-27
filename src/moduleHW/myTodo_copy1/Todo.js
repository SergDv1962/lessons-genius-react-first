import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ListTodo from "./ListTodo";
import ButtonTodo from "./ButtonTodo";

const Todo = () => {
  const initialValus = [
     { id: 1, task: "first" },
     { id: 2, task: "second" },
     { id: 3, task: "third" },
  ];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialValus);

  useEffect(() => {
    const lsTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(lsTodos);
    
    if (lsTodos) {
      setTodos(lsTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    const value = e.target.value;
    setInput(value);
  }

  function addTodoClick() {
    const newTodo = { id: uuidv4(), task: input };
    const updateTodos = [...todos, newTodo];
    setTodos(updateTodos);
    setInput("");
  }

  function onEnterAdd(e) {
    if (e.key === "Enter") {
      const newTodo = { id: uuidv4(), task: input };
      const updateTodos = [...todos, newTodo];
      setTodos(updateTodos);
      setInput("");
    }
  }

  function deleteTask(id) {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  }

  function cleanLocalstorage () {
    localStorage.clear()
  }

  return (
    <>
      <input
        onKeyDown={onEnterAdd}
        onChange={addTodo}
        value={input}
        placeholder="new task"
      />
      <button onClick={addTodoClick}>Add To Do</button>
      <button onClick={cleanLocalstorage}>Clean Local storage</button>
      <p>Загальна кількість задач: {todos.length}</p>
      <ul>
        {todos.map((item) => (
          <ListTodo key={item.id} task={item.task}>
            <ButtonTodo
              type="button"
              text="DELETE"
              onClick={() => deleteTask(item.id)}
            />
          </ListTodo>
        ))}
      </ul>
    </>
  );
};
export default Todo;
