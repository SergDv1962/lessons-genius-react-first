import Checkbox from "./Checkbox";

import './itemTodo.css'

const ItemTodo = ({setTasks, item}) => {
   return ( 
      <div className="boxItemTodo">
         <div><Checkbox setTasks={setTasks} item={item}/><span>Назва:</span>{item.title}</div>
         <div><span>Опис:</span>{item.description}</div>
         <div><span>Дата створення:</span>{item.creationDate}</div>
      </div>
    );
}
 
export default ItemTodo;