// ============================================================
// PROFESSOR DINIZ — CHECKOUT INFINITEPAY
// Vercel Serverless Function
//
// Catálogo oficial:
// 24 modelos individuais + 14 combos
// ============================================================

const HANDLE_INFINITEPAY = "joao-diniz-nqm";

const SITE_URL = "https://profdiniz.vercel.app";


// ============================================================
// CATÁLOGO OFICIAL
//
// IMPORTANTE:
// Os preços ficam no SERVIDOR.
// O navegador envia somente o SKU.
// ============================================================

const produtos = {

  // ----------------------------------------------------------
  // MODELOS INDIVIDUAIS
  // ----------------------------------------------------------

  "LAUDO-01": {
    descricao: "Modelo 01 - Avaliacao de Apartamento - Metodo Comparativo",
    preco: 9800
  },

  "LAUDO-02": {
    descricao: "Modelo 02 - Avaliacao de Casa - Metodo Comparativo",
    preco: 9800
  },

  "LAUDO-03": {
    descricao: "Modelo 03 - Avaliacao de Casa - Metodo Evolutivo",
    preco: 12800
  },

  "LAUDO-04": {
    descricao: "Modelo 04 - Avaliacao de Terreno - Metodo Comparativo",
    preco: 9800
  },

  "LAUDO-05": {
    descricao: "Modelo 05 - Avaliacao de Terreno Area - Metodo Involutivo",
    preco: 12800
  },

  "LAUDO-06": {
    descricao: "Modelo 06 - Avaliacao de Gleba Urbanizavel - Metodo Comparativo",
    preco: 9800
  },

  "LAUDO-07": {
    descricao: "Modelo 07 - Avaliacao de Gleba Urbanizavel - Metodo Involutivo",
    preco: 12800
  },

  "LAUDO-08": {
    descricao: "Modelo 08 - Avaliacao de Predio Comercial - Metodo Evolutivo",
    preco: 12800
  },

  "LAUDO-09": {
    descricao: "Modelo 09 - Avaliacao de Complexo Comercial Residencial - Metodo Evolutivo",
    preco: 12800
  },

  "LAUDO-10": {
    descricao: "Modelo 10 - Avaliacao de Galpao Armazem Deposito ou Barracao - Metodo Evolutivo",
    preco: 12800
  },

  "LAUDO-11": {
    descricao: "Modelo 11 - Avaliacao de Area Rural Terra - Metodo Comparativo",
    preco: 12800
  },

  "LAUDO-12": {
    descricao: "Modelo 12 - Avaliacao de Area Rural Terra Benfeitorias e Instalacoes - Metodo Evolutivo",
    preco: 14800
  },

  "LAUDO-13": {
    descricao: "Modelo 13 - Avaliacao de Servidao Administrativa - Linha de Transmissao",
    preco: 14800
  },

  "LAUDO-14": {
    descricao: "Modelo 14 - Avaliacao de Servidao Administrativa - Tubulacoes Veiculos e Pedestres",
    preco: 14800
  },

  "LAUDO-15": {
    descricao: "Modelo 15 - Avaliacao de Empresa",
    preco: 16800
  },

  "LAUDO-16": {
    descricao: "Modelo 16 - Avaliacao de Posto de Combustivel - Metodo Evolutivo",
    preco: 16800
  },

  "LAUDO-17": {
    descricao: "Modelo 17 - Avaliacao de Desapropriacao - Laudo 1",
    preco: 14800
  },

  "LAUDO-18": {
    descricao: "Modelo 18 - Avaliacao de Desapropriacao - Laudo 2",
    preco: 14800
  },

  "LAUDO-19": {
    descricao: "Modelo 19 - Avaliacao de Desapropriacao - Laudo 3",
    preco: 14800
  },

  "LAUDO-20": {
    descricao: "Modelo 20 - Avaliacao de Desapropriacao - Processo Judicial",
    preco: 14800
  },

  "LAUDO-21": {
    descricao: "Modelo 21 - Avaliacao de Lucros Cessantes",
    preco: 14800
  },

  "LAUDO-22": {
    descricao: "Modelo 22 - Avaliacao de Valor Locativo - Apartamento e Casa",
    preco: 9800
  },

  "LAUDO-23": {
    descricao: "Modelo 23 - Avaliacao de Valor Locativo - Loja e Predio Comercial",
    preco: 12800
  },

  "LAUDO-24": {
    descricao: "Modelo 24 - Avaliacao de Valor Locativo - Galpao Deposito Armazem e Barracao",
    preco: 12800
  },


  // ----------------------------------------------------------
  // COMBOS
  // ----------------------------------------------------------

  "COMBO-01": {
    descricao: "Combo 1 - Modelos 01 04 11 e 22",
    preco: 32800
  },

  "COMBO-02": {
    descricao: "Combo 2 - Modelos 02 07 11 e 23",
    preco: 32800
  },

  "COMBO-03": {
    descricao: "Combo 3 - Modelos 03 05 08 e 12",
    preco: 33800
  },

  "COMBO-04": {
    descricao: "Combo 4 - Modelos 01 03 05 06 09 e 11",
    preco: 48800
  },

  "COMBO-05": {
    descricao: "Combo 5 - Selecao com 9 modelos",
    preco: 78800
  },

  "COMBO-06": {
    descricao: "Combo 6 - Metodo Evolutivo",
    preco: 35800
  },

  "COMBO-07": {
    descricao: "Combo 7 - Alugueis",
    preco: 28800
  },

  "COMBO-08": {
    descricao: "Combo 8 - Servidoes",
    preco: 24800
  },

  "COMBO-09": {
    descricao: "Combo 9 - Imoveis Rurais",
    preco: 22800
  },

  "COMBO-10": {
    descricao: "Combo 10 - Desapropriacoes",
    preco: 47800
  },

  "COMBO-11": {
    descricao: "Combo 11 - Empresarial",
    preco: 27800
  },

  "COMBO-12": {
    descricao: "Combo 12 - Basico",
    preco: 68800
  },

  "COMBO-13": {
    descricao: "Combo 13 - Medio",
    preco: 98800
  },

  "COMBO-14": {
    descricao: "Combo 14 - Maximo - Colecao Completa com 24 Modelos",
    preco: 152800
  }

};


