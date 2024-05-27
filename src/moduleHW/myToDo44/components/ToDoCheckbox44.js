import axios from "axios";

const ToDoCheckbox44 = ({ item, setTasks }) => {

  async function handleCheckbox(e) {
    const value = e.target.checked;
    const payload = {
      title: item.title,
      description: item.description,
      checked: JSON.stringify(value),
      creationDate: item.creationDate,
    };
    const response = await axios.put(`todos/${item.id}`, payload);
    setTasks((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return response.data;
        }
        return el;
      })
    );
  }
  return (
    <input
      type="checkbox"
      onChange={handleCheckbox}
      checked={JSON.parse(item.checked)}
    />
  );
};
export default ToDoCheckbox44;
