import React, { useMemo, useState } from "react";
import {
  Search,
  ExternalLink,
  Truck,
  MapPin,
  ClipboardCheck,
  Building2,
  CalendarClock,
  BadgeCheck,
  AlertCircle,
  Loader2,
  Route,
  User,
  IdCard,
} from "lucide-react";

export default function Rastreio() {
  const [nf, setNf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [doc, setDoc] = useState(null);

  // ✅ opcional (se não tiver, não aparece)
  const HERO_IMG = "/img/rastreio-banner.jpg";

  const maskCnpj = useMemo(() => {
    return (value) => {
      const digits = (value || "").replace(/\D/g, "").slice(0, 14);
      // 00.000.000/0000-00
      return digits
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    };
  }, []);

  const buscar = async (e) => {
    e.preventDefault();
    setErro("");
    setDoc(null);

    const documentNumber = nf.trim();
    const cnpjValue = cnpj.replace(/\D/g, "").trim();

    if (!documentNumber || !cnpjValue) {
      setErro("Digite a NF e o CNPJ do cliente.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `/api/getStatus?documentNumber=${encodeURIComponent(
          documentNumber
        )}&cnpj=${encodeURIComponent(cnpjValue)}`
      );

      const data = await res.json().catch(() => ({}));
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

  const limpar = () => {
    setNf("");
    setCnpj("");
    setErro("");
    setDoc(null);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a6e89] via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_30%,white,transparent_40%),radial-gradient(circle_at_40%_80%,white,transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur">
                <ClipboardCheck className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Rastreamento de carga — rápido e seguro
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
                Localize sua entrega em tempo real
              </h1>

              <p className="mt-3 text-white/80 max-w-xl">
                Informe a <b>NF</b> e o <b>CNPJ do cliente</b> para consultar o
                status do pedido e acessar o tracking detalhado quando
                disponível.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="text-sm">Distribuição de carga seca</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm">Fiorino • Vans • HR/Ducato</span>
                </span>
              </div>
            </div>

            {/* CARD FORM */}
            <div className="bg-white/95 backdrop-blur rounded-3xl shadow-lg ring-1 ring-white/30 overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-slate-900">
                  Consultar rastreio
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Preencha os dados abaixo para encontrar o documento.
                </p>

                <form onSubmit={buscar} className="mt-6 grid gap-3">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-slate-600">
                      Nota Fiscal (NF)
                    </span>
                    <div className="relative">
                      <input
                        value={nf}
                        onChange={(e) => setNf(e.target.value)}
                        className="w-full h-11 pl-11 pr-3 rounded-2xl border border-slate-200 bg-white focus:border-[#0a6e89] focus:ring-[#0a6e89]"
                        placeholder="Ex: 271410"
                        inputMode="numeric"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-slate-600">
                      CNPJ do cliente
                    </span>
                    <div className="relative">
                      <input
                        value={maskCnpj(cnpj)}
                        onChange={(e) => setCnpj(e.target.value)}
                        className="w-full h-11 pl-11 pr-3 rounded-2xl border border-slate-200 bg-white focus:border-[#0a6e89] focus:ring-[#0a6e89]"
                        placeholder="00.000.000/0000-00"
                        inputMode="numeric"
                      />
                      <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </label>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center h-11 px-5 rounded-2xl bg-[#0a6e89] text-white font-semibold shadow hover:shadow-md transition disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          Consultando...
                          <Loader2 className="h-5 w-5 ml-2 animate-spin" />
                        </>
                      ) : (
                        <>
                          Buscar
                          <Search className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={limpar}
                      className="inline-flex items-center justify-center h-11 px-5 rounded-2xl bg-slate-100 text-slate-800 font-semibold ring-1 ring-slate-200 hover:bg-slate-200 transition"
                    >
                      Limpar
                    </button>
                  </div>

                  {erro && (
                    <div className="mt-2 rounded-2xl bg-red-50 ring-1 ring-red-200 p-3 text-sm text-red-700 flex gap-2">
                      <AlertCircle className="h-5 w-5 mt-0.5" />
                      <span>{erro}</span>
                    </div>
                  )}

                  <p className="mt-2 text-xs text-slate-500">
                    Dica: use apenas números no CNPJ. (O formato é aplicado
                    automaticamente.)
                  </p>
                </form>
              </div>

              {/* IMAGEM opcional */}
              <div className="relative border-t border-slate-200 bg-slate-50">
                <img
                  src={HERO_IMG}
                  alt=""
                  className="w-full h-[140px] object-cover opacity-90"
                  onError={(e) => {
                    // se não existir, esconde
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {!doc ? (
          <div className="text-center text-slate-500">
            <p className="text-sm">
              Preencha os dados acima para exibir o status do documento.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* CARD PRINCIPAL */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Documento localizado
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 ring-1 ring-slate-200">
                        <span className="text-xs font-semibold text-slate-500">
                          NF
                        </span>
                        <span className="text-sm font-bold">
                          {doc.NumeroNF}
                        </span>
                      </span>

                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 ring-1 ring-slate-200">
                        <Building2 className="h-4 w-4 text-slate-500" />
                        <span className="text-sm font-semibold">
                          {doc.NomeTransportadora || "Transportadora"}
                        </span>
                      </span>
                    </div>

                    <p className="mt-4 text-lg font-bold text-slate-900">
                      {doc.Nome || "Destino"}
                    </p>
                    <p className="text-sm text-slate-600">
                      {doc.Logradouro ? `${doc.Logradouro} — ${doc.Bairro}` : "—"}
                      <br />
                      {doc.Cidade}/{doc.Estado}
                    </p>
                  </div>

                  {doc.LinkTracking && (
                    <a
                      href={doc.LinkTracking}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center h-11 px-5 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow hover:shadow-md transition"
                    >
                      Abrir tracking <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  )}
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Truck className="h-5 w-5 text-[#0a6e89]" />
                      Status
                    </div>
                    <p className="mt-1 text-slate-700">
                      <span className="font-semibold">{doc.Status}</span>
                      {doc.DescricaoStatus ? ` — ${doc.DescricaoStatus}` : ""}
                    </p>
                    {doc.CodigoStatus != null && (
                      <p className="mt-1 text-xs text-slate-500">
                        Código: {doc.CodigoStatus}
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <CalendarClock className="h-5 w-5 text-[#0a6e89]" />
                      Atualização
                    </div>
                    <p className="mt-1 text-slate-700">{doc.DataHora || "—"}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Previsão:{" "}
                      {doc.PrevisaoEntrega ? doc.PrevisaoEntrega : "sob atualização"}
                    </p>
                  </div>
                </div>
              </div>

              {/* EMBED */}
              {doc.LinkTracking && (
                <div className="border-t border-slate-200 bg-slate-50">
                  <div className="p-4 sm:p-6">
                    <p className="font-semibold text-slate-900">
                      Tracking detalhado
                    </p>
                    <p className="text-sm text-slate-600">
                      Se não carregar, use o botão “Abrir tracking”.
                    </p>
                  </div>
                  <iframe
                    title="Tracking"
                    src={doc.LinkTracking}
                    className="w-full h-[520px] bg-white"
                  />
                </div>
              )}
            </div>

            {/* LATERAL DETALHES */}
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 p-6 sm:p-8">
              <p className="text-lg font-bold text-slate-900">Detalhes</p>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 mt-0.5 text-slate-500" />
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">
                      Motorista
                    </p>
                    <p className="font-semibold">{doc.Motorista || "—"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Route className="h-4 w-4 mt-0.5 text-slate-500" />
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">Rota</p>
                    <p className="font-semibold">{doc.Rota || "—"}</p>
                    <p className="text-xs text-slate-500">
                      Data rota: {doc.DataRota || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-slate-500" />
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">
                      Placa
                    </p>
                    <p className="font-semibold">{doc.Placa || "—"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Dica para o cliente
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Em caso de dúvidas, envie a NF e o CNPJ pelo WhatsApp para
                  agilizar o atendimento.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
