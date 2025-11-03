import React from "react";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";


export default function Sobre(){
return (
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">Compromisso com a eficiência</h2>
<p className="mt-3 text-slate-600">Somos especializados no transporte de cargas secas. Unimos processo, tecnologia e um time experiente para garantir entregas pontuais, com segurança e comunicação clara.</p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">Frota rastreada</span>
<span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">Seguro de carga</span>
<span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">Coleta programada</span>
<span className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-sm">Atendimento humanizado</span>
</div>
</div>
<div className="rounded-3xl p-8 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 text-white shadow-md">
<h3 className="text-2xl font-bold">Pronto para acelerar sua operação?</h3>
<p className="mt-2 text-white/90">Solicite uma cotação e receba um plano adequado ao seu volume e janela de coleta.</p>
<Link to="/contato" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white text-teal-800 font-semibold shadow hover:shadow-md">Solicitar cotação <Send className="h-5 w-5 ml-2"/></Link>
</div>
</div>
);
}