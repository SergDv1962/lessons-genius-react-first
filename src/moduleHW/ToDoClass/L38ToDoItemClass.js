import {Component} from 'react'

class L38ToDoItemClass extends Component {
   constructor(props){
      super(props)
   }
   render(){
      return(
         <div>
            <li>
               {this.props.name}
            </li>
            {this.props.children}
         </div>
      )
   }
}
export default L38ToDoItemClass