// ============================================================
// FUNÇÃO PRINCIPAL
// ============================================================

export default async function handler(req, res) {

  // ----------------------------------------------------------
  // SOMENTE POST
  // ----------------------------------------------------------

  if (req.method !== "POST") {

    res.setHeader("Allow", "POST");

    return res.status(405).json({
      erro: "Método não permitido."
    });

  }


  try {

    // --------------------------------------------------------
    // RECEBE O SKU
    // --------------------------------------------------------

    const { sku } = req.body || {};


    if (!sku) {

      return res.status(400).json({
        erro: "Produto não informado."
      });

    }


    // --------------------------------------------------------
    // CONFERE SE O SKU EXISTE
    // --------------------------------------------------------

    const produto = produtos[sku];


    if (!produto) {

      return res.status(400).json({
        erro: "Produto inválido."
      });

    }


    // --------------------------------------------------------
    // CRIA IDENTIFICADOR ÚNICO DO PEDIDO
    //
    // Exemplo:
    // LAUDO-01-1760000000000
    // --------------------------------------------------------

    const orderNsu =
      `${sku}-${Date.now()}`;


    // --------------------------------------------------------
    // PAYLOAD INFINITEPAY
    // --------------------------------------------------------

    const payload = {

      handle: HANDLE_INFINITEPAY,

      items: [
        {
          quantity: 1,
          price: produto.preco,
          description: produto.descricao
        }
      ],

      order_nsu: orderNsu,

      redirect_url:
        `${SITE_URL}/pedido.html`,

      webhook_url:
        `${SITE_URL}/api/webhook-infinitepay`

    };


    // --------------------------------------------------------
    // CRIA O CHECKOUT
    // --------------------------------------------------------

    const resposta = await fetch(
      "https://api.checkout.infinitepay.io/links",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(payload)

      }
    );


    // --------------------------------------------------------
    // LÊ A RESPOSTA COM SEGURANÇA
    // --------------------------------------------------------

    const textoResposta =
      await resposta.text();


    let dados;


    try {

      dados =
        textoResposta
          ? JSON.parse(textoResposta)
          : {};

    } catch {

      dados = {
        resposta: textoResposta
      };

    }


    // --------------------------------------------------------
    // ERRO DA INFINITEPAY
    // --------------------------------------------------------

    if (!resposta.ok) {

      console.error(
        "Erro InfinitePay:",
        dados
      );


      return res.status(502).json({
        erro: "Não foi possível criar o checkout.",
        detalhes: dados
      });

    }


    // --------------------------------------------------------
    // URL RETORNADA PELA INFINITEPAY
    // --------------------------------------------------------

    const checkoutUrl =
      dados.url ||
      dados.checkout_url ||
      dados.link ||
      dados.payment_url;


    if (!checkoutUrl) {

      console.error(
        "Resposta sem URL de checkout:",
        dados
      );


      return res.status(502).json({
        erro: "A InfinitePay não retornou a URL do checkout."
      });

    }


    // --------------------------------------------------------
    // DEVOLVE PARA A LOJA
    // --------------------------------------------------------

    return res.status(200).json({

      checkout_url: checkoutUrl,

      order_nsu: orderNsu

    });


  } catch (erro) {

    console.error(
      "Erro ao criar checkout:",
      erro
    );


    return res.status(500).json({
      erro: "Erro interno ao criar o checkout."
    });

  }

}
