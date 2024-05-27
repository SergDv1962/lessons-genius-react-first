const Checkbox = (props) => {
  return (
    <>
      <input
        type={props.type}
      //   value={props.checkbox}
        onChange={props.onChange}
        
      />
    </>
  );
};
export default Checkbox;
