// import { createBrowserRouter, Navigate } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import First from "./pages/First";
// import AddInventory from "./pages/Addinventory";
// import InventoryTable from "./pages/Invetorytable";
// import ChangeInvetory from "./pages/ChangeInvetory";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// const ProtectedRoute = ({ element }) => {
//   const token = localStorage.getItem("token");
//   return token ? element : <Navigate to="/login" />;
// };

// const App = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   {
//     path: "/",
//     element: <ProtectedRoute element={<First />} />,
//     children: [
//       { path: "", element: <ProtectedRoute element={<AddInventory />} /> },
//       { path: "/add-inventory", element: <ProtectedRoute element={<AddInventory />} /> },
//       { path: "/inventory-table", element: <ProtectedRoute element={<InventoryTable />} /> },
//       { path: "/change-inventory", element: <ProtectedRoute element={<ChangeInvetory />} /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

// export default App;



import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import First from "./pages/First";
import AddInventory from "./pages/Addinventory";
import InventoryTable from "./pages/Invetorytable";
import ChangeInventory from "./pages/ChangeInvetory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRouter.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  const router = createBrowserRouter([
    { path: "/login", element: <Login setIsLogin={setIsLogin} /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <ProtectedRoute element={<First isLogin={isLogin} setIsLogin={setIsLogin} />} />,
      children: [
        { path: "", element: <ProtectedRoute element={<AddInventory />} /> },
        { path: "/add-inventory", element: <ProtectedRoute element={<AddInventory />} /> },
        { path: "/inventory-table", element: <ProtectedRoute element={<InventoryTable />} /> },
        { path: "/change-inventory", element: <ProtectedRoute element={<ChangeInventory />} /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  // return <RouterProvider router={router} />;
}

export default App;

