import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
