const ToDoItemL371 = (props) => {
   return (
      <>
         <li>
            <input type="checkbox"/>
            {props.name}
         </li>
         {props.children}
      </>
   )
}
export default ToDoItemL371