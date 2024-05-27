import { useState } from "react";
import './L42styleSCSS.scss';


const L42styleSCSS = () => {
   const [state, setState] = useState(false)
   const handleChange = () => {
      setState(!state)
   }

   return (
      <>
         <div className={`container ${state ? 'containerBlue' : ''}`}>
            
            <h3 className={'title'}>L42styleSCSS</h3>
            <p className={`${state ? 'yellowColor' : 'redColor'}`}>This is example of style in react</p>
         </div>
         <button className= {`button ${state ? 'redColor' : 'yellowColor'}`} onClick={handleChange}>Change styles</button>
        
      </>
   )
}
export default L42styleSCSS