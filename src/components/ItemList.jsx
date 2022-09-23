import Item from "./Item.jsx";

function ItemList({
  title,
  items,
  removeElement,
  checkItems,
  userInput,
  setUserInput,
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
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
