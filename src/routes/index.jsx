import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/home";
import Contato from "../pages/contato";
import TrabalheConosco from "../pages/trabalheConosco"; // <- case igual ao arquivo

import Header from "../components/header";  // <- minúsculo
import Footer from "../components/footer";  // <- minúsculo

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
