import { useState } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
import AddInventory from "./pages/Addinventory";
import InventoryTable from "./pages/Invetorytable";
import ChangeInventory from "./pages/ChangeInvetory";
import Login from "./pages/Login";
import Register from "./pages/Register";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

function AppRouter() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  const router = createBrowserRouter([
    { path: "/login", element: <Login setIsLogin={setIsLogin} /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <ProtectedRoute element={<First isLogin={isLogin} setIsLogin={setIsLogin} />} />,
      children: [
        { path: "", element: <AddInventory /> },
        { path: "/add-inventory", element: <AddInventory /> },
        { path: "/inventory-table", element: <InventoryTable /> },
        { path: "/change-inventory", element: <ChangeInventory /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return router;
}

export default AppRouter;
