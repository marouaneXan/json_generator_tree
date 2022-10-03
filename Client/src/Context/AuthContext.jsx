import { useMemo, createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [connected,setConnected]=useState(localStorage.getItem("logged"))
  const [id, setId] = useState(localStorage.getItem("user_id"));
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const logout = () => {
    localStorage.clear();
    setConnected(false)
    navigate('/login')
  };
  const values = useMemo(
    () => ({
      connected,setConnected,
      id,
      setId,
      loading,
      setLoading,
      success,
      setSuccess,
      error,
      setError,
      logout
    }),
    [connected,setConnected, id, setId, loading, setLoading, success, setSuccess, error, setError]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
