import {useState} from 'react'
import './L42styleCSS.css'

const L42styleCSS = () => {
   const [state, setState] = useState(false)
   const handleChange = () => {
      setState(!state)
   }

   return (
      <>
         <div className={`container ${state ? 'containerBlue' : ''}`}>
            <h1>L42styleCSS</h1>
            <p>This is example of style in react</p>
         </div>
         <button onClick={handleChange}>Change styles</button>
         <br/>
         <div className='container containerBlue containerRed'>
            <h1>Перебивання стилю</h1>
            <p>За рахунок додавання ще одного класуt</p>
         </div>
      </>

   )
}

export default L42styleCSS