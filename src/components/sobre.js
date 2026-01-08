import React from "react";

export default function Sobre() {
  const frota = [
    {
      nome: "Van",
      descricao: "Ideal para entregas urbanas e cargas leves",
      imagem: "/img/van.png",
    },
    {
      nome: "Caminhão Baú",
      descricao: "Perfeito para cargas médias e grandes volumes",
      imagem: "/img/34.png",
    },
    {
      nome: "Veículo compacto de carga",
      descricao: "Agilidade para pequenas entregas",
      imagem: "/img/fiorino.png",
    },
    {
      nome: "Caminhão leve",
      descricao: "Versátil para operações regionais",
      imagem: "/img/hr.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* NOVO BLOCO: SOBRE A EMPRESA (esquerda texto | direita imagem) */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto (esquerda) */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">
              Sobre a Xavier Logística
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Fundada em 2009, a Xavier Logística e Transportes, anteriormente conhecida como HRBC Transporte e Logística, é referência no transporte de cargas secas, com atuação estratégica na região de Guarulhos.

Investimos continuamente na renovação da frota, em tecnologia e na capacitação profissional da nossa equipe, garantindo operações seguras, ágeis e alinhadas às necessidades de cada cliente.

Nosso compromisso é oferecer qualidade, segurança e o melhor custo-benefício, transformando a logística em um processo simples, confiável e eficiente. Atuamos com foco total na pontualidade, na otimização das rotas e na comunicação clara durante toda a operação.

Contamos com um galpão de 5.000 m², estrutura que nos permite atender com eficiência diferentes volumes de carga, oferecendo flexibilidade, organização e rapidez para todos os nossos parceiros.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Nosso compromisso é simplificar a sua rotina: coleta programada,
              atendimento humanizado e frota pronta para atender diferentes volumes
              e rotas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
                Atendimento rápido
              </span>
              <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
                Operação segura
              </span>
              <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
                Entrega pontual
              </span>
            </div>
          </div>

          {/* Imagem (direita) */}
          <div className="rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-200 bg-slate-50">
            <img
              src="/img/sobre.png"
              alt="Xavier Logística e Transportes"
              className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* BLOCO: NOSSA FROTA (texto centralizado) */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">
            Nossa frota
          </h2>

          <p className="mt-4 text-slate-600">
            Somos especializados no transporte de cargas secas. Unimos processo,
            tecnologia e um time experiente para garantir entregas pontuais, com
            segurança e comunicação clara.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
              Frota rastreada
            </span>
            <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
              Seguro de carga
            </span>
            <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
              Coleta programada
            </span>
            <span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">
              Atendimento humanizado
            </span>
          </div>
        </div>

        {/* GRID DA FROTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {frota.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="h-52 bg-gray-50 flex items-center justify-center">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="h-full w-full object-contain p-4"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-slate-800">
                  {item.nome}
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
