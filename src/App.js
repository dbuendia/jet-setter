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
  const [addElementBarValue, setAddElementBarValue] = useState("");

  function onButtonClick(value) {
    const updatedItems = [
      ...items,
      {
        value,
        id: items.length + 1,
        packed: false,
      },
    ];
    setItems(updatedItems);

    // Actualizamos el estado para que se resetee la barra de input con cada uso
    setAddElementBarValue("");
  }

  // Selecciona los ítems correctos para cada lista
  let packedItems = [];
  let unpackedItems = [];

  items.forEach((item) => {
    if (item.packed === true) {
      packedItems.push(item);
    }

    if (item.packed === false) {
      unpackedItems.push(item);
    }
  });

  const filterUnpackedItems = unpackedItems.filter((elem) => {
    return (
      elem.value.toUpperCase().indexOf(unpackedFilterInput.toUpperCase()) >= 0
    );

    // IndexOf devuelve el primer índice donde se puede encontrar un elemento en un array (o string) o devuelve -1
    // Si el elemento que se está filtrando, contiene el input del usuario (si el output es mayor a -1)
    // Se devuelve el elemento y se incluye en el nuevo array
    // if (
    //   elem.value.toUpperCase().indexOf(unpackedFilterInput.toUpperCase()) >= 0
    // ) {
    //   return true;
    // }
  });

  const filterPackedItems = packedItems.filter((elem) => {
    return (
      elem.value.toUpperCase().indexOf(packedFilterInput.toUpperCase()) >= 0
    );
  });

  // Borra un elemento de cualquiera de las listas
  function removeElement(id) {
    let updatedItems = items.filter((elem) => {
      return elem.id !== id;
      // Si el ID coincide no se devuelve el elemento, por lo tanto se elimina del array
      /* if (elem.id !== id) {
        return true;
      } */
    });
    setItems(updatedItems);
  }

  function checkItems(id) {
    const markedItems = items.map((elem) => {
      if (elem.id === id) {
        elem.packed = !elem.packed;
      }
      return elem;
    });
    setItems(markedItems);
  }

  function checkAllItems() {
    const allMarkedItems = items.map((elem) => {
      if (elem.packed === false) {
        elem.packed = true;
      }
      return elem;
    });
    setItems(allMarkedItems);
  }

  return (
    <div className="App">
      <Header />
      <AddElementBar
        value={addElementBarValue}
        onClick={onButtonClick}
        onChange={(e) => setAddElementBarValue(e.target.value)}
      />
      <ItemList
        title="Elementos no empacados"
        items={filterUnpackedItems}
        removeElement={removeElement}
        checkItems={checkItems}
        userInput={unpackedFilterInput}
        setUserInput={setunpackedFilterInput}
        packed={false}
      />
      <ItemList
        title="Elementos empacados"
        items={filterPackedItems}
        removeElement={removeElement}
        checkItems={checkItems}
        userInput={packedFilterInput}
        setUserInput={setpackedFilterInput}
        packed={true}
      />
      <button className="btn-reset default" onClick={checkAllItems}>
        Marcar todos los elementos como empacados
      </button>
    </div>
  );
}

export default App;
