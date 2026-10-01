// ============================================================
// PROFESSOR DINIZ — DOWNLOAD SEGURO DOS LAUDOS
// ============================================================

const crypto = require("crypto");

const HANDLE_INFINITEPAY = "joao-diniz-nqm";


// ============================================================
// CATÁLOGO OFICIAL — VALORES EM CENTAVOS
// ============================================================

const PRODUTOS = {

  "LAUDO-01": 9800,
  "LAUDO-02": 9800,
  "LAUDO-03": 12800,
  "LAUDO-04": 9800,
  "LAUDO-05": 12800,
  "LAUDO-06": 9800,
  "LAUDO-07": 12800,
  "LAUDO-08": 12800,
  "LAUDO-09": 12800,
  "LAUDO-10": 12800,
  "LAUDO-11": 12800,
  "LAUDO-12": 14800,
  "LAUDO-13": 14800,
  "LAUDO-14": 14800,
  "LAUDO-15": 16800,
  "LAUDO-16": 16800,
  "LAUDO-17": 14800,
  "LAUDO-18": 14800,
  "LAUDO-19": 14800,
  "LAUDO-20": 14800,
  "LAUDO-21": 14800,
  "LAUDO-22": 9800,
  "LAUDO-23": 12800,
  "LAUDO-24": 12800,

  "COMBO-01": 32800,
  "COMBO-02": 32800,
  "COMBO-03": 33800,
  "COMBO-04": 48800,
  "COMBO-05": 78800,
  "COMBO-06": 35800,
  "COMBO-07": 28800,
  "COMBO-08": 24800,
  "COMBO-09": 22800,
  "COMBO-10": 47800,
  "COMBO-11": 27800,
  "COMBO-12": 68800,
  "COMBO-13": 98800,
  "COMBO-14": 152800

};


// ============================================================
// LAUDOS + IDs PRIVADOS DO GOOGLE DRIVE
// ============================================================

const LAUDOS = {

  "01": {
    nome: "Avaliação Apartamento — Método Comparativo",
    fileId: "18riuD6pJxeFxfz6s_HjTDvrNtNAXK4n4"
  },

  "02": {
    nome: "Avaliação Casa — Método Comparativo",
    fileId: "130nKEy6SOh71P-gKSKWQUh3vmDasiLwk"
  },

  "03": {
    nome: "Avaliação Casa — Método Evolutivo",
    fileId: "1suUTNtFzAYkkEZSRYAlTQT9QPvQYnZ8-"
  },

  "04": {
    nome: "Avaliação Terreno — Método Comparativo",
    fileId: "18RGY2OlT7X8Lax9aQrz8Bx1HpoxIEoii"
  },

  "05": {
    nome: "Avaliação Terreno — Área — Método Involutivo",
    fileId: "1JPkO-Ie_Aua7KgktQCMrJ6U4-tbl6LBT"
  },

  "06": {
    nome: "Avaliação Gleba Urbanizável — Método Comparativo",
    fileId: "1I-FdeEoADC9LqGFkFFl0LmDxyeTGsGdV"
  },

  "07": {
    nome: "Avaliação Gleba Urbanizável — Método Involutivo",
    fileId: "1SMCfZogORHMt0wO1MEpuDIw0Hf9CLVHv"
  },

  "08": {
    nome: "Avaliação Prédio Comercial — Método Evolutivo",
    fileId: "1bAWLANsU4z9t5caV37LDFlLiv0eMP2mI"
  },

  "09": {
    nome: "Avaliação Complexo Comercial-Residencial — Método Evolutivo",
    fileId: "1Stl0-2C8VelfKmGdYe_Gl081P9wq7eTu"
  },

  "10": {
    nome: "Avaliação Galpão / Armazém / Depósito / Barracão — Método Evolutivo",
    fileId: "1T3YMJP91UFCP0b7nB3z70I5GVcWgAKXH"
  },

  "11": {
    nome: "Avaliação Área Rural — Terra — Método Comparativo",
    fileId: "15x7-TRrStv9xDD0kOXvOcJZNL6hg0KY4"
  },

  "12": {
    nome: "Avaliação Área Rural — Terra + Benfeitorias + Instalações — Método Evolutivo",
    fileId: "1andfbl1JG54sG2E7gKJuAX3KAJnTkbXg"
  },

  "13": {
    nome: "Avaliação de Servidão Administrativa — Linha de Transmissão",
    fileId: "1-vQHzJ2zWXVleQCYYo3LE2ayfqSgX7Tu"
  },

  "14": {
    nome: "Avaliação de Servidão Administrativa — Passagens de Tubulações / Veículos / Pedestres",
    fileId: "1tSvebnhjOuSu3Y6XInkpW_F-8YyQOOsy"
  },

  "15": {
    nome: "Avaliação Empresa",
    fileId: "1QWMuN6xRZsMBZCnDHt8ZJiWxWZ31tZ7l"
  },

  "16": {
    nome: "Avaliação Posto de Combustível — Método Evolutivo 2025",
    fileId: "1bSaJ_lJQOCLcsFGcdpO49-azEUYWVPeI"
  },

  "17": {
    nome: "Avaliação de Desapropriação 1",
    fileId: "1oPAT6rdlmsBuauBf32QX4Hb_0HI9YQ19"
  },

  "18": {
    nome: "Avaliação de Desapropriação 2",
    fileId: "1Y8OK8RT3lI_5btZ2TW-cEWTovRwhWd-g"
  },

  "19": {
    nome: "Avaliação de Desapropriação 3",
    fileId: "1Y2uihOHiTwEnrrYShf5Qhk0c9ZhB1DiE"
  },

  "20": {
    nome: "Avaliação de Desapropriação 4 — Processo Judicial",
    fileId: "1DGlqLGOTVcKuvqJBlPeveECbMsm1nBxy"
  },

  "21": {
    nome: "Avaliação Lucros Cessantes",
    fileId: "1IjKUxs7VgtZSRKAmAqxVG6Lq2lz8ZhP_"
  },

  "22": {
    nome: "Avaliação Valor Locativo Apartamento / Casa — Método Comparativo",
    fileId: "16y9mW9Gx6MRMV2wPUbQFxmzv63czXF-s"
  },

  "23": {
    nome: "Avaliação Valor Locativo de Loja / Prédio Comercial — Método Comparativo",
    fileId: "10JoV1kFZI6BzQ0FssXH2-2V93cmlRGIY"
  },

  "24": {
    nome: "Avaliação Valor Locativo de Galpão / Depósito / Armazém / Barracão — Método Comparativo",
    fileId: "1Ehl_xsg5askjGth-Bpb1xSN3cr57sPCN"
  }

};


