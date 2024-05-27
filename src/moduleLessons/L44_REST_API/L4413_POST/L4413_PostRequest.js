import axios from "axios";
import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:3030/";

const L4413_PostRequest = () => {
  const [data, setData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { data: contacts, isLoading, error } = useFetch("contacts");

  useEffect(() => {
    setData(contacts);
  }, [contacts]); // коли contacts змінюються то сетится contacts у data

  const addContact = async () => {
    setIsPostLoading(true);
    const payload = {
      name: "Serhiy",
      lastName: "DSV",
      about: "this is information about user",
    };
    const response = await axios.post("contacts", payload);
    setData((prev) => [...prev, response.data]);
    setIsPostLoading(false);
  };

  // if (error) {
  //   return <div>something went wrong {error}</div>;
  // }

  const deleteContact = async (id) => {
    await axios.delete(`contacts/${id}`);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const editContact = async (id) => {
    const payload = {
      name: "Mary",
      lastName: "Brawn",
      about: "this is information about user",
    };
    const response = await axios.put(`contacts/${id}`, payload);
    setData((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          return response.data;
        }
        return item;
      })
    );
  };

  return (
    <div style={{ backgroundColor: "blue", padding: "5px 20px" }}>
      <h1>Contacts</h1>
      <ul style={{ backgroundColor: "grey" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((contact) => (
            <li
              key={contact.id}
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                {contact.name} {contact.lastName}
              </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
              <button onClick={() => editContact(contact.id)}>Edit</button>
            </li>
          ))
        )}
      </ul>
      <button disabled={isPostLoading} onClick={addContact}>
        {isPostLoading ? "Loadind_2 ..." : "Add"}
      </button>
    </div>
  );
};
export default L4413_PostRequest;
