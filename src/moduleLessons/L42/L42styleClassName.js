import { useState } from "react";
import classNames from 'classnames'; //  потрібно завантажити додаток через: npm install classnames
import './L42styleCSS'

const L42styleClassName = () => {
   const [state, setState] = useState(false)
   const handleChange = () => {
      setState(!state)
   }

   return (
      <>
         <div className={classNames('container', {containerBlue: state})}>
            <h1 className={classNames({title: state})}>L42styleClassName</h1>
            <p>This is example of style in react</p>
         </div>
         <button onClick={handleChange}>Change styles</button>
      </>
   )
}
export default L42styleClassName