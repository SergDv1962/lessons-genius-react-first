

const HW41reactMemoChild = (props) => {
   console.log("i'm first child");
   
   return (
      <>
         {props.name}
         <button onClick={props.onClick}>DELETE</button>
      </>
   )
}

export default HW41reactMemoChild