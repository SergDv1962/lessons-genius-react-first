import { useState, useEffect } from "react";
import axios from "axios";

const L4410_GetRequest = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContactsList = async () => {
      const response = await axios.get("http://localhost:3030/contacts");
      setContacts(response.data);
      return response.data;
    };
    getContactsList();
  }, []);
  console.log(contacts);

  return (
    <div style={{backgroundColor: "blue", padding: "0 20px"}}>
      <h1>Contacts</h1>
       <ul style={{ backgroundColor: "grey" }}>
         {contacts.map((contact) => (
           <li key={contact.id} style={{textAlign:"start"}}>
             {contact.name} {contact.lastName}
           </li>
         ))}
       </ul>
    </div>
  );
};
export default L4410_GetRequest;
