// src/components/header.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
  <img
    src="/img/logoxavier.png"
    alt="Xavier Logística"
    className="h-14 sm:h-16 md:h-20 w-auto"
  />
  {/*<span className="flex flex-col leading-tight">
    <span className="font-extrabold text-lg sm:text-xl text-slate-900">Xavier</span>
    <span className="text-sm sm:text-base text-slate-600">Logística e Transportes</span>
  </span>*/}
</Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-sm font-medium text-slate-700 hover:text-teal-700">Início</NavLink>
            <a href="#servicos" className="text-sm font-medium text-slate-700 hover:text-teal-700">Serviços</a>
            <a href="#cobertura" className="text-sm font-medium text-slate-700 hover:text-teal-700">Cobertura</a>
            <a href="#sobre" className="text-sm font-medium text-slate-700 hover:text-teal-700">Sobre</a>
            <NavLink to="/contato" className="text-sm font-medium text-slate-700 hover:text-teal-700">Contato</NavLink>
            <NavLink to="/trabalhe-conosco" className="text-sm font-medium text-slate-700 hover:text-teal-700">Trabalhe Conosco</NavLink>
  <NavLink
  to="/rastreio"
  className={({ isActive }) =>
    `
    relative inline-flex items-center gap-2
    px-5 py-2.5 rounded-xl
    font-semibold text-sm
    transition-all duration-300
    shadow-md
    ${
      isActive
        ? "bg-[#095c73] text-white shadow-[0_8px_20px_rgba(10,110,137,0.4)]"
        : "bg-[#0a6e89] text-white hover:bg-[#095c73] hover:shadow-[0_8px_20px_rgba(10,110,137,0.4)]"
    }
    `
  }
>
  🚚 Localize sua carga
</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}