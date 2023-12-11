
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import prop-types
import { useAuthStore } from "../store/store";

export const AuthorizeUser = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};

AuthorizeUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ProtectRoute = ({ children }) => {
  const username = useAuthStore.getState().auth.username;

  if (!username) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
