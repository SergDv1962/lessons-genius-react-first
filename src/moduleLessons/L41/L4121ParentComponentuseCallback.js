import { useState, useMemo, useEffect, useCallback } from "react";
import L4122ComponentChildUseCallback from "./L4122ComponentChildUseCallback"

function L4121ParentComponentuseCallback () {
   console.log('i`m parent component');
   
  const handleClick = useCallback(() => {
   console.log('Function Click from parent`s component');
  })

  const onFirstBTN = () => {
   console.log("First buttom click");
   
  }
   return (
      <>
         Hello
         <button onClick={onFirstBTN}>BTN</button>
         <br/>
         <L4122ComponentChildUseCallback onClick={handleClick}/>
      </>
   )
}

export default L4121ParentComponentuseCallback