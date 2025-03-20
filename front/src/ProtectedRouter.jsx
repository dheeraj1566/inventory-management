import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  if (!localStorage) console.log("NO LOACALSTORAGE")
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
