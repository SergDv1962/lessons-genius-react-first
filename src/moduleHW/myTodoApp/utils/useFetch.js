import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = 'http://localhost:3030/';

export function useFetch (url) {
   const [data, setData] = useState([]);
   const [isLoading, setIsloading] = useState(false);
   const [error, setError] = useState('');

   async function fetchData() {
      setIsloading(true);
      try {
         const response = await axios.get(url);
         setData(response.data);
      } catch (error) {
         setError(error.message)
      } finally {
         setIsloading(false)
      }
   };
   useEffect(()=>{
    fetchData();  
   },[])
   
   return {data, isLoading, error}
}