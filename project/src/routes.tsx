import { createBrowserRouter } from "react-router-dom";
import { Page } from "./pages/offers/page";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
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
            path: "made",
        // element={<MadeByPage />}
          },
          {
            path: "policy",
        // element={<Policy />}
          },
      ],
    },
  ]);
