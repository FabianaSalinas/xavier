import React, { useState } from "react";

export default function TrabalheConosco() {
  const [ok, setOk] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/img/trabalhe-conosco.png')",
      }}
    >
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trabalhe Conosco
          </h1>
          <p className="mt-2 text-slate-200">
            Motoristas, ajudantes e operação. Envie seus dados e entraremos em contato.
          </p>

          <form
            onSubmit={submit}
            className="mt-8 p-6 bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 grid sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-sm font-medium text-slate-700">
                Nome completo
              </label>
              <input
                required
                className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Telefone
              </label>
              <input
                required
                type="tel"
                className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Função desejada
              </label>
              <select className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600">
                <option>Motorista</option>
                <option>Ajudante de Carga</option>
                <option>Operador Logístico</option>
                <option>Administrativo</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Experiência
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                placeholder="Resumo da experiência, rotas, disponibilidade…"
              />
            </div>

            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-teal-700 text-white font-semibold shadow hover:shadow-md"
            >
              Enviar cadastro
            </button>

            {ok && (
              <p className="sm:col-span-2 text-sm text-emerald-600">
                Cadastro recebido! Em breve entraremos em contato.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
