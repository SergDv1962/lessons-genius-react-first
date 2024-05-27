import { useState } from "react";

export default function TaskList ({tasks, onEditTask, onDeleteTask}) {
   console.log(tasks);
   
   return (
      <>
         TaskList
         <ul>
            {tasks.map((task)=>
               <li key={task.id}>
                  <Task 
                     task={task} 
                     onEditTask={onEditTask} 
                     onDeleteTask={onDeleteTask}/>
               </li>
            )}
         </ul>
      </>
   )
}

function Task({task, onEditTask, onDeleteTask}) {
   const [isEditing, setIsEditing] = useState(false);
   let taskContent;
   if(isEditing){
      taskContent = (
         <>
            <input
               value={task.text}
               onChange={(e)=>onEditTask({...task, text:e.target.value})}/>
            <button
               onClick={()=>setIsEditing(false)}>Save
            </button>
         </>
      )
   }else{
      taskContent = (
         <>
            {task.text}
            <button
               onClick={()=>setIsEditing(true)}>Edit
            </button>
         </>
      )
   }
   return(
      <>
         <input 
            type="checkbox"
            checked={task.done}
            onChange={(e)=>{onEditTask({...task, done:e.target.checked})}}/>
         {taskContent}
         <button
            onClick={()=>onDeleteTask(task.id)}>
            Delete</button>
      </>
   )
}