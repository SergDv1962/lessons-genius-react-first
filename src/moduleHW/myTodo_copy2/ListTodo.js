import './Todo.css'


const ListTodo = (props) => {
  // console.log(props.children);
  return (
    <div className='item'>
      <div className='item-todo done'>
        {props.children[0]}
        <li>{props.task}</li>
      </div>
      <div>{props.children[1]}</div>
    </div>
  );
};
export default ListTodo;
