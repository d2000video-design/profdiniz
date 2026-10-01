// ============================================================
// PROFESSOR DINIZ — CHECKOUT INFINITEPAY
// Vercel Serverless Function
// ============================================================

const HANDLE_INFINITEPAY = "joao-diniz-nqm";

const SITE_URL = "https://profdiniz.vercel.app";


// ============================================================
// CATÁLOGO AUTORIZADO
// Neste primeiro teste liberamos somente o Modelo 01.
// O preço fica no servidor e NÃO vem do navegador.
// ============================================================

const produtos = {

  "LAUDO-01": {
    descricao: "Modelo 01 - Avaliacao de Apartamento - Metodo Comparativo",
    preco: 9800
  }

};


// ============================================================
// ENDPOINT
// ============================================================

export default async function handler(req, res) {

  // ----------------------------------------------------------
  // Apenas POST
  // ----------------------------------------------------------

  if (req.method !== "POST") {

    res.setHeader("Allow", "POST");

    return res.status(405).json({
      erro: "Método não permitido."
    });

  }


  try {

    // --------------------------------------------------------
    // Recebe somente o SKU enviado pela loja
    // --------------------------------------------------------

    const { sku } = req.body || {};


    if (!sku) {

      return res.status(400).json({
        erro: "Produto não informado."
      });

    }


    // --------------------------------------------------------
    // Confere se o produto existe no catálogo autorizado
    // --------------------------------------------------------

    const produto = produtos[sku];


    if (!produto) {

      return res.status(400).json({
        erro: "Produto inválido."
      });

    }


    // --------------------------------------------------------
    // Cria identificador único do pedido
    // --------------------------------------------------------

    const orderNsu =
      `${sku}-${Date.now()}`;


    // --------------------------------------------------------
    // Payload enviado à InfinitePay
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
    // Cria checkout na InfinitePay
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


    const dados = await resposta.json();


    // --------------------------------------------------------
    // Caso a InfinitePay rejeite a criação
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
    // A documentação/resposta pode fornecer a URL do checkout.
    // Procuramos os nomes usuais retornados pela API.
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
        erro: "A InfinitePay não retornou a URL do checkout.",
        detalhes: dados
      });

    }


    // --------------------------------------------------------
    // Retorna somente o necessário para a loja
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
