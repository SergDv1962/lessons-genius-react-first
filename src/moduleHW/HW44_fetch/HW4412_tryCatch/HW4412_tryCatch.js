import { useFetch } from "./useFetch";

const HW4412_tryCatch = () => {
  const { data: tasks, isLoad, error } = useFetch("todos");
  if (error) {
    return error;
  }
  return (
    <div>
      <h2>HW4412_tryCatch </h2>
      {isLoad ? (
        <div>Load...</div>
      ) : (
        tasks.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default HW4412_tryCatch;

//"http://localhost:3030/contacts"
