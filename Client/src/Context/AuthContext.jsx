import { useMemo, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  //State
  const navigate = useNavigate();
  const [connected, setConnected] = useState(localStorage.getItem("logged"));
  const [id, setId] = useState(localStorage.getItem("user_id"));
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //logout
  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      setConnected(false);
      navigate("/login");
    }, 3000);
  };

  const values = useMemo(
    () => ({
      connected,
      setConnected,
      id,
      setId,
      loading,
      setLoading,
      success,
      setSuccess,
      error,
      setError,
      logout,
    }),
    [
      connected,
      setConnected,
      id,
      setId,
      loading,
      setLoading,
      success,
      setSuccess,
      error,
      setError,
    ]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
