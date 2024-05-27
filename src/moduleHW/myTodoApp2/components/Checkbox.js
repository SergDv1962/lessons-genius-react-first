import axios from "axios";

const Checkbox = ({setTasks, item}) => {
   async function handleCheckbox (e) {
      const value = e.target.checked;
      const response = await axios.put(`todos/${item.id}`, {
         "title": item.title,
         "description": item.description,
         "checked": JSON.stringify(value),
         "creationDate": item.creationDate,
      });
      setTasks(prev => prev.map(el => {
         if (el.id == item.id) {
            return response.data;
         }
         return el
      }));
   }

   return ( 
      <input type="checkbox" onChange={handleCheckbox} checked={JSON.parse(item.checked)}/>
    );
}
 
export default Checkbox;