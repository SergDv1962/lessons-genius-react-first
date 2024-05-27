import { memo, useEffect, useState } from "react";
import useWindowWidth from './useWindowWidth'

const Exercise01 = () => {
  
   const {widthWindow} = useWindowWidth()
    
    const handleClick = () => {
      console.log('From example:',widthWindow);
    };
    
    
  return (
    <div>
      <p>{widthWindow.ww}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
};
export default Exercise01;
