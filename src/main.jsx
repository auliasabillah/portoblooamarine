import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App.jsx";
import IllustrationPage from "./illustrationpage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/illustration" element={<IllustrationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
