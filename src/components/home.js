import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Regiao from "./regiao";
import Sobre from "./sobre";
import Parceiros from "./parceiros";

/* ===== Helpers: inView + countUp (roda 1x quando aparece) ===== */
function useInView(ref, options = { threshold: 0.4 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      options
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);

  return inView;
}


function useCountUp(target, startWhen, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) {
      setValue(0); // 🔥 zera quando sai da tela
      return;
    }

    const start = performance.now();
    const from = 0;
    const to = Number(target) || 0;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, startWhen, duration]);

  return value;
}


export default function Home() {
  // ref do card de métricas (direita) para iniciar contagem quando aparecer
  const statsRef = useRef(null);
  const startCount = useInView(statsRef);

  const anos = useCountUp(10, startCount, 900);
  const entregasDia = useCountUp(500, startCount, 1100);
  const prazo = useCountUp(48, startCount, 900);
  const noPrazo = useCountUp(98, startCount, 1100);

  return (
    <>
      {/* hero */}
      <section className="relative">
        {/* Fundo */}
        <div
          className="h-[420px] md:h-[520px] w-full bg-center bg-cover"
          style={{ backgroundImage: "url('/img/hero-estrada.jpg')" }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/15" />

        {/* Conteúdo */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-6xl px-4 h-full flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Seu Parceiro em <br /> Logística e Transporte.
              </h1>
              <p className="mt-4 text-white/90 text-lg">
                Soluções rápidas e seguras para todo o Brasil.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-slate-900 font-semibold shadow"
                >
                  Saiba Mais
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-amber-500 text-white font-semibold shadow hover:bg-amber-600"
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de diferenciais - FULL WIDTH */}
        <div className="relative -mt-8 w-full">
          <div className="w-full bg-slate-50 border-t border-slate-200 shadow-sm">
            <div className="mx-auto max-w-6xl px-6 py-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    🚚
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Entrega Rápida</p>
                    <p className="text-sm text-slate-600">
                      Agilidade e pontualidade
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    🛡️
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Transporte Seguro</p>
                    <p className="text-sm text-slate-600">Cuidado com sua carga</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    🎧
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Atendimento Especializado
                    </p>
                    <p className="text-sm text-slate-600">Suporte com qualidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-slate-900">Nossos Serviços</h2>
          <p className="mt-2 text-slate-600">Soluções completas para suas necessidades.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* ===== ESQUERDA: 6 CARDS ===== */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-1.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Cargas Fracionadas</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Coleta e entrega com eficiência.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-2.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Cargas Completas</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Viagens dedicadas e seguras.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-3.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Logística Dedicada</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Operação sob medida.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-4.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Entrega Programada</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Agendamento e rotas otimizadas.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-5.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Separção</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Prioridade e rapidez.
                    </p>
                  </div>
                </div>

                {/* 6 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                  <div
                    className="h-36 bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('/img/servico-6.png')" }}
                  />
                  <div className="p-5">
                    <p className="font-bold text-slate-900">Carga rastreada</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Acompanhamento ativo da operação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== DIREITA: CARD ÚNICO COM CONTADORES + #0a6e89 ===== */}
            <div className="md:col-span-1">
              <div
                ref={statsRef}
                className="h-full rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200 p-6 flex flex-col justify-between"
                style={{ backgroundColor: "#0a6e89" }}
              >
                <div>
                  {/* 4 métricas com contador */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-3xl font-extrabold text-white">+{anos}</p>
                      <p className="mt-1 text-xs text-white/90">Experiência no mercado</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-3xl font-extrabold text-white">+{entregasDia}</p>
                      <p className="mt-1 text-xs text-white/90">Entregas/dia (operação ativa)</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-3xl font-extrabold text-white">Até {prazo}h</p>
                      <p className="mt-1 text-xs text-white/90">Prazo de entrega</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-3xl font-extrabold text-white">{noPrazo}%</p>
                      <p className="mt-1 text-xs text-white/90">No prazo (pontualidade)</p>
                    </div>
                  </div>

                  {/* 2 diferenciais (texto) */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-sm font-semibold text-white">Baixo índice de avarias</p>
                      <p className="text-xs text-white/90 mt-1">Cuidado com a carga</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 p-4">
                      <p className="text-sm font-semibold text-white">Operação monitorada</p>
                      <p className="text-xs text-white/90 mt-1">Acompanhamento contínuo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <motion.section
        id="cobertura"
        className="min-h-screen flex items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Regiao />
      </motion.section>

      {/* SOBRE */}
      <motion.section
        id="sobre"
        className="min-h-screen flex items-center bg-slate-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sobre />
        </div>
      </motion.section>

      {/* PARCEIROS */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Parceiros />
        </div>
      </motion.section>
    </>
  );
}
