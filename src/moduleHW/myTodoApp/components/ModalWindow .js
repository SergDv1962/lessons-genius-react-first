import "./modalWindow.css";

const ModalWindow = ({title, handleTitleInput, text, handleTextInput}) => {
 
  return (
    <div className="modalWindow-box">
      <div className="modalWindow-item">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          onChange={(e) => handleTitleInput(e)}
          id="title"
          value={title || ''}
        />
      </div>
      <div className="modalWindow-item">
        <label htmlFor="text">Description:</label>
        <input
          type="text"
          onChange={(e) => handleTextInput(e)}
          id="text"
          value={text || ''}
        />
      </div>
    </div>
  );
};

export default ModalWindow;
