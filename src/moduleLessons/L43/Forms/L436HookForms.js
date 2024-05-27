import React from 'react';
import { useForm } from 'react-hook-form';

const L436HookForms = () => {
   const {
      register,                  // для реєстрування наших пропів, котрі приходять з бібліотеки
      handleSubmit,              // це його підкапотний сабміт і ми його використовуємо у дії onSubmit
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div>
         <h1>Форма з використанням React Hook Form</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <label htmlFor='name'>Ім'я:</label>
               <input type='text' {...register('name', {required: true,})}/>
               {errors.name && <span>Це поле є обов'язковим</span>}
            </div>
            <div>
               <label htmlFor='email'>Електронна пошта:</label>
               <input {...register('email', {pattern: /^\S+@\S+$/i,})}/>
               {errors.email && <span>Введіть коректну електронну пошту</span>}
            </div>

            <button type='submit'>Відправити</button>
         </form>
      </div>
   )
}
export default L436HookForms