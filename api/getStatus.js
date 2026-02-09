// my-app/api/getStatus.js

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ user_message: "Método não permitido." });
    }

    const { documentNumber, cnpj } = req.query;

    if (!documentNumber || !cnpj) {
      return res.status(400).json({
        user_message: "Informe documentNumber (NF) e cnpj.",
      });
    }

    // Base correta (sem /getStatus no final)
    // Ex: https://api.comprovei.com.br/api/1.1/documents
    const base = process.env.TRACKING_API_BASE;
    const user = process.env.TRACKING_DEV_USER; // Basic Auth user
    const pass = process.env.TRACKING_DEV_PASS; // Basic Auth pass

    if (!base) {
      return res.status(500).json({
        user_message: "TRACKING_API_BASE não configurada na Vercel.",
      });
    }
    if (!user || !pass) {
      return res.status(500).json({
        user_message:
          "Credenciais não configuradas (TRACKING_DEV_USER / TRACKING_DEV_PASS).",
      });
    }

    // Monta URL exatamente como o exemplo oficial
    const url = new URL(`${base.replace(/\/$/, "")}/getStatus`);
    url.searchParams.set("cnpj", String(cnpj));
    url.searchParams.set("documentNumber", String(documentNumber));

    const basic = Buffer.from(`${user}:${pass}`).toString("base64");

    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Basic ${basic}`,
        Accept: "application/json",
      },
    });

    const text = await upstream.text();

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
