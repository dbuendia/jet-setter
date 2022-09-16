import "./App.css";
import Header from "./components/Header.jsx";
import InputBar from "./components/InputBar.jsx";
import ItemList from "./components/ItemList.jsx";
{
  /*

  2:32
Just for fun, podrías hacer un componente Ítem?

12:32
Para que hagas prop drilling a full
12:33
Item sería solo el checkbox con el legend del ítem
12:33
Eso te obligará a pasar props desde app, unos 3 componentes hacia abajo

*/
  /* Jet Setter

Qué te parece esta estructura para jet setter?

<App>
	<InputBar> (text + submit button)
	<ItemsContainer> 
	(title, sum, searchbar, elements) 		  	<SearchBar> (es su propio component porq es muy reutilizable)
	 	<ItemsContainer> (Repito el componente con otro título) 
	<Button> marcar todo como completado (lo haría otro componente para que no se quede solo flotando en app)

 */
}

function App() {
  return (
    <div className="App">
      <Header />
      <InputBar />
      <ItemList />
      <ItemList />
    </div>
  );
}

export default App;
