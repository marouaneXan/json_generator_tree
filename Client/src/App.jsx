import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
function App() {
  const [id, setId] = useState(localStorage.getItem("user_id"));
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar id={id} />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                id={id}
                setId={setId}
                success={success}
                setSuccess={setSuccess}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
