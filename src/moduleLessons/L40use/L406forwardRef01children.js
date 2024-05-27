import { forwardRef } from "react";

const L406forwardRef01children = forwardRef((props, ref) => {
   console.log('i`m children component');
   
   return <div ref={ref}>I`m div from L406forwardRef01children</div>
})
export default L406forwardRef01children