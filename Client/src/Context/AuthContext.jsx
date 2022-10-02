import { useMemo, createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState(localStorage.getItem("user_id"));
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const logout = () => {
    localStorage.clear();
  };
  const values = useMemo(
    () => ({
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
    [id, setId, loading, setLoading, success, setSuccess, error, setError]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
