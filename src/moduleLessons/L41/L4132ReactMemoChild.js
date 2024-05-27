import React from "react";

const L4132ReactMemoChild = ({item}) => {
   return (
      <div>
         Hello, {item}
      </div>
   )
}
export default L4132ReactMemoChild;
/* 
// приклад деструктурізації

const obj = {
   name: 'Serhiy',
   car: 'chevrale'
}
console.log(obj.name);

// Деструктурізація

const {name, car} = obj;
console.log(name);
console.log(car);

const {name: firstName} = obj; // переменування ключа
console.log(firstName);
*/

