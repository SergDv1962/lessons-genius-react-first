import {useState} from 'react'

const styles = {
  containerGrey: { 
      width: 400, 
      height: 200, 
      backgroundColor: "grey" 
   },
  containerAqua: { 
      width: 400, 
      height: 200, 
      backgroundColor: "grey" 
   },
};

const styleP = {
   red:{color:'red'},
   green:{color:'green'}
}

const L42styleInline = () => {
   const [state, setState] = useState(false);
  return (
    <div>
      <p style={{color:'red', backgroundColor: state ? 'yellow' : 'transparent'}}>Style</p>
      <button onClick={()=>setState(!state)}>Change color</button>
      <p style={state ? styleP.red : styleP.green}>Dynamik styles</p>
      <div style={styles.containerGrey}>I'm box</div>
    </div>
  );
};

export default L42styleInline;
