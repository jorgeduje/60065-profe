import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
	return (
		<div className="appContainer">
			<Navbar />
			<ItemListContainer />
		</div>
	);
}

export default App;
