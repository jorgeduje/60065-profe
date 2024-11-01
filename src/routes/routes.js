import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";
import { Login } from "../components/pages/login/Login";
import NotFound from "../components/pages/notFound/NotFound";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/category/:name",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: 4,
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 5,
    path: "/login",
    Element: Login,
  },
  {
    id: 6,
    path: "*",
    Element: NotFound,
  },
];
