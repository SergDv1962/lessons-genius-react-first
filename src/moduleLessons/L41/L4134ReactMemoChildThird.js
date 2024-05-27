import {memo} from "react";

const areEqual = (prevProps, nextProps) => {
   return prevProps.name !== nextProps.name
}

const L4134ReactMemoChildThird = memo (({name}) => {
   console.log('L41ReactMemoChildThird render');
   
   return (
      <div>
         L41ReactMemoChild____Third {name}
      </div>
   )
}, areEqual)
export default L4134ReactMemoChildThird;

