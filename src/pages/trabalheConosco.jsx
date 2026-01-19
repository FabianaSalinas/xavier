import React, { useState } from "react";
import { Send } from "lucide-react";

export default function TrabalheConosco() {
  const [ok, setOk] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setOk(true);
    setTimeout(() => setOk(false), 4000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center">
      <div className="mx-auto max-w-6xl w-full px-4 py-12">
         <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
          {/* ESQUERDA: IMAGEM */}
          <div
            className="hidden lg:block"
            style={{
              backgroundImage: "url('/img/trabalhe-conosco.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          {/* DIREITA: FORM */}
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-teal-800">
              Trabalhe Conosco
            </h1>
            <p className="mt-2 text-slate-600">
              Motoristas, ajudantes e operação. Envie seus dados e entraremos em
              contato.
            </p>

            <form
              onSubmit={submit}
              className="mt-8 grid sm:grid-cols-2 gap-4"
            >
              <div className="sm:col-span-2">
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

              <div className="sm:col-span-2">
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

      

              {/* Opcional: upload de currículo (se você quiser) */}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Currículo (opcional)
                </label>
                <input
                  type="file"
                  className="mt-1 w-full rounded-xl border-slate-300 bg-white file:mr-4 file:rounded-lg file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-slate-700 hover:file:bg-slate-200"
                />
                <p className="mt-1 text-xs text-slate-500">
                  (Se você ainda não vai enviar por e-mail, pode deixar só visual por enquanto)
                </p>
              </div>

              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-teal-700 text-white font-semibold shadow hover:shadow-md"
              >
                Enviar cadastro <Send className="h-5 w-5 ml-2" />
              </button>

              {ok && (
                <p className="sm:col-span-2 text-sm text-emerald-600">
                  Cadastro recebido! Em breve entraremos em contato.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
