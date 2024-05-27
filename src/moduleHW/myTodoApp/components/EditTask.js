import axios from "axios";
import useDate from "../utils/useDate";
import useInput from "../utils/useInput";
import ModalWindow from "./ModalWindow ";
import { functions } from "lodash";
import { useFetch } from "../utils/useFetch";
import { useEffect } from "react";

const EditTask = ({setTasks, editTaskId, setIsEditBtnClick}) => {
   const {
      txt: title,
      setTxt: setTitle,
      handleTxtInput: handleTitleInput,
    } = useInput();
    
    const {
      txt: text,
      setTxt: setText,
      handleTxtInput: handleTextInput,
    } = useInput();

    const payload = {
      title: title,
      description: text,
      checked: "false",
      creationDate: useDate(),
    };

    const {data: editTask} = useFetch(`todos/${editTaskId}`)
    console.log(editTask.title);
    console.log(editTask.description);
    
    useEffect(()=>{
      setTitle(editTask.title);
      setText(editTask.description);
    },[editTask])
  
    async function handleSaveEditTask() {
      const response = await axios.put(`todos/${editTaskId}`, payload);
      
      setTasks((prev) => prev.map(el => {
         if (el.id === editTaskId) {
            return response.data
         }
         return el
      }));

      setIsEditBtnClick(false);
    }
   return ( 
      <div>
         <ModalWindow
            title={title}
            handleTitleInput={handleTitleInput}
            text={text}
            handleTextInput={handleTextInput}
         />
         <button onClick={handleSaveEditTask}>Зберегти</button>
      </div>
    );
}
 
export default EditTask;