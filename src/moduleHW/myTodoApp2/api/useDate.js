const useDate = () => {
   let d = new Date();
   let date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`
   return date;
}
 
export default useDate;