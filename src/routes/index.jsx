import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/home";
import Contato from "../pages/contato";
import TrabalheConosco from "../pages/trabalheConosco";
import Rastreio from "../pages/rastreio"; // ✅ NOVO

import Header from "../components/header";
import Footer from "../components/footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />

        {/* ✅ NOVA PÁGINA */}
        <Route path="/rastreio" element={<Rastreio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
