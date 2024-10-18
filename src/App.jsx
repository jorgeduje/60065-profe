import FetchingAsync from "./components/FetchingAsync";
import FetchingData from "./components/FetchingData";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <FetchingData /> */}
      <FetchingAsync />
    </>
  );
}

export default App;
