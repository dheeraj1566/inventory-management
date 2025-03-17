import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddInventory from "./pages/Addinventory.jsx";
import InventoryTable from "./pages/Invetorytable.jsx";
import ChangeInvetory from "./pages/ChangeInvetory.jsx";
import Login from "./pages/Login.jsx";

const App = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { path: "", element: <AddInventory /> },
      { path: "*", element: <NotFound /> },
      {path: "/add-invetory", element: <AddInventory />},
      {path: "/inventory-table", element: <InventoryTable />},
      {path: "/change-inventory", element: <ChangeInvetory />},
      {path: "login", element: <Login />},
    ],
  },
]);

export default App;
