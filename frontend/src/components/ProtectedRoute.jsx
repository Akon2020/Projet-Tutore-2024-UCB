import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/auth/verifytoken")
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.error("Erreur d'authentification:", err);
        setIsAuthenticated(false);
        navigate("/login");
      });
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
