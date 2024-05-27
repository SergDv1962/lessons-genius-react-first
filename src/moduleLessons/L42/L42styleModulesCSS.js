import { useState } from "react";
import styles from './L42styleCSS.module.css'

const L42styleModulesCSS = () => {
   const [state, setState] = useState(false)
   const handleChange = () => {
      setState(!state)
   }

   const setStyleBGColor = (type) => {
      if (type === 'blue') {
         return 'blueColor';
      }  
      if (type === 'red') {
         return 'redColor';
      }  
   }

   return (
      <>
         <div className={`${styles.container} ${state ? styles.containerBlue : ""}`}>
            <h1>L42styleClassName</h1>
            <p>This is example of style in react</p>
         </div>
         <button onClick={handleChange}>Change styles</button>
         <div className={`${styles.container} ${styles[setStyleBGColor('red')]}`}>second BOX</div>
      </>
   )
}
export default L42styleModulesCSS