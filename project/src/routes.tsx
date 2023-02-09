import { createBrowserRouter } from "react-router-dom";
import { AlfaMadePage } from "./pages/alfa-made-page";
import { MainPage } from "./pages/main-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "cart",
        // element={<CartPage />}
      },
      {
        path: "contacts",
        // element={<ContactsPage />}
      },
      {
        path: "design",
        // element={<DesignPage />}
      },
      {
        path: "policy",
        // element={<Policy />}
      },
    ],
  },
  {
    path: "/made",
    element: <AlfaMadePage />
  },
]);
