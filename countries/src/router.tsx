import { createBrowserRouter } from "react-router-dom";
import { Airports, App, Currency, ErrorPage } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:code/airports",
        element: <Airports />,
      },
      {
        path: "/:code?",
        element: <Currency />,
      },
    ],
  },
]);
