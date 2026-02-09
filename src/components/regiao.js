import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Regiao() {
  const IMG_SRC = "/img/regiao-premium.png";
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImgOk(true);
    img.onerror = () => setImgOk(false);
    img.src = IMG_SRC;
  }, []);

  // ✅ Configurações do layout:
  // IMG_W = largura do painel da imagem (dominante, ~65%)
  // RESERVED = quanto espaço a gente "tira" da esquerda pra não invadir a imagem
  //          (menor que IMG_W para dar aquele visual "mais aberto", sem esmagar)
  const IMG_W = "clamp(620px, 65vw, 1040px)";
  const RESERVED = "clamp(460px, 42vw, 720px)";

  return (
    <section id="regiao" className="relative w-full bg-slate-50 overflow-hidden">
      {/* ✅ Painel da direita FULL-BLEED */}
      {imgOk && (
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 z-0"
          style={{ width: IMG_W }}
        >
          <img
            src={IMG_SRC}
            alt="Regiões atendidas"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* overlay leve */}
          <div className="absolute inset-0 bg-white/10" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* ✅ IMPORTANTE:
            - NÃO reservamos a largura inteira da imagem, senão espreme a esquerda.
            - Reservamos menos (RESERVED) para a esquerda ficar larga como a imagem 1.
        */}
        <div style={{ paddingRight: imgOk ? RESERVED : undefined }}>
          {/* ✅ Empurra um pouco MAIS para a esquerda (como você pediu) */}
          <div className="max-w-[640px] min-w-[520px] ">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Regiões Atendidas
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-[620px] pr-[60px]">
              Atendemos principalmente a Grande São Paulo e regiões estratégicas,
              garantindo agilidade e segurança em cada operação. Especialistas na
              distribuição de cargas secas para supermercados e farmácias.
            </p>

            <div className="mt-10 bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-teal-800">
                Atendemos principalmente:
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  "São Paulo (Capital)",
                  "ABC Paulista — Santo André, São Bernardo e São Caetano",
                  "Guarulhos, Arujá e região",
                  "Ferraz de Vasconcelos, Poá e proximidades",
                  "Igaratá, Santa Isabel e cidades vizinhas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}

                <li className="flex items-start gap-3 font-semibold text-slate-700">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-slate-500" />
                  <span>Interior sob consulta</span>
                </li>
              </ul>
            </div>

            {!imgOk && (
              <p className="mt-6 text-sm text-slate-500">
                (Não encontrei a imagem em{" "}
                <span className="font-mono">{IMG_SRC}</span>. Verifique em{" "}
                <span className="font-mono">public/img/</span>.)
              </p>
            )}
          </div>

          {/* ✅ Mobile: imagem embaixo */}
          <div className="mt-10 lg:hidden">
            <div className="w-full rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-slate-100 min-h-[320px]">
              <img
                src={IMG_SRC}
                alt="Regiões atendidas"
                className="w-full h-full object-cover"
                onError={() => setImgOk(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
