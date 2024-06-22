import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import "./index.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login/Login";
import CreateNew from "./components/CreateNew";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<CreateNew />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
