import './Todo.css'

export default function ButtonTodo(props) {
  return (
      <button type={props.type} onClick={props.onClick} className='button'>
        {props.text}
      </button>
  );
}