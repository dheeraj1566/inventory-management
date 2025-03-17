// import { createBrowserRouter } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import First from "./pages/First";
// import AddInventory from "./pages/Addinventory.jsx";
// import InventoryTable from "./pages/Invetorytable.jsx";
// import ChangeInvetory from "./pages/ChangeInvetory.jsx";
// import Login from "./pages/Login.jsx";
// // import Register from "./pages/register.jsx";
// import Register from './pages/Register.jsx';

// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <First />,
//     children: [
//       { path: "", element: <AddInventory /> },
//       { path: "*", element: <NotFound /> },
//       {path: "/add-invetory", element: <AddInventory />},
//       {path: "/inventory-table", element: <InventoryTable />},
//       {path: "/change-inventory", element: <ChangeInvetory />},
//       {path: "/login", element: <Login />},
//       {path:"/register", element:<Register/>}
//     ],
//   },
// ]);

// export default App;


import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
import AddInventory from "./pages/Addinventory";
import InventoryTable from "./pages/Invetorytable";
import ChangeInvetory from "./pages/ChangeInvetory";
import Login from "./pages/Login";
import Register from "./pages/Register";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

const App = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <ProtectedRoute element={<First />} />,
    children: [
      { path: "", element: <ProtectedRoute element={<AddInventory />} /> },
      { path: "/add-inventory", element: <ProtectedRoute element={<AddInventory />} /> },
      { path: "/inventory-table", element: <ProtectedRoute element={<InventoryTable />} /> },
      { path: "/change-inventory", element: <ProtectedRoute element={<ChangeInvetory />} /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default App;
