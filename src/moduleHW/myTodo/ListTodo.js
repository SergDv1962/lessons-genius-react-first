import './Todo.css'


const ListTodo = (props) => {
  // console.log(props.children);
  return (
    <div className='item'>
      <div className={`item-todo ${props.item.done ? 'done' : '' } `}>
        {props.children[0]}
        <li>{props.item.task} {props.item.done.toString()}</li>
      </div>
      <div>{props.children[1]}</div>
    </div>
  );
};
export default ListTodo;
