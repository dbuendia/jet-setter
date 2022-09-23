import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import AddElementBar from "./components/AddElementBar.jsx";
import ItemList from "./components/ItemList.jsx";
import { items as initialItems } from "./data/items.js";

function App() {
  // States:

  // Dataset
  const [items, setItems] = useState(initialItems);

  // Inputs del usuario para filtrar las listas:
  const [packedFilterInput, setpackedFilterInput] = useState("");
  const [unpackedFilterInput, setunpackedFilterInput] = useState("");

  // Add Element Bar
  const [addElementBarValue, setaddElementBarValue] = useState(
    "Añade un nuevo elemento"
  );

  // TODO reset el input del usuario después de añadir un elemento
  function handleInputBarChange(e) {
    setaddElementBarValue(e.target.value);
  }

  function onButtonClick(value) {
    // Acción inmutable
    const updatedItems = [
      ...items,
      {
        value: value,
        id: items.length + 1,
        packed: false,
      },
    ];
    setItems(updatedItems);
  }

  // Selecciona los ítems correctos para cada lista
  let packedItems = [];
  let unpackedItems = [];

  items.filter((item) => {
    if (item.packed === true) {
      packedItems.push(item);
    }

    if (item.packed === false) {
      unpackedItems.push(item);
    }
  });

  const filterUnpackedItems = unpackedItems.filter((elem) => {
    if (
      elem.value.toUpperCase().indexOf(unpackedFilterInput.toUpperCase()) >= 0
    ) {
      return true;
    }
  });

  const filterPackedItems = packedItems.filter((elem) => {
    if (
      elem.value.toUpperCase().indexOf(packedFilterInput.toUpperCase()) >= 0
    ) {
      return true;
    }
  });

  // Borra un elemento de cualquiera de las listas
  function removeElement(id) {
    let updatedItems = items.filter((elem) => {
      // Si el ID coincide no se devuelve el elemento, por lo tanto se elimina del array
      if (elem.id !== id) {
        return elem;
      }
    });
    setItems(updatedItems);
  }

  function checkItems(id) {
    const markedItems = items.map((elem) => {
      if (elem.id === id) {
        elem.packed = !elem.packed;
        return elem;
      } else {
        return elem;
      }
    });
    setItems(markedItems);
  }

  function checkAllItems() {
    console.log("daniell");
    const allMarkedItems = items.map((elem) => {
      if (elem.packed === false) {
        elem.packed = true;
        return elem;
      } else {
        return elem;
      }
    });
    setItems(allMarkedItems);
  }

  return (
    <div className="App">
      <Header />
      <AddElementBar
        value={addElementBarValue}
        onChange={handleInputBarChange}
        onClick={onButtonClick}
      />
      <ItemList
        title="Elementos no empacados"
        items={filterUnpackedItems}
        removeElement={removeElement}
        checkItems={checkItems}
        userInput={unpackedFilterInput}
        setUserInput={setunpackedFilterInput}
      />
      <ItemList
        title="Elementos empacados"
        items={filterPackedItems}
        removeElement={removeElement}
        checkItems={checkItems}
        userInput={packedFilterInput}
        setUserInput={setpackedFilterInput}
      />
      <button className="btn-reset default" onClick={checkAllItems}>
        Marcar todos los elementos como no empacados
      </button>
    </div>
  );
}

export default App;
