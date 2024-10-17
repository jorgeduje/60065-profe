import { Navbar } from "./components/layout/navbar/Navbar";
import FetchingData from "./components/pages/fetchingData/FetchingData";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <FetchingData />
    </>
  );
}

export default App;
