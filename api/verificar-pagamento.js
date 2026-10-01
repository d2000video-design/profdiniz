// ============================================================
// PROFESSOR DINIZ — VERIFICAÇÃO DE PAGAMENTO
// InfinitePay payment_check
// ============================================================

const HANDLE_INFINITEPAY = "joao-diniz-nqm";


// ============================================================
// CATÁLOGO OFICIAL
// Valores em centavos
// ============================================================

const produtos = {

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
// IDENTIFICA O SKU PELO ORDER_NSU
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
// API
// ============================================================

export default async function handler(req, res) {

  if (req.method !== "POST") {

    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      erro: "Método não permitido."
    });

  }


  try {

    const {
      order_nsu,
      transaction_nsu,
      slug
    } = req.body || {};


    // ========================================================
    // VALIDA PARÂMETROS
    // ========================================================

    if (
      !order_nsu ||
      !transaction_nsu ||
      !slug
    ) {

      return res.status(400).json({
        success: false,
        pago: false,
        erro: "Dados da transação incompletos."
      });

    }


    // ========================================================
    // IDENTIFICA PRODUTO
    // ========================================================

    const sku = obterSku(order_nsu);


    if (!sku || !produtos[sku]) {

      return res.status(400).json({
        success: false,
        pago: false,
        erro: "Pedido inválido."
      });

    }


    const valorEsperado = produtos[sku];


    // ========================================================
    // CONSULTA A INFINITEPAY
    // ========================================================

    const resposta = await fetch(
      "https://api.checkout.infinitepay.io/payment_check",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          handle: HANDLE_INFINITEPAY,
          order_nsu: order_nsu,
          transaction_nsu: transaction_nsu,
          slug: slug
        })
      }
    );


    const texto = await resposta.text();

    let dados;


    try {

      dados = texto
        ? JSON.parse(texto)
        : {};

    } catch {

      dados = {};

    }


    // ========================================================
    // ERRO DE COMUNICAÇÃO
    // ========================================================

    if (!resposta.ok) {

      console.error(
        "Erro payment_check:",
        dados
      );

      return res.status(502).json({
        success: false,
        pago: false,
        erro: "Não foi possível confirmar o pagamento."
      });

    }


    // ========================================================
    // CONFERE PAGAMENTO
    // ========================================================

    if (
      dados.success !== true ||
      dados.paid !== true
    ) {

      return res.status(200).json({
        success: true,
        pago: false,
        status: "aguardando"
      });

    }


    // ========================================================
    // CONFERE O VALOR
    //
    // amount é o valor original do pedido.
    // paid_amount pode variar em função das condições
    // apresentadas no checkout.
    // ========================================================

    const valorConfirmado =
      Number(dados.amount);


    if (
      !Number.isFinite(valorConfirmado) ||
      valorConfirmado !== valorEsperado
    ) {

      console.error(
        "Pagamento com valor divergente:",
        {
          sku: sku,
          esperado: valorEsperado,
          recebido: valorConfirmado
        }
      );


      return res.status(409).json({
        success: false,
        pago: false,
        erro: "Valor do pagamento divergente."
      });

    }


    // ========================================================
    // PAGAMENTO CONFIRMADO
    // ========================================================

    return res.status(200).json({

      success: true,

      pago: true,

      sku: sku,

      order_nsu: order_nsu,

      transaction_nsu: transaction_nsu,

      valor: valorConfirmado,

      installments:
        dados.installments || 1,

      capture_method:
        dados.capture_method || null

    });


  } catch (erro) {

    console.error(
      "Erro ao verificar pagamento:",
      erro
    );


    return res.status(500).json({

      success: false,

      pago: false,

      erro:
        "Erro interno ao verificar o pagamento."

    });

  }

}
