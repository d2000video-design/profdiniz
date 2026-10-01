// ============================================================
// PROFESSOR DINIZ — ENTREGA SEGURA DOS LAUDOS
// ============================================================

const crypto = require("crypto");

const HANDLE_INFINITEPAY = "joao-diniz-nqm";


// ============================================================
// CATÁLOGO OFICIAL
// Valores em centavos
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
// 24 LAUDOS
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
// IDENTIFICA O SKU
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


// ============================================================
// ARQUIVOS AUTORIZADOS PELO SKU
// ============================================================

function obterArquivos(sku) {

  if (sku.startsWith("LAUDO-")) {

    const numero =
      sku.replace("LAUDO-", "");

    if (!LAUDOS[numero]) {
      return null;
    }

    return [{
      codigo: numero,
      nome: LAUDOS[numero].nome
    }];

  }


  if (COMBOS[sku]) {

    return COMBOS[sku].map(
      numero => ({
        codigo: numero,
        nome: LAUDOS[numero].nome
      })
    );

  }


  return null;

}


// ============================================================
// TOKEN INTERNO PARA DOWNLOAD
//
// O navegador NÃO recebe o ID do Google Drive.
// O token identifica:
// pedido + transação + arquivo autorizado.
// ============================================================

function criarTokenDownload({
  orderNsu,
  transactionNsu,
  slug,
  codigo
}) {

  const segredo =
    process.env.DOWNLOAD_SECRET;

  if (!segredo) {
    throw new Error(
      "DOWNLOAD_SECRET não configurado."
    );
  }


  const payload = JSON.stringify({

    order_nsu: orderNsu,

    transaction_nsu: transactionNsu,

    slug: slug,

    codigo: codigo,

    // Token válido por 1 hora.
    exp:
      Date.now() +
      (60 * 60 * 1000)

  });


  const payloadBase64 =
    Buffer
      .from(payload)
      .toString("base64url");


  const assinatura =
    crypto
      .createHmac(
        "sha256",
        segredo
      )
      .update(payloadBase64)
      .digest("base64url");


  return (
    payloadBase64 +
    "." +
    assinatura
  );

}


// ============================================================
// API
// ============================================================

module.exports = async function handler(req, res) {

  if (req.method !== "POST") {

    res.setHeader(
      "Allow",
      "POST"
    );

    return res.status(405).json({

      success: false,

      erro:
        "Método não permitido."

    });

  }


  try {

    const {
      order_nsu,
      transaction_nsu,
      slug
    } = req.body || {};


    // ========================================================
    // PARÂMETROS
    // ========================================================

    if (
      !order_nsu ||
      !transaction_nsu ||
      !slug
    ) {

      return res.status(400).json({

        success: false,

        pago: false,

        erro:
          "Dados da transação incompletos."

      });

    }


    // ========================================================
    // IDENTIFICA PRODUTO
    // ========================================================

    const sku =
      obterSku(order_nsu);


    if (
      !sku ||
      !PRODUTOS[sku]
    ) {

      return res.status(400).json({

        success: false,

        pago: false,

        erro:
          "Pedido inválido."

      });

    }


    const valorEsperado =
      PRODUTOS[sku];


    // ========================================================
    // REVALIDA PAGAMENTO DIRETAMENTE NA INFINITEPAY
    // ========================================================

    const resposta =
      await fetch(
        "https://api.checkout.infinitepay.io/payment_check",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            handle:
              HANDLE_INFINITEPAY,

            order_nsu:
              order_nsu,

            transaction_nsu:
              transaction_nsu,

            slug:
              slug

          })

        }
      );


    const texto =
      await resposta.text();


    let dados = {};


    try {

      dados =
        texto
          ? JSON.parse(texto)
          : {};

    } catch {

      dados = {};

    }


    if (!resposta.ok) {

      console.error(
        "Erro InfinitePay:",
        dados
      );

      return res.status(502).json({

        success: false,

        pago: false,

        erro:
          "Não foi possível validar o pagamento."

      });

    }


    // ========================================================
    // PAGAMENTO PRECISA ESTAR CONFIRMADO
    // ========================================================

    if (
      dados.success !== true ||
      dados.paid !== true
    ) {

      return res.status(403).json({

        success: false,

        pago: false,

        erro:
          "Pagamento ainda não confirmado."

      });

    }


    // ========================================================
    // CONFERE VALOR
    // ========================================================

    const valorConfirmado =
      Number(dados.amount);


    if (
      !Number.isFinite(valorConfirmado) ||
      valorConfirmado !== valorEsperado
    ) {

      console.error(
        "Valor divergente:",
        {
          sku,
          esperado:
            valorEsperado,
          recebido:
            valorConfirmado
        }
      );


      return res.status(409).json({

        success: false,

        pago: false,

        erro:
          "Valor do pagamento divergente."

      });

    }


    // ========================================================
    // MONTA LISTA AUTORIZADA
    // ========================================================

    const arquivos =
      obterArquivos(sku);


    if (
      !arquivos ||
      arquivos.length === 0
    ) {

      return res.status(404).json({

        success: false,

        pago: true,

        erro:
          "Nenhum arquivo encontrado para este pedido."

      });

    }


    // ========================================================
    // GERA LINKS INTERNOS
    //
    // Nenhum Google Drive ID é enviado ao navegador.
    // ========================================================

    const arquivosLiberados =
      arquivos.map(
        arquivo => {

          const token =
            criarTokenDownload({

              orderNsu:
                order_nsu,

              transactionNsu:
                transaction_nsu,

              slug:
                slug,

              codigo:
                arquivo.codigo

            });


          return {

            codigo:
              arquivo.codigo,

            nome:
              arquivo.nome,

            download_url:
              `/api/download?token=${encodeURIComponent(token)}`

          };

        }
      );


    // ========================================================
    // ENTREGA AUTORIZADA
    // ========================================================

    return res.status(200).json({

      success: true,

      pago: true,

      sku: sku,

      quantidade:
        arquivosLiberados.length,

      arquivos:
        arquivosLiberados

    });


  } catch (erro) {

    console.error(
      "Erro na entrega:",
      erro
    );


    return res.status(500).json({

      success: false,

      pago: false,

      erro:
        "Erro interno ao preparar os arquivos."

    });

  }

};
