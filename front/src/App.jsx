import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useAuth from "./Hooks/Auth";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
import AddInventory from "./pages/Addinventory";
import InventoryTable from "./pages/Invetorytable";
import ChangeInventory from "./pages/ChangeInvetory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./ProtectedRouter";

function App() {
  const {login} = useAuth();

  const router = createBrowserRouter([
    { path: "/login", element: <Login login={login} /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <ProtectedRoute element={<First />} />,
      children: [
        { path: "", element: <ProtectedRoute element={<AddInventory />} /> },
        { path: "/add-inventory", element: <ProtectedRoute element={<AddInventory />} /> },
        { path: "/inventory-table", element: <ProtectedRoute element={<InventoryTable />} /> },
        { path: "/change-inventory", element: <ProtectedRoute element={<ChangeInventory />} /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
