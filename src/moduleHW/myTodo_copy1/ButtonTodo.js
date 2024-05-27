export default function ButtonTodo(props) {
  return (
      <button type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
  );
}