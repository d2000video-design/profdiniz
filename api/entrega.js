// api/entrega.js

const crypto = require("crypto");

// ============================================================
// CONFIGURAÇÃO DOS 24 MODELOS
// ============================================================

const LAUDOS = {
  "01": {
    nome: "Apartamento — Método Comparativo",
    fileId: "18riuD6pJxeFxfz6s_HjTDvrNtNAXK4n4",
  },

  "02": {
    nome: "Casa — Método Comparativo",
    fileId: "130nKEy6SOh71P-gKSKWQUh3vmDasiLwk",
  },

  "03": {
    nome: "Casa — Método Evolutivo",
    fileId: "1suUTNtFzAYkkEZSRYAlTQT9QPvQYnZ8-",
  },

  "04": {
    nome: "Terreno — Método Comparativo",
    fileId: "18RGY2OlT7X8Lax9aQrz8Bx1HpoxIEoii",
  },

  "05": {
    nome: "Terreno / Área — Método Involutivo",
    fileId: "1JPkO-Ie_Aua7KgktQCMrJ6U4-tbl6LBT",
  },

  "06": {
    nome: "Gleba Urbanizável — Método Comparativo",
    fileId: "1I-FdeEoADC9LqGFkFFl0LmDxyeTGsGdV",
  },

  "07": {
    nome: "Gleba Urbanizável — Método Involutivo",
    fileId: "1SMCfZogORHMt0wO1MEpuDIw0Hf9CLVHv",
  },

  "08": {
    nome: "Prédio Comercial — Método Evolutivo",
    fileId: "1bAWLANsU4z9t5caV37LDFlLiv0eMP2mI",
  },

  "09": {
    nome: "Complexo Comercial-Residencial — Método Evolutivo",
    fileId: "1Stl0-2C8VelfKmGdYe_Gl081P9wq7eTu",
  },

  "10": {
    nome: "Galpão / Armazém / Depósito / Barracão — Método Evolutivo",
    fileId: "1T3YMJP91UFCP0b7nB3z70I5GVcWgAKXH",
  },

  "11": {
    nome: "Área Rural / Terra — Método Comparativo",
    fileId: "15x7-TRrStv9xDD0kOXvOcJZNL6hg0KY4",
  },

  "12": {
    nome: "Área Rural — Terra + Benfeitorias + Instalações — Método Evolutivo",
    fileId: "1andfbl1JG54sG2E7gKJuAX3KAJnTkbXg",
  },

  "13": {
    nome: "Servidão Administrativa — Linha de Transmissão",
    fileId: "1-vQHzJ2zWXVleQCYYo3LE2ayfqSgX7Tu",
  },

  "14": {
    nome: "Servidão Administrativa — Tubulações / Veículos / Pedestres",
    fileId: "1tSvebnhjOuSu3Y6XInkpW_F-8YyQOOsy",
  },

  "15": {
    nome: "Avaliação de Empresa",
    fileId: "1QWMuN6xRZsMBZCnDHt8ZJiWxWZ31tZ7l",
  },

  "16": {
    nome: "Posto de Combustível — Método Evolutivo 2025",
    fileId: "1bSaJ_lJQOCLcsFGcdpO49-azEUYWVPeI",
  },

  "17": {
    nome: "Desapropriação 1",
    fileId: "1oPAT6rdlmsBuauBf32QX4Hb_0HI9YQ19",
  },

  "18": {
    nome: "Desapropriação 2",
    fileId: "1Y8OK8RT3lI_5btZ2TW-cEWTovRwhWd-g",
  },

  "19": {
    nome: "Desapropriação 3",
    fileId: "1Y2uihOHiTwEnrrYShf5Qhk0c9ZhB1DiE",
  },

  "20": {
    nome: "Desapropriação 4 — Processo Judicial",
    fileId: "1DGlqLGOTVcKuvqJBlPeveECbMsm1nBxy",
  },

  "21": {
    nome: "Lucros Cessantes",
    fileId: "1IjKUxs7VgtZSRKAmAqxVG6Lq2lz8ZhP_",
  },

  "22": {
    nome: "Valor Locativo — Apartamento / Casa — Método Comparativo",
    fileId: "16y9mW9Gx6MRMV2wPUbQFxmzv63czXF-s",
  },

  "23": {
    nome: "Valor Locativo — Loja / Prédio Comercial — Método Comparativo",
    fileId: "10JoV1kFZI6BzQ0FssXH2-2V93cmlRGIY",
  },

  "24": {
    nome: "Valor Locativo — Galpão / Depósito / Armazém / Barracão — Método Comparativo",
    fileId: "1Ehl_xsg5askjGth-Bpb1xSN3cr57sPCN",
  },
};

