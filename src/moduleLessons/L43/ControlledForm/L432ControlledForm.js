import { useState } from "react";

const styles = {
   box:{
      padding: 10,
      textAlign: 'left',
      width: 150,
      backgroundColor: 'grey',
   }
}

const L432ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset()
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor="firstName">Name</label>
           <input
             onChange={handleNameChange}
             type="text"
             name="firstName"
             id="firstName"
           />
        </div>
        <div>
           <label htmlFor="email">Email</label>
           <input
             onChange={handleEmailChange}
             type="email"
             name="email"
             id="email"
           />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <div style={styles.box}>
        <p>First name: <strong>{name}</strong></p>
        <p>Email: <strong>{email}</strong></p>
      </div>
    </>
  );
};
export default L432ControlledForm;
