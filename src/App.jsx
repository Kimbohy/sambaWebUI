import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import AdminPage from "./assets/components/AdminPage";
import Test from "./assets/components/Test";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);
  // setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  // console.log(localStorage.getItem("isLoggedIn"))
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/admin"
          element={isLoggedIn || localStorage.getItem("isLoggedIn") == "true" ? <AdminPage /> : <Navigate to="/login" />}
        />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
