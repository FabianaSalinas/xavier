import React from "react";
import { CheckCircle } from "lucide-react";

export default function Regiao() {
  return (
    <section id="regiao" className="w-full py-20 bg-slate-50">
      {/* CONTAINER CENTRAL */}
      <div className="max-w-6xl mx-auto px-4">
        {/* TÍTULO */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Regiões Atendidas
          </h2>
          <p className="mt-4 text-slate-600">
            Atendemos principalmente a Grande São Paulo e regiões estratégicas,
            garantindo agilidade e segurança em cada operação.
          </p>
        </div>

        {/* CARD CENTRALIZADO */}
        <div className="mt-12 flex justify-center">
          <div className="w-full bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* MAPA COM MARCADORES */}
              <div className="p-8 bg-slate-50 flex items-center justify-center">
                <img
                  src="/img/regiao.png"
                  alt="Mapa do Brasil com regiões atendidas"
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              {/* LISTA */}
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-semibold text-teal-800">
                  Atendemos principalmente:
                </h3>

                <ul className="mt-6 space-y-4 text-slate-700">
                  {[
                    "São Paulo (Capital)",
                    "ABC Paulista — Santo André, São Bernardo, São Caetano",
                    "Guarulhos, Arujá e região",
                    "Osasco, Barueri, Carapicuíba e proximidades",
                    "Suzano, Mogi das Cruzes e Alto Tietê",
                    "Cotia, Itapevi, Jandira e cidades vizinhas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}

                  <li className="flex items-start gap-3 font-semibold text-teal-700">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    <span>Interior sob consulta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
