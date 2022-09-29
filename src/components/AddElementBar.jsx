function AddElementBar({ value, onChange, onClick }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onClick(value);
  }
  return (
    <div className="input-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="newSearchInput"
          placeholder="Añade un nuevo elemento"
          onChange={onChange}
          value={value}
        />
        <input type="submit" className="default" value="Añadir" />
      </form>
    </div>
  );
}

export default AddElementBar;
