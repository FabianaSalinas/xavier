// my-app/api/getStatus.js

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ user_message: "Método não permitido." });
    }

    const { documentNumber, cnpj, key } = req.query;

    if (!documentNumber || !cnpj) {
      return res.status(400).json({
        user_message: "Informe documentNumber (NF) e cnpj.",
      });
    }

    const base = process.env.TRACKING_API_BASE; // ex: https://dev.comprovei.com
    const user = process.env.TRACKING_DEV_USER; // Basic Auth
    const pass = process.env.TRACKING_DEV_PASS;

    if (!base) {
      return res.status(500).json({
        user_message: "TRACKING_API_BASE não configurada na Vercel.",
      });
    }
    if (!user || !pass) {
      return res.status(500).json({
        user_message:
          "Credenciais do desenvolvedor não configuradas (TRACKING_DEV_USER/TRACKING_DEV_PASS).",
      });
    }

    // Monta URL conforme o manual:
    // /getStatus?cnpj=...&documentNumber=...&key=...
    const url = new URL(`${base.replace(/\/$/, "")}/getStatus`);
    url.searchParams.set("cnpj", String(cnpj));
    url.searchParams.set("documentNumber", String(documentNumber));
    if (key) url.searchParams.set("key", String(key));

    const basic = Buffer.from(`${user}:${pass}`).toString("base64");

    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Basic ${basic}`,
        Accept: "application/json",
      },
    });

    const text = await upstream.text();

    // tenta JSON, senão devolve texto cru (pra você enxergar o erro real)
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { user_message: "Resposta não-JSON do provedor.", raw: text };
    }

    return res.status(upstream.status).json(data);
  } catch (e) {
    return res.status(500).json({
      user_message: "Erro interno ao consultar rastreio.",
      internal_message: e?.message || String(e),
    });
  }
};
