import { Home } from "./Pages/Home.jsx";
import { Userlist } from "./Pages/Userlist.jsx";
import { Newuser } from "./Pages/Newuser.jsx";
import { Products } from "./Pages/Products.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "users", element: <Userlist /> },
  { path: "products", element: <Products /> },
  { path: "newUser", element: <Newuser /> },
];

export default routes;
