import React from "react";
import "./index.css";
import App from "./App";
import ToolsOverview from "./components/pages/routed-pages/tools-overview";
import ToolPage from "./components/pages/routed-pages/full-tool-page";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tools/*" element={<ToolsOverview />} />
      <Route path={`tools/:tid`} element={<ToolPage />} />
    </Routes>
  </BrowserRouter>
);
