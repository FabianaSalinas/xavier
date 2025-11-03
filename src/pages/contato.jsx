import React, { useState } from "react";
import { Send } from "lucide-react";


export default function Contato(){
const [enviado, setEnviado] = useState(false);
const handleSubmit = (e) => { e.preventDefault(); setEnviado(true); };
return (
<main className="min-h-screen bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-3xl sm:text-4xl font-extrabold text-teal-800">Contato</h1>
<p className="mt-2 text-slate-600">Preencha o formulário e retornaremos rapidamente com sua cotação.</p>
<form onSubmit={handleSubmit} className="mt-8 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="text-sm font-medium text-slate-700">Empresa</label>
<input required className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600" placeholder="Razão social / Nome fantasia"/>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Nome</label>
<input required className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600" />
</div>
<div>
<label className="text-sm font-medium text-slate-700">Telefone</label>
<input required type="tel" className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600" />
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium text-slate-700">E-mail</label>
<input required type="email" className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600" />
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium text-slate-700">Detalhes do envio</label>
<textarea rows={4} className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600" placeholder="Origem/Destino, volume, peso, frequência…"/>
</div>
<button type="submit" className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-teal-700 text-white font-semibold shadow hover:shadow-md">Enviar <Send className="h-5 w-5 ml-2"/></button>
{enviado && <p className="sm:col-span-2 text-sm text-emerald-600">Recebemos seu contato! Em breve retornaremos.</p>}
</form>
</div>
</main>
);
}