// ============================================================
// COMBOS
// ============================================================

const COMBOS = {

  "COMBO-01": ["01", "04", "11", "22"],
  "COMBO-02": ["02", "07", "11", "23"],
  "COMBO-03": ["03", "05", "08", "12"],

  "COMBO-04": [
    "01", "03", "05", "06", "09", "11"
  ],

  "COMBO-05": [
    "01", "03", "05", "07", "09",
    "11", "14", "18", "23"
  ],

  "COMBO-06": ["03", "08", "12"],
  "COMBO-07": ["22", "23", "24"],
  "COMBO-08": ["13", "14"],
  "COMBO-09": ["11", "12"],
  "COMBO-10": ["17", "18", "19", "20"],
  "COMBO-11": ["15", "16"],

  "COMBO-12": [
    "02", "03", "04", "06",
    "10", "11", "17", "24"
  ],

  "COMBO-13": [
    "01", "03", "07", "09",
    "10", "11", "13", "15",
    "16", "19", "21", "23"
  ],

  "COMBO-14": [
    "01", "02", "03", "04",
    "05", "06", "07", "08",
    "09", "10", "11", "12",
    "13", "14", "15", "16",
    "17", "18", "19", "20",
    "21", "22", "23", "24"
  ]

};


// ============================================================
// UTILIDADES
// ============================================================

function obterSku(orderNsu) {

  if (typeof orderNsu !== "string") {
    return null;
  }

  const resultado = orderNsu.match(
    /^(LAUDO-\d{2}|COMBO-\d{2})-\d+$/
  );

  return resultado
    ? resultado[1]
    : null;

}


function arquivoPertenceAoSku(sku, codigo) {

  if (!/^\d{2}$/.test(codigo)) {
    return false;
  }


  if (sku.startsWith("LAUDO-")) {

    return (
      sku.replace("LAUDO-", "") === codigo
    );

  }


  if (COMBOS[sku]) {

    return COMBOS[sku].includes(codigo);

  }


  return false;

}


// ============================================================
// VALIDA TOKEN DE DOWNLOAD
// ============================================================

