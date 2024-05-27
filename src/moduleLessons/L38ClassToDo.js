import {Component} from "react";

class L38ClassToDo extends Component{
   state = {
      todos: [],
      input: '',
      timer: 0,
   }

   componentDidMount() {
      const intervalId = setInterval(() => {
         this.setState((prevState)=>({timer: prevState.timer+1}))
      }, 1000);

      const lsToDos = localStorage.getItem('todos');
      if (lsToDos) {
         this.setState({todos: JSON.parse(lsToDos)}) 
      }
      console.log('componentDidMount');
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.todos !== this.state.todos){
         console.log('componentDidUpdate');
         localStorage.setItem('todos', JSON.stringify(this.state.todos));
      }
   }
   
   addTask = () => {
      this.setState({todos: [...this.state.todos, this.state.input]});
      this.setState({input: ''})
   };

   onChangeHandler = (e) => {
      const value = e.target.value;
      this.setState({ input: value});
   }

   componentWillUnmount(){
      clearInterval(this.intervalId)
   }

   render () {
      return <>
         <h2>{this.state.timer}</h2>
         <input onChange={this.onChangeHandler} value={this.state.input} />
         <button onClick={this.addTask} type="button">Add todo</button>
         {this.state.todos.map((todo, index)=>{
           return <p key={index}>{todo}</p>
         })}
      </>
   }
}
export default L38ClassToDo