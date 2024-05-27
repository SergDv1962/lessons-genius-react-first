import { forwardRef} from "react";


const L406ChildComponent = forwardRef((props, ref) => {
   console.log('I`m L406ChildComponent');
   
   return <input type="text" ref={ref}/>
})

export default L406ChildComponent