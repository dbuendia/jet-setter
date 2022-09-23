function AddElementBar({ value, onChange, onClick }) {
  return (
    <div className="input-bar">
      <input
        type="text"
        name="new"
        placeholder={value}
        onChange={onChange}
        onKeyPress={(e) => (e.key === "Enter" ? onClick(value) : null)}
      ></input>
      <button
        className="default"
        type="submit"
        name="submit"
        onClick={() => onClick(value)}
      >
        Añadir
      </button>
    </div>
  );
}

export default AddElementBar;
