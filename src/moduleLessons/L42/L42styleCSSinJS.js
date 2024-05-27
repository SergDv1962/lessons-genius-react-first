import { useState } from "react";
import styles from './L42styleCSS.module.css'
import {Title, Button} from './styles'


const L42styleCSSinJS = () => {
   const [state, setState] = useState(false)
   const handleChange = () => {
      setState(!state)
   }

   return (
      <>
         <div className={`${styles.container} ${state ? styles.containerBlue : ""}`}>
            <Title>Same Title</Title>
            <h3>L42styleClassName</h3>
            <p>This is example of style in react</p>
         </div>
         <Button primary={'red'} state={state} onClick={handleChange}>Change styles</Button>
        
      </>
   )
}
export default L42styleCSSinJS