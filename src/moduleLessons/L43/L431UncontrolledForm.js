import {useRef} from 'react'

const L431UncontrolledForm = () => {
   const formRef = useRef(null);

   const handleSubmit = (event) => {
      event.preventDefault();
      const name = event.target.firstName;
      const email = event.target.email;
      console.log({name2:name, email}); // перейменуваня властивості name
      //  але в реакті отримають доступ до полів форми через useRef
      console.log(formRef.current);
      console.log(formRef.current.firstName.value);
      console.log(formRef.current.email.value);

      formRef.current.reset(); //ьетод для очистки полей форми
   }
   return (
      <form ref={formRef} onSubmit={handleSubmit}>
         <label htmlFor='firstName'>Name</label>
         <input type='text' name='firstName' id='firstName'/>
         <label htmlFor='email'>Email</label>
         <input type='email' name='email' id='email'/>
         <input type='submit' value='Submit'/>
         {/* <button type='submit'>Submit Form</button> */}
      </form>
   )
}
export default L431UncontrolledForm