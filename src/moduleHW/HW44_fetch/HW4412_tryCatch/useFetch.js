import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3030";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData () {
   setIsLoad(true);
   try {
      const response = await axios.get(url);
      setData(response.data);
   } catch (error) {
      console.warn('Something went wrong', error);
      setError(error.message);
   }finally{
      setIsLoad(false);
   }
  }
  useEffect(()=>{
   fetchData()
  },[])

  return {data, isLoad, error}
}
