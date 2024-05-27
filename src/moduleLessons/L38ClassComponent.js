import { Component } from "react";

class L38ClassComponent extends Component{
   constructor(props){
      super(props);
      this.state = {
         count: 1,
      }
      console.log("MyClassComponent constructor"); 
   }
   componentDidMount() {
      console.log("MyClassComponent componentDidMount"); 
   }
   shouldComponentUpdate(nextProps, nextState) {
      if(this.props.name !== nextProps.name){
         return true
      }return false
   }
   componentDidUpdate(prevProps, prevState) {
   }
   render(){
      console.log("MyClassComponent render");
      return (
         <div>MyClassComponent</div>
      )
   }
}
export default L38ClassComponent