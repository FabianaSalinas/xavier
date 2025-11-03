import React from "react";
import { motion } from "framer-motion";
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
  className="relative min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed text-gray-900"
  style={{ backgroundImage: "url('/img/hero.png')" }} // 👈 imagem de fundo
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {/* camada branca translúcida */}
  <div className="absolute inset-0 bg-white/70"></div>

  {/* conteúdo principal */}
  <motion.div
    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 lg:pt-36"
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* título */}
    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-[#0a6e8a] mb-6 drop-shadow-md">
      Logística eficiente para <br className="hidden sm:block" />
      grandes distribuidores
    </h1>

    {/* subtítulo */}
    <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
      Atendimento rápido, seguro e com rastreamento. Soluções sob medida
      para sua empresa.
    </p>

    {/* botões */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
      <Link
        to="/contato"
        className="px-8 py-3 rounded-full border border-gray-800 text-gray-900 font-medium hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Fale com o comercial <Send className="inline-block ml-2 h-5 w-5" />
      </Link>
      <a
        href="#servicos"
        className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition duration-300"
      >
        Conheça os serviços
      </a>
    </div>

    {/* ícones inferiores */}
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" />
        <span>Seguro da carga</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <span>Coleta ágil</span>
      </div>
      <div className="flex items-center gap-2">
        <Truck className="h-5 w-5" />
        <span>Frota rastreada</span>
      </div>
    </motion.div>
  </motion.div>

  {/* movimento suave no fundo */}
  <motion.div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/img/hero.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    initial={{ scale: 1 }}
    whileInView={{ scale: 1.1 }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
  />
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
              Operamos com cargas secas em toda a Grande São Paulo: coletas programadas,
              entregas expressas e distribuição fracionada.
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

