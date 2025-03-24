import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import Signup from "./pages/Signup";

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/map"
          element={
            <PrivateRoute>
              <Map />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