// ============================================================
// COMBOS
// ============================================================

const COMBOS = {
  C01: ["01", "04", "11", "22"],
  C02: ["02", "07", "11", "23"],
  C03: ["03", "05", "08", "12"],
  C04: ["01", "03", "05", "06", "09", "11"],
  C05: ["01", "03", "05", "07", "09", "11", "14", "18", "23"],

  C06: ["03", "08", "12"],
  C07: ["22", "23", "24"],
  C08: ["13", "14"],
  C09: ["11", "12"],
  C10: ["17", "18", "19", "20"],
  C11: ["15", "16"],

  C12: ["02", "03", "04", "06", "10", "11", "17", "24"],

  C13: [
    "01",
    "03",
    "07",
    "09",
    "10",
    "11",
    "13",
    "15",
    "16",
    "19",
    "21",
    "23",
  ],

  C14: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ],
};

// ============================================================
// UTILIDADES
// ============================================================

function responder(res, status, dados) {
  res.status(status).json(dados);
}

function base64Url(valor) {
  return Buffer.from(valor)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function obterArquivosDoSku(sku) {
  if (!sku) return null;

  const codigo = String(sku).trim().toUpperCase();

  // Aceita 01, 02... 24
  if (LAUDOS[codigo]) {
    return [
      {
        codigo,
        nome: LAUDOS[codigo].nome,
        fileId: LAUDOS[codigo].fileId,
      },
    ];
  }

  // Compatibilidade com possíveis SKUs como L01, LAUDO01 etc.
  const numeroEncontrado = codigo.match(/(?:LAUDO|MODELO|L)?[-_ ]?(\d{1,2})$/);

  if (numeroEncontrado) {
    const numero = numeroEncontrado[1].padStart(2, "0");

    if (LAUDOS[numero]) {
      return [
        {
          codigo: numero,
          nome: LAUDOS[numero].nome,
          fileId: LAUDOS[numero].fileId,
        },
      ];
    }
  }

  // Combos C01...C14
  let combo = codigo;

  const comboEncontrado = codigo.match(/(?:COMBO|C)[-_ ]?(\d{1,2})$/);

  if (comboEncontrado) {
    combo = `C${comboEncontrado[1].padStart(2, "0")}`;
  }

  if (COMBOS[combo]) {
    return COMBOS[combo].map((numero) => ({
      codigo: numero,
      nome: LAUDOS[numero].nome,
      fileId: LAUDOS[numero].fileId,
    }));
  }

  return null;
}

// ============================================================
// AUTENTICAÇÃO GOOGLE
// ============================================================

async function obterGoogleAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !privateKey) {
    throw new Error(
      "Credenciais do Google não configuradas no ambiente da Vercel."
    );
  }

  // Necessário quando a chave foi salva na Vercel com \n literal.
  privateKey = privateKey.replace(/\\n/g, "\n");

  const agora = Math.floor(Date.now() / 1000);

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const payload = {
    iss: email,
    scope: "https://www.googleapis.com/auth/drive.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: agora,
    exp: agora + 3600,
  };

  const unsignedToken =
    `${base64Url(JSON.stringify(header))}.` +
    `${base64Url(JSON.stringify(payload))}`;

  const assinatura = crypto.sign(
    "RSA-SHA256",
    Buffer.from(unsignedToken),
    privateKey
  );

  const jwt =
    `${unsignedToken}.` +
    assinatura
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const resposta = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const dados = await resposta.json();

  if (!resposta.ok || !dados.access_token) {
    throw new Error(
      `Falha ao autenticar no Google Drive: ${
        dados.error_description || dados.error || "erro desconhecido"
      }`
    );
  }

  return dados.access_token;
}

// ============================================================
// FUNÇÃO PRINCIPAL
// ============================================================

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return responder(res, 405, {
      ok: false,
      erro: "Método não permitido.",
    });
  }

  /*
   * IMPORTANTE:
   *
   * A entrega NÃO será liberada apenas recebendo ?sku=...
   *
   * No próximo passo, esta rota receberá uma referência segura
   * da compra e validará o pagamento confirmado pela InfinitePay.
   *
   * Enquanto essa validação ainda não estiver implementada,
   * mantemos a entrega BLOQUEADA.
   */

  return responder(res, 503, {
    ok: false,
    status: "aguardando_integracao_pagamento",
    mensagem:
      "A entrega automática está configurada, mas ainda depende da validação segura do pagamento.",
  });
};

// Exportações auxiliares para integração com as demais APIs.
module.exports.LAUDOS = LAUDOS;
module.exports.COMBOS = COMBOS;
module.exports.obterArquivosDoSku = obterArquivosDoSku;
module.exports.obterGoogleAccessToken = obterGoogleAccessToken;
