
const styles = {
   box: {
     padding: "10px",
     textAlign: "left",
     width: "180px",
     backgroundColor: "grey",
   },
 };

const InputData = ({value}) => {
   return (
      <div style={styles.box}>
        <p>
          First name: <strong>{value.name}</strong>
        </p>
        <p>
          Email: <strong>{value.email}</strong>
        </p>
        <p>
          Checkbox: <strong>{value.checkbox.toString()}</strong>
        </p>
        <p>
          Select: <strong>{value.select}</strong>
        </p>
      </div>
   )
}
export default InputData