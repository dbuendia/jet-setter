function Item({ value, removeElement, id, checkItems }) {
  return (
    <li className="item">
      <input type="checkbox" onChange={() => checkItems(id)} />
      <span>{value}</span>
      <span className="delete" onClick={() => removeElement(id)}>
        Eliminar
      </span>
    </li>
  );
}

export default Item;
