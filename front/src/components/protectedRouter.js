// import { Navigate } from "react-router-dom";\
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
const navigate = useNavigate();
  if (!token) {
    // return <Navigate to="/login" replace />;
    navigate("/login")
  }

  return children;
};

export default ProtectedRoute;
