import { createBrowserRouter } from "react-router-dom";
import { AlfaMadePage } from "./pages/alfa-made-page";
import { CartPage } from "./pages/cart-page";
import { ContactsPage } from "./pages/contactsPage";
import { DesignPage } from "./pages/design-page";
import { MainPage } from "./pages/main-page";
import { PolicyPage } from "./pages/policy-page";
import { ProductPage } from "./pages/product-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/made",
    element: <AlfaMadePage />
  },
  {
    path: "design",
    element: <DesignPage />
  },
  {
    path: "product",
    element: <ProductPage />
  },
  {
    path: "cart",
    element: <CartPage />
  },
  {
    path: "contacts",
    element: <ContactsPage />
  },
  {
    path: "policy",
    element: <PolicyPage />
  },
]);
