import React, { useState } from "react";
import { Search, ExternalLink, Truck, MapPin } from "lucide-react";

export default function Rastreio() {
  const [nf, setNf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [doc, setDoc] = useState(null);

  const buscar = async (e) => {
    e.preventDefault();
    setErro("");
    setDoc(null);

    const documentNumber = nf.trim();
    const cnpjValue = cnpj.trim();

    if (!documentNumber || !cnpjValue) {
      setErro("Digite a NF e o CNPJ do cliente.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `/api/getStatus?documentNumber=${encodeURIComponent(documentNumber)}&cnpj=${encodeURIComponent(cnpjValue)}`
      );

      const data = await res.json().catch(() => ({}));

      // a API pode retornar 200 mesmo sem documento (user_message)
      const first = data?.response_data?.[0]?.Documento || null;

      if (!res.ok) {
        throw new Error(data?.user_message || "Erro ao consultar rastreio.");
      }

      if (!first) {
        setErro(data?.user_message || "Documento não encontrado.");
        return;
      }

      setDoc(first);
    } catch (err) {
      setErro(err?.message || "Falha ao consultar rastreio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Rastrear entrega
            </h1>
            <p className="mt-2 text-slate-600">
              Digite a <b>NF</b> e o <b>CNPJ do cliente</b> para acompanhar o status.
            </p>

            <form onSubmit={buscar} className="mt-8 grid gap-3 sm:grid-cols-3">
              <input
                value={nf}
                onChange={(e) => setNf(e.target.value)}
                className="w-full rounded-2xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                placeholder="NF (ex: 271410)"
              />
              <input
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                className="w-full rounded-2xl border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                placeholder="CNPJ do cliente (somente números)"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center h-11 px-6 rounded-2xl bg-[#0a6e89] text-white font-semibold shadow hover:shadow-md disabled:opacity-60"
              >
                {loading ? "Consultando..." : "Buscar"}{" "}
                <Search className="h-5 w-5 ml-2" />
              </button>
            </form>

            {erro && <p className="mt-4 text-sm text-red-600">{erro}</p>}
          </div>

          {doc && (
            <div className="border-t border-slate-200 bg-slate-50">
              <div className="p-8 sm:p-10 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 bg-white rounded-3xl ring-1 ring-slate-200 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">NF</p>
                      <p className="text-2xl font-extrabold text-slate-900">
                        {doc.NumeroNF}
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Transportadora: {doc.NomeTransportadora || "—"}
                      </p>
                    </div>

                    {doc.LinkTracking && (
                      <a
                        href={doc.LinkTracking}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center h-10 px-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800"
                      >
                        Abrir tracking <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    )}
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold">
                        <Truck className="h-5 w-5" />
                        Status
                      </div>
                      <p className="mt-1 text-slate-700">
                        {doc.Status} — {doc.DescricaoStatus}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold">
                        <MapPin className="h-5 w-5" />
                        Destino
                      </div>
                      <p className="mt-1 text-slate-700">{doc.Nome}</p>
                      <p className="text-sm text-slate-600 mt-1">
                        {doc.Cidade}/{doc.Estado}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Atualização: {doc.DataHora}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl ring-1 ring-slate-200 p-6">
                  <p className="font-semibold text-slate-900">Detalhes</p>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <p><span className="text-slate-500">Placa:</span> {doc.Placa || "—"}</p>
                    <p><span className="text-slate-500">Motorista:</span> {doc.Motorista || "—"}</p>
                    <p><span className="text-slate-500">Rota:</span> {doc.Rota || "—"}</p>
                    <p><span className="text-slate-500">Data Rota:</span> {doc.DataRota || "—"}</p>
                  </div>
                </div>

                {doc.LinkTracking && (
                  <div className="lg:col-span-3">
                    <div className="bg-white rounded-3xl ring-1 ring-slate-200 overflow-hidden">
                      <div className="p-4 border-b border-slate-200">
                        <p className="font-semibold text-slate-900">Tracking detalhado</p>
                        <p className="text-sm text-slate-600">
                          Se não carregar, use o botão “Abrir tracking”.
                        </p>
                      </div>
                      <iframe title="Tracking" src={doc.LinkTracking} className="w-full h-[520px]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
