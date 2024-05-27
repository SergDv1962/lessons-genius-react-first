import { useEffect, useState } from "react";
import { getTasksList } from "./api";

const HW4411_GET = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const data = await getTasksList();
    setTasks(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
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
export default HW4411_GET;

//"http://localhost:3030/contacts"
