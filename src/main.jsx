import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { getContactLoader, getContactsLoader } from "./loaders/ContacsLoader";
import {
  createContactAction,
  deleteContactAction,
  updateContactAction,
  updateContactFavAction,
} from "./actions/contactsActions";
import EditContact from "./routes/edit";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
        action: updateContactFavAction,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: updateContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: (
          <div>
            <h1>Oh no!</h1>
            <p>Something went wrong</p>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
