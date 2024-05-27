const CustomSelect = ({
  select,
  setSelect,
  item,
  setItem,
  activeItems,
  doneItems,
  tasks,
  setTasks,
}) => {
  const selectItem = [
    { id: 1, option: "Активний" },
    { id: 2, option: "Завершенний" },
    { id: 3, option: "Всі" },
  ];
  
  const handleSelected = (e) => {
      console.log(e.target.value);
      const select = e.target.value;
      setSelect((prevState)=>({...prevState, select}))
      console.log(select);
       if (select === "Активний") {
         tasks = activeItems;
         console.log(tasks);
      }else if (select === "Завершенний") {
         tasks = doneItems;
         console.log(tasks);
      }else{tasks = item; console.log(tasks);
      }
    setTasks(tasks) 
      
  };

  const handleClickTasks = () => {
   setTasks(tasks) 
  };

  return (
    <div>
      <label htmlFor="select">Обери: </label>
      <select
        onClick={handleClickTasks}
        onChange={handleSelected}
        name="select"
        id="select"
      >
        {selectItem.map((i) => (
          <option key={i.id}>{i.option}</option>
        ))}
      </select>
    </div>
  );
};
export default CustomSelect;
