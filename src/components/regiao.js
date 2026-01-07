import React from "react";

export default function Regiao() {
  return (
    <section
      id="regiao"
      className="w-full bg-white flex flex-col lg:flex-row items-start justify-center"
    >

      

      {/* 🔽 TEXTO CENTRALIZADO E COM PADDING TOP */}
      <div className="w-full lg:w-1/2 pt-[120px] text-center px-6 pb-16">

        <h2 className="text-4xl font-extrabold text-teal-800">
          Cobertura Metropolitana e Interior Próximo
        </h2>

        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Atendemos toda a Grande São Paulo e também cidades próximas do interior,
          garantindo rapidez, previsibilidade e horários de coleta flexíveis.
        </p>

        <h3 className="mt-10 text-2xl font-semibold text-teal-700">
          Atendemos principalmente:
        </h3>

        <ul className="mt-6 space-y-3 text-slate-700 max-w-xl mx-auto">
          <li>São Paulo (Capital)</li>
          <li>ABC Paulista — Santo André, São Bernardo, São Caetano</li>
          <li>Guarulhos, Arujá e região</li>
          <li>Osasco, Barueri, Carapicuíba e proximidades</li>
          <li>Suzano, Mogi das Cruzes e Alto Tietê</li>
          <li>Cotia, Itapevi, Jandira e cidades vizinhas</li>
          <li className="font-medium text-teal-700">
            Interior sob consulta 
          </li>
        </ul>

      </div>
      {/* ⬆️ IMAGEM COLADA AO TOPO */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/img/cobertura.png"
          alt="Mapa de cobertura"
          className="w-full h-auto object-cover object-top"
        />
      </div>
    </section>
  );
}
