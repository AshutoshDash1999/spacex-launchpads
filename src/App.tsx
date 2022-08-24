import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Launches from "./Pages/Launches/Launches";
function App() {
  return (
    <div className="p-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutLaunch" element={<Launches />} />
      </Routes>
    </div>
  );
}

export default App;
