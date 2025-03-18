import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={App} /> */}
    <App/>
  </React.StrictMode>
);




 
// {
//   "rewrites": [
//     {
//       "source": "/*",
//       "destination": "https://inventory-management-8mn8.onrender.com"
//     }
//   ]
// }