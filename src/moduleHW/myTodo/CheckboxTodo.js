
const Checkbox = (props) => {
  
  function handleCheckedCheckbox(e) {
    const checkbox = e.target.checked;
    console.log(checkbox);
    props.setValue((prevState) => ({ ...prevState, checkbox }));
    props.value.todos.map((el) => {
      if (el.id === props.item.id) {
        el.done = checkbox
      }
    })
  }
  
  return (
    <>
      <input
        type={props.type}
        onChange={handleCheckedCheckbox}
      />
    </>
  );
};
export default Checkbox;
