import React from "react";
// import { useCounter } from "./useCounter";
// import  useFetch  from "./useFetch";
// import  useLocalStorage  from "./useLocalStorage";
import  useForm  from "./useForm";

const L41CustomHuk = () => {
  /*  //  ------- useCounter  ----------
   const {value, increment, decrement} = useCounter();
   return (
      <>
        <p>{value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
   )
   */
  /*   //  ---------- useFetch ---------
   function MyComponent() {
      const { data, isLoading, error } = useFetch("https://api.example.com/data");

      if(isLoading) {
         return <div>Loading...</div>
      }

      if(error) {
         return <div>Error: {error.message}</div>;
      }

      return (
         <div>
            {data && <div>{data}</div>}
         </div>
      )
   }
   MyComponent()
   */
  /*   //-----   useLocalStorage  ------
   const [count, setCount] = useLocalStorage('count', 0);
   const increment = () => {
      setCount(count + 1);
   };
   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>increment</button>
      </div>
   )
   */
       // ---- useForm  -------
  const {values, handleChange, handleSubmit} = useForm(
    { name: "", email: "" },
    (formData) => {
      console.log("Submitted", formData);
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default L41CustomHuk;
