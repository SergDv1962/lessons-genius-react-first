const SelectTodo = ({value, setValue}) => {
  const selectOption = [
    { id: 1, text: "Всі" },
    { id: 2, text: "Виконані" },
    { id: 3, text: "В роботі" },
  ];

  function handleSelectTasks(e) {
      let select = e.target.value;
      let newTasks = {};
      setValue((prevState) => ({...prevState, select:select}));
   
      if (select === "Виконані") {
         newTasks = value.todos.filter((todo) => todo.done === true);
         return setValue((prevState) => ({...prevState, tasks: newTasks}));
      }
      if (select === "В роботі") {
         newTasks = value.todos.filter((todo) => todo.done === false);
         return setValue((prevState) => ({...prevState, tasks: newTasks}));
      } else { return setValue((prevState) => ({...prevState, tasks: value.todos}));}

      // let newTasks = () => {
      // switch (value.select) {
      //    case "Виконані":
      //       return value.todos.filter((todo) => todo.done === true);
      //    case "В роботі":
      //       return value.todos.filter((todo) => todo.done === false);
      //    default: return value.todos
      // }}
  }
  return (
    <div>
      <select onChange={handleSelectTasks} >
        {selectOption.map((option) => (
          <option key={option.id}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectTodo;
