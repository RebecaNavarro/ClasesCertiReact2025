import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { useAuthStore } from "../store/authStore";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  // const { isAuth } = useAuth();
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;