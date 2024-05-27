import axios from "axios";
import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getContactsList, addContact } from "./api/api";


const L4414_query = () => {
  const  {data, isFetching, refetch} = useQuery({
    queryKey: ['contactsList'],
    queryFn: getContactsList,
  })

  const {mutateAsync} = useMutation({   // він додається для всіх запитів крім GET
    mutationFn: (payload) => addContact(payload),
  }) 

  const addNewContact = async () => {
    const payload = {
      "name": "Bob",
      "lastName": "Smit",
      "about": "this is information about user"
    }
    try { 
      await mutateAsync(payload);
      await refetch()
    } catch (error) {
      
    }
  }

  return (
    <div style={{ backgroundColor: "blue", padding: "5px 20px" }}>
      <h1>Contacts</h1>
      <ul style={{ backgroundColor: "grey" }}>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          data?.map((contact) => (
            <li
              key={contact.id}
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                {contact.name} {contact.lastName}
              </p>
              <button>Delete</button>
              <button>Edit</button>
            </li>
          ))
        )}
      </ul>
      <button onClick={addNewContact}>
        {"Add"}
      </button>
    </div>
  );
};
export default L4414_query;
