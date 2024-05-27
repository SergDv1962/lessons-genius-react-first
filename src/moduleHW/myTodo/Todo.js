import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "lodash";

import ListTodo from "./ListTodo";
import ButtonTodo from "./ButtonTodo";
import Checkbox from "./CheckboxTodo";
import SelectTodo from "./SelectTodo";

import "./Todo.css";

const Todo = () => {
  const initialValus = [
    { id: 1, task: "first", done: false },
    { id: 2, task: "second", done: false },
    { id: 3, task: "third", done: false },
  ];
  const [value, setValue] = useState({
    todos: initialValus,
    input: "",
    emptyInput: "", // перевірка на пустий инпут
    errorInput: "Завдання не може бути пустим полем",
    validInput: false,
    checkbox: false,
    select: "Всі",
    tasks: [],
    search: '',
  });

  useEffect(() => {
    if (value.errorInput) {
      setValue((prevState) => ({...prevState, validInput: false}))
    } else {
      setValue((prevState) => ({...prevState, validInput: true}))
    }
  }, [value.errorInput])

  useEffect(() => {
    const lsTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(lsTodos);

    if (lsTodos) {
      setValue((prevState) => ({ ...prevState, todos: lsTodos }));
    }
  }, []);
console.log(value.validInput);

  useEffect(() => {
    setValue((prevState) => ({ ...prevState, tasks: value.todos }));
    localStorage.setItem("todos", JSON.stringify(value.todos));
  }, [value.todos]);

  function addTodo(e) {
    const value = e.target.value;
    setValue((prevState) => ({ ...prevState, input: value }));
    if (value.length < 3 || value.length > 10) {
      setValue((prevState) => ({...prevState, errorInput: 'Todo повинно бути більше 3 і менше 10 символів'}))
      if (!value) {
        setValue((prevState) => ({...prevState, errorInput: 'Todo не може бути пустим'}))
      }
    } else {
      setValue((prevState) => ({...prevState, errorInput: ''}));
    }
  }

  function addTodoClick() {
    const newTodo = { id: uuidv4(), task: value.input, done: false };
    const updateTodos = [...value.todos, newTodo];
    setValue((prevState) => ({ ...prevState, todos: updateTodos }));
    setValue((prevState) => ({ ...prevState, input: "" }));
    setValue((prevState) => ({...prevState, validInput: false}));
  }

  function onEnterAdd(e) {
    if (e.key === "Enter") {
      const newTodo = { id: uuidv4(), task: value.input, done: false };
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

  function blurHandler(e) {
    switch (e.target.name) {
      case "textTodo":
        setValue((prevState) => ({...prevState, emptyInput: true}))
        break;
    }
  }

  const handleChangeSearch = debounce((e) => {
    const value = e.target.value;
    setValue((prevState) => ({...prevState, search: value}))
  }, 2000)
  
  const filtredTodo = value.todos.filter(todo => {
    return todo.task.toLowerCase().includes(value.search.toLowerCase())
  });
    
  console.log(filtredTodo);
  
  return (
    <div className="container">
      {value.emptyInput && value.errorInput && (
        <div className="error">{value.errorInput}</div>
      )}
      <div className="add-box">
        <input
          onKeyDown={onEnterAdd}
          onBlur={e=>blurHandler(e)}
          onChange={e => addTodo(e)}
          value={value.input}
          placeholder="new task"
          name="textTodo"
        />
        <button disabled={!value.validInput} onClick={addTodoClick}>Add To Do</button>
      </div>
      <button className="btn-localStorage" onClick={cleanLocalstorage}>Clean Local storage</button>
      <div className="list">
        <div className="search-box">
          <lable className="search-lable" htmlFor='search'>Пошук</lable>
          <input onChange={handleChangeSearch} id="search"/>
        </div>
        {value.search && (filtredTodo.map((item) => (
          <ListTodo key={item.id} item={item}>
            <Checkbox
              type="checkbox"
              item={item}
              setValue={setValue}
              value={value}
            />
            <ButtonTodo
              type="button"
              text="DELETE"
              onClick={() => deleteTask(item.id)}
            />
          </ListTodo>
        )))}
      </div>
      <p>Загальна кількість задач: {value.todos.length}</p>
      <SelectTodo value={value} setValue={setValue} />
      <ul className="list">
        {value.tasks.map((item) => (
          <ListTodo key={item.id} item={item}>
            <Checkbox
              type="checkbox"
              item={item}
              setValue={setValue}
              value={value}
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
