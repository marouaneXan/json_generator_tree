import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const { connected } = useContext(AuthContext);
  useEffect(() => {
    !connected ? navigate("/login") : "";
  }, [connected]);
  
  return <div></div>;
};

export default Dashboard;