function validarToken(token) {

  const segredo =
    process.env.DOWNLOAD_SECRET;


  if (!segredo) {

    throw new Error(
      "DOWNLOAD_SECRET não configurado."
    );

  }


  if (
    !token ||
    typeof token !== "string"
  ) {

    return null;

  }


  const partes =
    token.split(".");


  if (partes.length !== 2) {

    return null;

  }


  const [
    payloadBase64,
    assinaturaRecebida
  ] = partes;


  const assinaturaEsperada =
    crypto
      .createHmac(
        "sha256",
        segredo
      )
      .update(payloadBase64)
      .digest("base64url");


  const bufferRecebido =
    Buffer.from(
      assinaturaRecebida
    );


  const bufferEsperado =
    Buffer.from(
      assinaturaEsperada
    );


  if (
    bufferRecebido.length !==
    bufferEsperado.length
  ) {

    return null;

  }


  if (
    !crypto.timingSafeEqual(
      bufferRecebido,
      bufferEsperado
    )
  ) {

    return null;

  }


  try {

    const payload =
      JSON.parse(
        Buffer
          .from(
            payloadBase64,
            "base64url"
          )
          .toString("utf8")
      );


    if (
      !payload.exp ||
      Date.now() > payload.exp
    ) {

      return null;

    }


    if (
      !payload.order_nsu ||
      !payload.transaction_nsu ||
      !payload.slug ||
      !payload.codigo
    ) {

      return null;

    }


    return payload;


  } catch {

    return null;

  }

}


// ============================================================
// GOOGLE — CRIA ACCESS TOKEN DA CONTA DE SERVIÇO
// ============================================================

function base64Url(valor) {

  return Buffer
    .from(valor)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

}


async function obterGoogleAccessToken() {

  const email =
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;


  let privateKey =
    process.env.GOOGLE_PRIVATE_KEY;


  if (
    !email ||
    !privateKey
  ) {

    throw new Error(
      "Credenciais do Google não configuradas."
    );

  }


  privateKey =
    privateKey.replace(
      /\\n/g,
      "\n"
    );


  const agora =
    Math.floor(
      Date.now() / 1000
    );


  const header = {

    alg: "RS256",

    typ: "JWT"

  };


  const payload = {

    iss: email,

    scope:
      "https://www.googleapis.com/auth/drive.readonly",

    aud:
      "https://oauth2.googleapis.com/token",

    iat:
      agora,

    exp:
      agora + 3600

  };


  const unsignedToken =
    `${base64Url(
      JSON.stringify(header)
    )}.${base64Url(
      JSON.stringify(payload)
    )}`;


  const assinatura =
    crypto.sign(

      "RSA-SHA256",

      Buffer.from(
        unsignedToken
      ),

      privateKey

    );


  const jwt =
    `${unsignedToken}.${assinatura
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")}`;


  const resposta =
    await fetch(
      "https://oauth2.googleapis.com/token",
      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/x-www-form-urlencoded"

        },

        body:
          new URLSearchParams({

            grant_type:
              "urn:ietf:params:oauth:grant-type:jwt-bearer",

            assertion:
              jwt

          })

      }
    );


  const dados =
    await resposta.json();


  if (
    !resposta.ok ||
    !dados.access_token
  ) {

    console.error(
      "Erro Google OAuth:",
      dados
    );

    throw new Error(
      "Não foi possível autenticar no Google Drive."
    );

  }


  return dados.access_token;

}


// ============================================================
// REVALIDA O PAGAMENTO
// ============================================================

async function validarPagamento(
  orderNsu,
  transactionNsu,
  slug
) {

  const sku =
    obterSku(orderNsu);


  if (
    !sku ||
    !PRODUTOS[sku]
  ) {

    return null;

  }


  const resposta =
    await fetch(
      "https://api.checkout.infinitepay.io/payment_check",
      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json"

        },

        body:
          JSON.stringify({

            handle:
              HANDLE_INFINITEPAY,

            order_nsu:
              orderNsu,

            transaction_nsu:
              transactionNsu,

            slug:
              slug

          })

      }
    );


  if (!resposta.ok) {

    return null;

  }


  const dados =
    await resposta.json();


  if (
    dados.success !== true ||
    dados.paid !== true
  ) {

    return null;

  }


  const valor =
    Number(
      dados.amount
    );


  if (
    !Number.isFinite(valor) ||
    valor !== PRODUTOS[sku]
  ) {

    return null;

  }


  return sku;

}


// ============================================================
// NOME SEGURO PARA O DOWNLOAD
// ============================================================

