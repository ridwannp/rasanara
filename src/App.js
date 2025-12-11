import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./component/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
