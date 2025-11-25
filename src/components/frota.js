import React from "react";
import { Truck, Clock, ShieldCheck } from "lucide-react";

const Card = ({ Icon, title, desc }) => (
  <div className="p-7 rounded-3xl bg-white border border-brand-background shadow-soft hover:shadow-lg transition-all duration-300">
    {/* Ícone premium */}
    <div className="w-14 h-14 rounded-2xl bg-brand-secondary/20 text-brand-primary flex items-center justify-center mb-5">
      <Icon className="h-7 w-7" />
    </div>

    {/* Título */}
    <h3 className="text-xl font-semibold text-brand-dark mb-2">
      {title}
    </h3>

    {/* Descrição */}
    <p className="text-sm text-brand-dark/70 leading-relaxed">
      {desc}
    </p>

    {/* Link */}
    <button className="mt-4 text-brand-primary hover:text-brand-secondary font-medium">
      Saiba mais →
    </button>
  </div>
);

export default function Frota() {
  return (
    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        Icon={Truck}
        title="Carga Fracionada"
        desc="Coletas e entregas planejadas, reduzindo custos e oferecendo visibilidade completa."
      />

      <Card
        Icon={Clock}
        title="Expresso & Same Day"
        desc="Movimentação ultrarrápida para demandas urgentes na capital e RMSP."
      />

      <Card
        Icon={ShieldCheck}
        title="Gestão & Seguro"
        desc="Operação monitorada, seguro de carga e suporte especializado."
      />
    </div>
  );
}
