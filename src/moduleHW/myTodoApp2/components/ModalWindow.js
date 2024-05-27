const ModalWindow = ({
  title,
  text,
  handleTitleChange,
  handleTextChange,
  plhlTitle,
  plhlText,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="title">Назва</label>
        <input
          onChange={handleTitleChange}
          type="text"
          id="title"
          value={title || ""}
          placeholder={plhlTitle}
        />
      </div>
      <div>
        <label htmlFor="title">Опис</label>
        <input
          onChange={handleTextChange}
          type="text"
          id="title"
          value={text || ""}
          placeholder={plhlText}
        />
      </div>
    </div>
  );
};

export default ModalWindow;
