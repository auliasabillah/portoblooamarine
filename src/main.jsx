import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/App.jsx";
import IllustrationPage from "./page/see_more/illustrationpage.jsx";
import GameAssetPage from "./page/see_more/gameconcept.jsx";
import MerchPage from "./page/see_more/merch.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/illustration" element={<IllustrationPage />} />
        <Route path="/gameconcept" element={<GameAssetPage />} />
        <Route path="/merchandise" element={<MerchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
