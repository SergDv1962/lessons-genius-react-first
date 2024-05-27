import { useState, useEffect } from "react";
import { getContactsList } from "./api/api";

const L4410_GetRequest = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);                    // до початку загрузки ставимо "Loading..."
    const data = await getContactsList();    // загрузка
    setIsLoading(false);                    // після загрузки знімаємо "Loading..."
    setContacts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(contacts);

  return (
    <div style={{backgroundColor: "blue", padding: "0 20px"}}>
      <h1>Contacts</h1>
       <ul style={{ backgroundColor: "grey" }}>
         {isLoading ? <div>Loading...</div> : contacts.map((contact) => (
           <li key={contact.id} style={{textAlign:"start"}}>
             {contact.name} {contact.lastName}
           </li>
         ))}
       </ul>
    </div>
  );
};
export default L4410_GetRequest;
