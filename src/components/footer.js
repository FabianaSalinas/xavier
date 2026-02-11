// src/components/footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Xavier Logística" className="h-9 w-auto" />
          </div>
          <p className="mt-3 text-slate-600 text-sm">
            Transporte de cargas secas na Grande São Paulo. Prazo, segurança e transparência.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Fale com a gente</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal-700" /> (11) 2382-1854</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal-700" /> comercial@xavierlogistica.com.br</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-teal-700" /> @xavierlogistica</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Rotas</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link to="/">Início</Link></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cobertura">Cobertura</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/trabalhe-conosco">Trabalhe Conosco</Link></li>
            <li><Link to="/rastreio">localize sua carga</Link></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Xavier Logística e Transportes. Todos os direitos reservados.
      </div>
    </footer>
  );
}
