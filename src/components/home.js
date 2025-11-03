import React from "react";
import { motion } from "framer-motion"; // 👈 IMPORTA AQUI
import Frota from "./frota";
import Regiao from "./regiao";
import Sobre from "./sobre";
import Parceiros from "./parceiros";
import { Link } from "react-router-dom";
import { Send, ShieldCheck, Clock, Truck } from "lucide-react";

export default function Home() {
  return (
    <>
     {/* HERO */}
<motion.section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden text-white"
  style={{ backgroundImage: "url('/img/principal.png')" }} // 👈 use aqui o nome da sua imagem
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  {/* camada de cor com degradê (película) */}
  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/80 to-emerald-700/70 mix-blend-multiply"></div>

  {/* itens decorativos sobre a imagem */}
  <div className="absolute top-10 left-10 flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/30 flex items-center justify-center">
      <Truck className="w-8 h-8 text-white" />
    </div>
    <span className="mt-2 text-sm text-white/80">Transporte rápido</span>
  </div>

  <div className="absolute bottom-10 right-10 flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/30 flex items-center justify-center">
      <ShieldCheck className="w-8 h-8 text-white" />
    </div>
    <span className="mt-2 text-sm text-white/80">Seguro de carga</span>
  </div>

  {/* conteúdo principal */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
        Logística eficiente para grandes distribuidores
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-teal-50/90 max-w-xl drop-shadow">
          Atendimento rápido, seguro e com rastreamento. Soluções sob medida para sua empresa.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white text-teal-800 font-semibold shadow hover:shadow-md"
          >
            Fale com o comercial
           <Send className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl ring-1 ring-white/70 text-white font-semibold hover:bg-white/10"
          >
            Conheça os serviços
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-teal-50/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" /> Seguro da carga
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" /> Coleta ágil
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" /> Frota rastreada
          </div>
        </div>
      </div>

      {/* logo central */}
      {/*<div className="relative">
        <div className="relative rounded-3xl shadow-xl bg-white/10 p-8 ring-1 ring-white/20">
          <img
            src="/img/logo.png"
            alt="Logo Xavier"
            className="mx-auto h-40 sm:h-52 w-auto drop-shadow-lg"
          />
        </div>
      </div>*/}
    </div>
  </div>
</motion.section>


      {/* SERVIÇOS */}
      <motion.section
        id="servicos"
        className="min-h-screen flex items-center bg-slate-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">
              Soluções de Transporte
            </h2>
            <p className="mt-3 text-slate-600">
              Operamos com cargas secas em toda a Grande São Paulo: coletas programadas, entregas expressas e distribuição fracionada.
            </p>
          </div>
          <Frota />
        </div>
      </motion.section>

      {/* COBERTURA */}
      <motion.section
        id="cobertura"
        className="min-h-screen flex items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Regiao />
        </div>
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
