import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

export async function getTasksList() {
   const response = await axios.get("todos");
   return response.data;
}