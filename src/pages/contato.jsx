import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center">
      <div className="mx-auto max-w-6xl w-full px-4 py-12">
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden lg:h-[560px]">

          {/* ESQUERDA: IMAGEM OCUPANDO TODO ESPAÇO */}
          <div
            className="hidden lg:block"
            style={{
              backgroundImage: "url('/img/contato-ilustracao.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          {/* DIREITA: FORM */}
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-teal-800">
              Entre em Contato
            </h1>
            <p className="mt-2 text-slate-600">
              Preencha o formulário e retornaremos rapidamente com sua cotação.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Empresa</label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                  placeholder="Razão social / Nome fantasia"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Nome</label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Telefone</label>
                <input
                  required
                  type="tel"
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">E-mail</label>
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Detalhes do envio</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                  placeholder="Origem/Destino, volume, peso, frequência…"
                />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-teal-700 text-white font-semibold shadow hover:shadow-md"
              >
                Enviar <Send className="h-5 w-5 ml-2" />
              </button>

              {enviado && (
                <p className="sm:col-span-2 text-sm text-emerald-600">
                  Recebemos seu contato! Em breve retornaremos.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
