import React from "react";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";


export default function Regiao(){
const itens = [
"São Paulo (Capital)",
"ABC Paulista (Santo André, São Bernardo, São Caetano)",
"Guarulhos & Arujá",
"Osasco, Barueri, Carapicuíba",
"Suzano, Mogi das Cruzes",
"Cotia, Itapevi e região",
];


return (
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800">Cobertura Metropolitana</h2>
<p className="mt-3 text-slate-600">Atendemos toda a Grande São Paulo com prazos competitivos e janelas de coleta personalizadas.</p>
<ul className="mt-6 grid sm:grid-cols-2 gap-3">
{itens.map((t) => (
<li key={t} className="flex items-start gap-2 text-slate-700"><MapPin className="h-5 w-5 shrink-0 text-teal-600"/> {t}</li>
))}
</ul>
</div>
<div className="rounded-3xl p-8 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 text-white shadow-md">
<h3 className="text-2xl font-bold">Precisa de coleta hoje?</h3>
<p className="mt-2 text-white/90">Fale com nosso time e confira disponibilidade imediata para sua região.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<Link to="/contato" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white text-teal-800 font-semibold shadow hover:shadow-md"><Phone className="h-5 w-5 mr-2"/>Falar com Comercial</Link>
<a href="tel:+5511999999999" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl ring-1 ring-white text-white font-semibold hover:bg-white/10">Ligar agora</a>
</div>
</div>
</div>
);
}