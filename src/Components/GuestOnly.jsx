import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestOnly = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedin);

  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

export default GuestOnly;
