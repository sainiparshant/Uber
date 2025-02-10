import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]); // Runs whenever token changes

  return token ? <>{children}</> : null; // Prevent rendering if there's no token
};

export default UserProtectWrapper;
