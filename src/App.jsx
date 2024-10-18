import { Comments } from "./Comments";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Posts from "./Posts";
import Users from "./Users";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      {/* <Users /> */}
      <Posts />
      {/* <Comments /> */}
    </>
  );
}

export default App;
