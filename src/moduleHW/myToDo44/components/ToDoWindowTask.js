
import './ToDoWindowTask.css'

const ToDoWindowTask44 = ({
  title,
  text,
  onChangeTitle,
  onChangeText,
  placeholderTitle,
  placeholderText,
}) => {
  
  return (
    <div className="box-windowTaks">
      <div>
        <label htmlFor="title">Title</label>
        <input
          onChange={onChangeTitle}
          type="text"
          id="title"
          placeholder={placeholderTitle}
          value={title || ''}
        />
      </div>
      <div>
        <label htmlFor="text">Description</label>
        <input
          onChange={onChangeText}
          type="text"
          id="text"
          placeholder={placeholderText}
          value={text || ''}
        />
      </div>
    </div>
  );
};

export default ToDoWindowTask44;
