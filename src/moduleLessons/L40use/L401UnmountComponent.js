import { useEffect } from "react";

const L401UnmountComponent = () => {

   useEffect(() => {
      return () => {
         console.log('componentWillUpmount useEffect');
      }
   }, []);

   return (
      <div>
        UnmountComponent
      </div>
   )
}
export default L401UnmountComponent