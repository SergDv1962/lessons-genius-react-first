import { debounce } from "lodash"; // npm i lodash -f

const Textinput = ({value, setValue}) => {

  const handleNameChange = debounce((event) => {
    const name = event.target.value;
    console.log(name);
    setValue((prevState) => ({ ...prevState, name }));
  }, 1000); // ця функія -debounce- дає затримку отримання введенного тексту на якийсь час, тут 1000мс

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <label style={{ marginRight: "10px" }} htmlFor="firstName">
          Name
        </label>
        <input
          onChange={handleNameChange}
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div style={{ padding: "20px" }}>
        <label style={{ marginRight: "10px" }} htmlFor="email">
          Email
        </label>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
        />
      </div>
    </>
  );
};
export default Textinput;
