import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { FestivalPage } from "./components/FestivalPage.jsx";
import { EditorPage } from "./components/EditorPage.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-display">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival/:festivalId" element={<FestivalPage />} />
        <Route path="/edit/:festivalId/:templateId" element={<EditorPage />} />
      </Routes>
      {}
      <Footer />
    </div>
  );
}
