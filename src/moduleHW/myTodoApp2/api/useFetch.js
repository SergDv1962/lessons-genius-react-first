import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

axios.defaults.baseURL = 'http://localhost:3030'

const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState('');

   async function fetchData() {
      setLoading(true);
      try {
         const response = await axios.get(url);
         setData(response.data);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(()=>{
      fetchData()
   },[]);

   return {data, isLoading, error};
}
 
export default useFetch;