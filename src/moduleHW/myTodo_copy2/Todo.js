import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ListTodo from "./ListTodo";
import ButtonTodo from "./ButtonTodo";
import Checkbox from "./CheckboxTodo";

import "./Todo.css";

const Todo = () => {
  const initialValus = [
    { id: 1, task: "first" },
    { id: 2, task: "second" },
    { id: 3, task: "third" },
  ];
  const [value, setValue] = useState({
    todos: initialValus,
    input: "",
    checkbox: false,
  });

  useEffect(() => {
    const lsTodos = JSON.parse(localStorage.getItem("todos"));
    // console.log(lsTodos);

    if (lsTodos) {
      setValue((prevState) => ({ ...prevState, todos: lsTodos }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(value.todos));
  }, [value.todos]);

  function addTodo(e) {
    const value = e.target.value;
    setValue((prevState) => ({ ...prevState, input: value }));
  }

  function addTodoClick() {
    const newTodo = { id: uuidv4(), task: value.input };
    const updateTodos = [...value.todos, newTodo];
    setValue((prevState) => ({ ...prevState, todos: updateTodos }));
    setValue((prevState) => ({ ...prevState, input: "" }));
  }

  function onEnterAdd(e) {
    if (e.key === "Enter") {
      const newTodo = { id: uuidv4(), task: value.input };
      const updateTodos = [...value.todos, newTodo];
      setValue((prevState) => ({ ...prevState, todos: updateTodos }));
      setValue((prevState) => ({ ...prevState, input: "" }));
    }
  }

  function deleteTask(id) {
    const newTodos = value.todos.filter((el) => el.id !== id);
    setValue((prevState) => ({ ...prevState, todos: newTodos }));
  }

  function cleanLocalstorage() {
    localStorage.clear();
  }

  function handleCheckedCheckbox(e) {
    const checkbox = e.target.checked;
    console.log(typeof checkbox);
    setValue((prevState) => ({ ...prevState, checkbox }));
  }

  return (
    <div className="container">
      <div className="add-box">
        <input
          onKeyDown={onEnterAdd}
          onChange={addTodo}
          value={value.input}
          placeholder="new task"
        />
        <button onClick={addTodoClick}>Add To Do</button>
      </div>
      <button onClick={cleanLocalstorage}>Clean Local storage</button>
      <p>Загальна кількість задач: {value.todos.length}</p>
      <ul className="list">
        {value.todos.map((item) => (
          <ListTodo key={item.id} task={item.task}>
            <Checkbox
              type="checkbox"
              // checkbox={value.checkbox}
              onChange={handleCheckedCheckbox}
            />
            <ButtonTodo
              type="button"
              text="DELETE"
              onClick={() => deleteTask(item.id)}
            />
          </ListTodo>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
