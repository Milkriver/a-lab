import { createBrowserRouter } from "react-router-dom";
import { AlfaMade } from "./pages/alfa-made";
import { Cart } from "./pages/cart";
import { Contacts } from "./pages/contacts";
import { Design } from "./pages/design";
import { Main } from "./pages/main";
import { Policy } from "./pages/policy";
import { Product } from "./pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/made",
    element: <AlfaMade />
  },
  {
    path: "design",
    element: <Design />
  },
  {
    path: "product",
    element: <Product />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "contacts",
    element: <Contacts />
  },
  {
    path: "policy",
    element: <Policy />
  },
]);
