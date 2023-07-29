import { Home } from "./Pages/Home.jsx";
import { Userlist } from "./Pages/Userlist.jsx";
import { Newuser } from "./Pages/Newuser.jsx";
import { Products } from "./Pages/Products.jsx";
import { ProductItem } from "./Pages/ProductItem.jsx";
const routes = [
  { path: "/", element: <Home /> },
  { path: "users", element: <Userlist /> },
  {
    path: "products",
    element: <Products />,
    children: [{ path: ":ProductId", element: <ProductItem /> }],
  },

  { path: "newUser", element: <Newuser /> },
];

export default routes;
