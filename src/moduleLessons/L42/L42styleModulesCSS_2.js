import { useState } from "react";
import classNames from "classnames";
import styles from './L42styleCSS.module.css'

const L42styleModulesCSS_2 = () => {
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
         <div className={classNames(styles.container, {[styles.redColor]: true})}>
            <h1>L42styleClassName</h1>
            <p>This is example of style in react</p>
         </div>
         <button onClick={handleChange}>Change styles</button>
      </>
   )
}
export default L42styleModulesCSS_2