import { useReducer } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function reducer(tasks, action) {
   switch (action.type) {
      case 'add': {
         return [...tasks, {id: action.id, text: action.text, done: false}]
      };
      case 'edit': {
         return tasks.map((t)=>{
         if(t.id === action.task.id) {return action.task
         } else { return t; }
      })

      };
      case 'delete': {
         return tasks.filter((t)=>t.id !== action.id)
      };
      default :
         throw Error ('Unknown action: ' + action.type);
   }
}

export default function TasksToDo () {

   const [tasks, dispatch] = useReducer(reducer, initialTask);

   function handleAddTask(text) {
      dispatch({
         type: "add",
         id: nextId++,
         text: text
      })
   }
   function handleEditTask(task) {
      dispatch({
         type: "edit",
         task: task
      })
   }
   function handleDeleteTask(taskId) {
      dispatch({
         type: "delete",
         id:taskId
      })
   }

   return (
      <>
         <h3>To Do List</h3>
         <AddTask onClickAdd={handleAddTask}/>
         <br/>
         <TaskList
            tasks={tasks} 
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}/>
      </>
   )
}

let nextId = 3;
const initialTask = [
   {id: 0, text: 'First task', done: true},
   {id: 1, text: 'Second task', done: false},
   {id: 2, text: 'Third task', done: false},
]