import { Component } from "react";
import {v4 as uuidv4} from "uuid"

import L38ToDoItemClass from "./L38ToDoItemClass"
import ButtonComponent from "../ButtonComponent"

class L38ToDoClassHW extends Component{
   state = {
      todos: [
         {id: 1, name: 'Bob'},
         {id: 2, name: 'Tom'},
         {id: 3, name: 'Ann'}],
      input: "",
   };

   componentDidMount(){
      const lsTodos = localStorage.getItem('todos')
      if (lsTodos) {
         this.setState({todos: JSON.parse(lsTodos)})
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.todos !== this.state.todos) {
         localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
   }

   onAddTask = () => {
      const updateTodos = [ ...this.state.todos, {id:uuidv4(), name: this.state.input}]
      this.setState({ todos: updateTodos});
      this.setState({ input: ''});
   }

   onChangeHandle = (e) => {
      const value = e.target.value;
      this.setState({input: value});
   }

   onEntreClick = (e) => {
      if (e.key === 'Enter') {
         const updateTodos = [ ...this.state.todos, {id:uuidv4(), name: this.state.input}]
         this.setState({ todos: updateTodos});
         this.setState({ input: ''});
      }
   }

   onHandleDelete = (id) => {
      const filtedTodos = this.state.todos.filter((el)=>el.id !== id); 
      this.setState({todos: filtedTodos})
   }

   onClearLocalStorage = () => {
      localStorage.removeItem('todos')
   }
   
   render () {
      return (
         <>
            <input
               placeholder="Add your task" 
               onChange={this.onChangeHandle}
               onKeyDown={this.onEntreClick} 
               value={this.state.input}
            />
            <button onClick={this.onAddTask}>Add task</button>
            <button onClick={this.onClearLocalStorage}>Clear To Do List</button>
            <ul>
               {this.state.todos.map((todo)=>{
                  return (
                     <L38ToDoItemClass key={todo.id} name={todo.name}>
                        {<ButtonComponent 
                           type='button' 
                           text='delete' 
                           onClick={()=>this.onHandleDelete(todo.id)} 
                        />}
                     </L38ToDoItemClass>
                  )})}
            </ul>     
         </>
      )
   }
}

export default L38ToDoClassHW