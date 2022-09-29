function Item({ value, removeElement, id, checkItems, checked }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => checkItems(id)}
      />
      <span>{value}</span>
      <span className="delete" onClick={() => removeElement(id)}>
        Eliminar
      </span>
    </li>
  );
}

export default Item;
