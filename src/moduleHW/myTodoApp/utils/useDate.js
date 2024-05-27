const useDate = () => {
   const d = new Date();
  const date = `${d.getFullYear()}/${
    d.getMonth() + 1
  }/${d.getDay()} - ${d.getHours()}:${d.getMinutes()}`;

   return date;
}
 
export default useDate;