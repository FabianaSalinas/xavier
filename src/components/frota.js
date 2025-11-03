import React from "react";
import { Truck, Clock, ShieldCheck } from "lucide-react";


const Card = ({Icon, title, desc}) => (
<div className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md">
<div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 text-white mb-4">
<Icon className="h-6 w-6"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">{title}</h3>
<p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
</div>
);


export default function Frota(){
return (
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<Card Icon={Truck} title="Carga Fracionada" desc="Coleta e entregas planejadas, reduzindo custos e prazos com visibilidade total." />
<Card Icon={Clock} title="Express e Same Day" desc="Atendimento ágil para envios urgentes na capital e região metropolitana." />
<Card Icon={ShieldCheck} title="Gestão & Seguro" desc="Rastreamento em tempo real, equipe especializada e seguro da carga." />
</div>
);
}