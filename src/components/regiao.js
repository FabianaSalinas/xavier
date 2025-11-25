import React from "react";
import { MapPin } from "lucide-react";

export default function Regiao() {
  const itens = [
    "São Paulo (Capital)",
    "ABC Paulista (Santo André, São Bernardo, São Caetano)",
    "Guarulhos & Arujá",
    "Osasco, Barueri, Carapicuíba",
    "Suzano, Mogi das Cruzes",
    "Cotia, Itapevi e região",
  ];

  return (
    <section id="cobertura" className="min-h-screen flex items-center">
      
      {/* --- LADO ESQUERDO (MANTIDO COMO ESTAVA) --- */}
      <div className="w-1/2 pr-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">
          Cobertura Metropolitana
        </h2>

        <p className="mt-3 text-slate-600">
          Atendemos toda a Grande São Paulo com prazos competitivos e janelas de coleta personalizadas.
        </p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {itens.map((t) => (
            <li key={t} className="flex items-start gap-2 text-slate-700">
              <MapPin className="h-5 w-5 shrink-0 text-teal-600" /> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* --- LADO DIREITO (IMAGEM FULL VERTICAL + HORIZONTAL ATÉ O MEIO) --- */}
      <div className="w-1/2 h-full">
        <img
          src="/img/cobertura.png"   // coloque sua imagem aqui
          alt="Mapa de cobertura"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
