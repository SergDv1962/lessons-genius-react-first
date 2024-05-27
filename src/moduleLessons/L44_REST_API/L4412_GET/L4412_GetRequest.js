import { useFetch } from "./hooks/useFetch";

const L4410_GetRequest = () => {
  const { data: contacts, isLoading, error } = useFetch("contacts");

  if (error) {
    return <div>something went wrong {error}</div>;
  }

  return (
    <div style={{ backgroundColor: "blue", padding: "0 20px" }}>
      <h1>Contacts</h1>
      <ul style={{ backgroundColor: "grey" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          contacts.map((contact) => (
            <li key={contact.id} style={{ textAlign: "start" }}>
              {contact.name} {contact.lastName}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default L4410_GetRequest;
