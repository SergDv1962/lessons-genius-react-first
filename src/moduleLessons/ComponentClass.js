import {Component} from 'react';

class ComponentClass extends Component {
   constructor(props){
      super(props);
      this.state = {
         name: 'Serhiy'
      }
   }
   render(){
      return(
         <h2>
            My name: {this.state.name}. And I`m class component.
         </h2>
      )
   }
}
export default ComponentClass