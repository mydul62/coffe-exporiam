import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.jsx";
import Home from "./root/Home.jsx";

// Import the CSS file
import "./index.css";
import DashBoardCoffee from "./root/DashBoardCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboardcoffee",
        element: <DashBoardCoffee></DashBoardCoffee>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
