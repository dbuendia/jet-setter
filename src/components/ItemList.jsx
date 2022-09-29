import Item from "./Item.jsx";

function ItemList({
  title,
  items,
  removeElement,
  checkItems,
  userInput,
  setUserInput,
  packed,
}) {
  return (
    <div className="item-list">
      <h2 className="item-list-title">
        {title} ({items.length})
      </h2>
      <input
        className="item-list-search"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        placeholder="Busca un ítem en la lista"
      ></input>
      <ul>
        {items.map((elem) => {
          return (
            <Item
              removeElement={removeElement}
              value={elem.value}
              key={elem.id}
              id={elem.id}
              checkItems={checkItems}
              checked={packed}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
