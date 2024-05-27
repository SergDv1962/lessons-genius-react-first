import { useState } from "react";

const styles = {
   box:{
      padding: 10,
      textAlign: 'left',
      width: 150,
      backgroundColor: 'grey',
   }
}

//зменшуємо кількість useState якщо дуже багато полей таблиці:

const L433ControlledForm = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset()
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setValue((prevState)=>({...prevState, name}));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState)=>({...prevState, email}));
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
        <p>First name: <strong>{value.name}</strong></p>
        <p>Email: <strong>{value.email}</strong></p>
      </div>
    </>
  );
};
export default L433ControlledForm;
