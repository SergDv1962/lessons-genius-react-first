const ListTodo = (props) => {
  return (
    <>
      <li>{props.task}</li>
      {props.children}
    </>
  );
};
export default ListTodo;
