import React from "react";

export default function Parceiros() {
  const parceiros = [
    "/img/servimed.png",
    "/img/pp.png",
    "/img/ecb.png",
    "/img/tr.png",
    "/img/perola.png",
    "/img/bentevi1.png",
    "/img/destro.png",
    "/img/spani.png",
    "/img/unica.png",
    "/img/rv.png",
    "/img/pronatu.png",
    "/img/soares.png",
  ];

  // duplicamos o array — isso garante continuidade visual
  const logos = [...parceiros, ...parceiros];

  return (
    <section className="py-12 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-extrabold text-teal-800 mb-10">
        Nossos Parceiros
      </h2>

      {/* container principal */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-marquee space-x-16 w-[200%]">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Parceiro ${i + 1}`}
              className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
