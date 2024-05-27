import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const L434Formik = () => {
   const onSubmit = (values) => {
      console.log(values);
   }
   const validateForm = (values) => {
      const errors = {};

      if (!values.name) {
         errors.name = "Введіть своє ім'я";
      }

      if (!values.email) {
         errors.email = "Введіть свою електронну пошту";
      }

      return errors;
   };

   return (
      <div>
         <h1>Форма з використанням Formik</h1>  
         <Formik initialValues={{
            name: '',
            email: '',
            }}
            validate={validateForm}
            onSubmit={onSubmit}
         >
            <Form>
               <div>
                  <label htmlFor='name'>Ім'я:</label>
                  <Field type='text' id='name' name='name'/>
                  <ErrorMessage name='name' component='div'/>
               </div>
               
               <div>
                  <label htmlFor='name'>Електронна пошта:</label>
                  <Field type='email' id='email' name='email'/>
                  <ErrorMessage name='email' component='div'/>
               </div>

               <button type='submit'>Відправити</button>
            </Form>   
         </Formik> 
      </div>
   )
}
export default L434Formik