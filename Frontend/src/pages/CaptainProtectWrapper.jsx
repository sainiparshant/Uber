import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return; // Stop execution if no token
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptain(response.data.captain);
        } else {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [token, navigate, setCaptain]); // Added `navigate` and `setCaptain` to dependencies

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
