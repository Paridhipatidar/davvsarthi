import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  role: "student" | "admin";
}

const ProtectedRoute = ({ children, role }: Props) => {
  const savedRole = localStorage.getItem("role");

  if (!savedRole) {
    return <Navigate to="/login" replace />;
  }

  if (savedRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
