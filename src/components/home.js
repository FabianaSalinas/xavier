import React from "react";
import { motion } from "framer-motion";
import Regiao from "./regiao";
import Sobre from "./sobre";
import Parceiros from "./parceiros";


export default function Home() {
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

  {/* Faixa de diferenciais (igual a faixa com ícones da imagem 2) */}
  <div className="relative -mt-8">
    <div className="mx-auto max-w-6xl px-4">
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">🚚</div>
          <div>
            <p className="font-semibold text-slate-900">Entrega Rápida</p>
            <p className="text-sm text-slate-600">Agilidade e pontualidade</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">🛡️</div>
          <div>
            <p className="font-semibold text-slate-900">Transporte Seguro</p>
            <p className="text-sm text-slate-600">Cuidado com sua carga</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">🎧</div>
          <div>
            <p className="font-semibold text-slate-900">Atendimento Especializado</p>
            <p className="text-sm text-slate-600">Suporte com qualidade</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
   
    {/* SERVIÇOS – versão final ajustada */}
<section id="servicos" className="py-12">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-3xl font-extrabold text-slate-900">Nossos Serviços</h2>
    <p className="mt-2 text-slate-600">Soluções completas para suas necessidades.</p>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Cards pequenos */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
        <div className="h-36 bg-slate-100 bg-cover bg-center" style={{ backgroundImage: "url('/img/servico-1.png')" }} />
        <div className="p-5">
          <p className="font-bold text-slate-900">Cargas Fracionadas</p>
          <p className="text-sm text-slate-600 mt-1">Coleta e entrega com eficiência.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
        <div className="h-36 bg-slate-100 bg-cover bg-center" style={{ backgroundImage: "url('/img/servico-2.png')" }} />
        <div className="p-5">
          <p className="font-bold text-slate-900">Cargas Completas</p>
          <p className="text-sm text-slate-600 mt-1">Viagens dedicadas e seguras.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
        <div className="h-36 bg-slate-100 bg-cover bg-center" style={{ backgroundImage: "url('/img/servico-3.png')" }} />
        <div className="p-5">
          <p className="font-bold text-slate-900">Logística Dedicada</p>
          <p className="text-sm text-slate-600 mt-1">Operação sob medida.</p>
        </div>
      </div>

      {/* Card grande de números (igual o bloco da imagem 2) */}
      <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200 bg-slate-900 text-white p-6 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-3xl font-extrabold">+10</p>
            <p className="text-xs text-white/80">Anos de Experiência</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">+5k</p>
            <p className="text-xs text-white/80">Entregas</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">99%</p>
            <p className="text-xs text-white/80">Satisfação</p>
          </div>
        </div>

        <a
          href="#servicos"
          className="mt-6 inline-flex items-center justify-center h-11 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold"
        >
          Ver Todos os Serviços
        </a>
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
  {/* 🔥 REMOVIDO: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
  
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

