import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:3030/"

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData () {
   setIsLoading(true);
   try {
      const respons = await axios.get(url);
      setData(respons.data);
   } catch (error) {
      setError(error.message);
   } finally {
      setIsLoading(false);
   }
  }

  useEffect(()=>{
   fetchData();
  },[])

//   console.log("I'm render of useFetch");

   return {data, isLoading, error}
}