function nomeSeguroArquivo(
  codigo,
  nome,
  nomeDrive
) {

  let extensao = ".docx";


  if (
    typeof nomeDrive === "string" &&
    nomeDrive.includes(".")
  ) {

    const encontrada =
      nomeDrive.match(
        /\.[a-zA-Z0-9]{1,8}$/
      );


    if (encontrada) {

      extensao =
        encontrada[0].toLowerCase();

    }

  }


  const base =
    nome
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        ""
      )
      .replace(
        /[^a-zA-Z0-9]+/g,
        "-"
      )
      .replace(
        /^-+|-+$/g,
        "");


  return (
    `Laudo-${codigo}-${base}${extensao}`
  );

}


// ============================================================
// API
// ============================================================

module.exports =
async function handler(req, res) {

  if (req.method !== "GET") {

    res.setHeader(
      "Allow",
      "GET"
    );

    return res.status(405).json({

      success: false,

      erro:
        "Método não permitido."

    });

  }


  try {

    // ========================================================
    // 1. VALIDA TOKEN
    // ========================================================

    const token =
      req.query.token;


    const payload =
      validarToken(token);


    if (!payload) {

      return res.status(403).json({

        success: false,

        erro:
          "Link de download inválido ou expirado."

      });

    }


    // ========================================================
    // 2. REVALIDA PAGAMENTO NA INFINITEPAY
    // ========================================================

    const sku =
      await validarPagamento(

        payload.order_nsu,

        payload.transaction_nsu,

        payload.slug

      );


    if (!sku) {

      return res.status(403).json({

        success: false,

        erro:
          "Não foi possível validar esta compra."

      });

    }


    // ========================================================
    // 3. CONFERE SE O ARQUIVO PERTENCE À COMPRA
    // ========================================================

    if (
      !arquivoPertenceAoSku(
        sku,
        payload.codigo
      )
    ) {

      return res.status(403).json({

        success: false,

        erro:
          "Este arquivo não pertence à compra informada."

      });

    }


    const laudo =
      LAUDOS[
        payload.codigo
      ];


    if (!laudo) {

      return res.status(404).json({

        success: false,

        erro:
          "Arquivo não encontrado."

      });

    }


    // ========================================================
    // 4. AUTENTICA NO GOOGLE
    // ========================================================

    const accessToken =
      await obterGoogleAccessToken();


    // ========================================================
    // 5. BUSCA METADADOS DO ARQUIVO
    // ========================================================

    const metadataResponse =
      await fetch(

        `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(
          laudo.fileId
        )}?fields=id,name,mimeType`,

        {

          headers: {

            Authorization:
              `Bearer ${accessToken}`

          }

        }

      );


    if (!metadataResponse.ok) {

      const erroGoogle =
        await metadataResponse.text();

      console.error(
        "Erro metadata Drive:",
        erroGoogle
      );


      return res.status(502).json({

        success: false,

        erro:
          "Não foi possível localizar o arquivo no Google Drive."

      });

    }


    const metadata =
      await metadataResponse.json();


    // ========================================================
    // 6. DOWNLOAD DO DRIVE
    // ========================================================

    const driveResponse =
      await fetch(

        `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(
          laudo.fileId
        )}?alt=media`,

        {

          headers: {

            Authorization:
              `Bearer ${accessToken}`

          }

        }

      );


    if (!driveResponse.ok) {

      const erroGoogle =
        await driveResponse.text();

      console.error(
        "Erro download Drive:",
        erroGoogle
      );


      return res.status(502).json({

        success: false,

        erro:
          "Não foi possível baixar o arquivo do Google Drive."

      });

    }


    // ========================================================
    // 7. PREPARA O ARQUIVO
    // ========================================================

    const arrayBuffer =
      await driveResponse.arrayBuffer();


    const arquivo =
      Buffer.from(
        arrayBuffer
      );


    const nomeDownload =
      nomeSeguroArquivo(

        payload.codigo,

        laudo.nome,

        metadata.name

      );


    // ========================================================
    // 8. ENTREGA AO CLIENTE
    // ========================================================

    res.setHeader(
      "Content-Type",
      metadata.mimeType ||
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );


    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${nomeDownload}"`
    );


    res.setHeader(
      "Content-Length",
      arquivo.length
    );


    res.setHeader(
      "Cache-Control",
      "private, no-store, max-age=0"
    );


    return res
      .status(200)
      .send(arquivo);


  } catch (erro) {

    console.error(
      "Erro no download:",
      erro
    );


    return res.status(500).json({

      success: false,

      erro:
        "Erro interno ao preparar o download."

    });

  }

};
