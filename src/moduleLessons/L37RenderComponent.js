
const L37RenderComponent = () => { 
   return (
      <>
         {/* <ConditionIf/> */}
         <RenderCollection/>
      </>
   )
}
// приклади
// --- ConditionIf -- умова if заміщується oператорами &&.
/*
// для булевих значень
const ConditionIf = () => {
   const firstCondition = false;
   const secondCondition = true;
   return <>
    {firstCondition && <p>"I'm fist condition"</p>}
    {secondCondition && <p>"I'm second condition"</p>}
   </>
}
*/
/*
// для строк
const ConditionIf = () => {
   const firstCondition = '';
   const secondCondition = 'Пуста строка повертає "false",а заповнена "true"';
   return <>
    {firstCondition && <p>"I'm fist condition"</p>}
    {secondCondition && <p>"I'm second condition"</p>}
   </>
}
*/
// для масивів
/*
const ConditionIf = () => {
   const firstCondition = []; //--------пустий масив повертає true
   const secondCondition = [1,2,3];
   return <>
    {firstCondition && <p>"I'm fist condition"</p>}
    {secondCondition && <p>"I'm second condition"</p>}
   </>
}
*/
// -------- щоб видстежувати пустий масив (котрий може приходити з бекенду)
/*
const ConditionIf = () => {
   const firstCondition = []; // є можливість використовувати властивость length
   const secondCondition = [1,2,3];
   return <>
      {!!firstCondition.length && <p>"I'm fist condition"</p>}
      {!!secondCondition.length && <p>"I'm second condition"</p>}
   </>
}
*/
/*
const ConditionIf = () => {
   const firstCondition = []; // є можливість використовувати length з тернарним оператором
   const secondCondition = [1,2,3];
   // null, false, undefind не рендеряться
   return <>
      {firstCondition.length ? <p>"I'm fist condition"</p>: null}
      {secondCondition.length ? <p>"I'm second condition"</p>: null}
   </>
}
*/

// ------------------ умова - if...else - заміщується тернарним оператром
/*
const ConditionIf = () => {
   const firstCondition = false; // true 
   return <>
      {firstCondition ? "I'm fist condition" : "I'm second condition"}
   </>
}
*/

// ------------------ умова - if
/*
const ConditionIf = () => {
   const firstCondition = false; 
   const secondCondition = false;
   if (firstCondition) {
      return <p>One</p>
   }
   if (secondCondition) {
      return <p>Two</p>
   }
   return <>
      <p>Three</p>
   </>
}
*/

// Рендерінг колекції

const RenderCollection = () => {
   const todos = [
      {id: 1, todo: 'firsttodo'},
      {id: 2, todo: 'secondtodo'},
      {id: 3, todo: 'thirdtodo'},
      {id: 4, todo: 'fourthtodo'}
   ]
   return (
      <div>
         {todos.map((todo) => {
            console.log(todo);
            return <TodosList key={todo.id} todo ={todo.todo}/>}
         )}
      </div>
   ) 
}

const TodosList = (props) => {
   return <>
      <div>{props.todo}</div>
   </>
}


export default L37RenderComponent