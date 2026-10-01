// ============================================================
// PROFESSOR DINIZ — WEBHOOK INFINITEPAY
//
// Recebe a notificação de pagamento aprovado.
//
// IMPORTANTE:
// Nesta etapa o webhook NÃO libera arquivos.
// Primeiro validamos os dados recebidos.
// ============================================================


// ============================================================
// CATÁLOGO OFICIAL DE VALORES
// Valores em centavos.
// ============================================================

const valores = {

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
// IDENTIFICA O SKU PELO ORDER NSU
//
// Exemplos:
// LAUDO-15-1760000000000  -> LAUDO-15
// COMBO-14-1760000000000  -> COMBO-14
// ============================================================

function obterSku(orderNsu) {

  if (
    typeof orderNsu !== "string"
  ) {

    return null;

  }


  const resultado =
    orderNsu.match(
      /^(LAUDO-\d{2}|COMBO-\d{2})-\d+$/
    );


  if (!resultado) {

    return null;

  }


  return resultado[1];

}


// ============================================================
// WEBHOOK
// ============================================================

export default async function handler(req, res) {

  // ----------------------------------------------------------
  // SOMENTE POST
  // ----------------------------------------------------------

  if (req.method !== "POST") {

    res.setHeader(
      "Allow",
      "POST"
    );


    return res.status(405).json({

      success: false,

      message:
        "Método não permitido."

    });

  }


  try {

    const dados =
      req.body || {};


    // --------------------------------------------------------
    // CAMPOS PRINCIPAIS ENVIADOS PELA INFINITEPAY
    // --------------------------------------------------------

    const orderNsu =
      dados.order_nsu;


    const transactionNsu =
      dados.transaction_nsu;


    const invoiceSlug =
      dados.invoice_slug;


    const amount =
      Number(
        dados.amount
      );


    // --------------------------------------------------------
    // VALIDA ORDER NSU
    // --------------------------------------------------------

    const sku =
      obterSku(
        orderNsu
      );


    if (!sku) {

      console.error(
        "Webhook com order_nsu inválido:",
        orderNsu
      );


      return res.status(400).json({

        success: false,

        message:
          "Pedido não encontrado."

      });

    }


    // --------------------------------------------------------
    // CONFERE SE O SKU EXISTE
    // --------------------------------------------------------

    const valorEsperado =
      valores[sku];


    if (
      typeof valorEsperado !== "number"
    ) {

      console.error(
        "SKU inexistente:",
        sku
      );


      return res.status(400).json({

        success: false,

        message:
          "Produto não encontrado."

      });

    }


    // --------------------------------------------------------
    // CONFERE O VALOR DO PEDIDO
    // --------------------------------------------------------

    if (
      !Number.isFinite(amount) ||
      amount !== valorEsperado
    ) {

      console.error(
        "Valor divergente no webhook:",
        {
          sku,
          recebido: amount,
          esperado: valorEsperado
        }
      );


      return res.status(400).json({

        success: false,

        message:
          "Valor do pedido divergente."

      });

    }


    // --------------------------------------------------------
    // CONFERE IDENTIFICADORES DA TRANSAÇÃO
    // --------------------------------------------------------

    if (
      !transactionNsu ||
      !invoiceSlug
    ) {

      console.error(
        "Webhook sem identificação completa:",
        {
          orderNsu,
          transactionNsu,
          invoiceSlug
        }
      );


      return res.status(400).json({

        success: false,

        message:
          "Transação incompleta."

      });

    }


    // --------------------------------------------------------
    // LOG PARA O TESTE
    //
    // Na etapa seguinte estes dados serão usados pela
    // estrutura de confirmação/entrega.
    // --------------------------------------------------------

    console.log(
      "PAGAMENTO RECEBIDO",
      {
        sku: sku,

        order_nsu:
          orderNsu,

        transaction_nsu:
          transactionNsu,

        invoice_slug:
          invoiceSlug,

        amount:
          amount,

        paid_amount:
          dados.paid_amount,

        capture_method:
          dados.capture_method,

        installments:
          dados.installments,

        receipt_url:
          dados.receipt_url
      }
    );


    // --------------------------------------------------------
    // RESPOSTA ESPERADA PELA INFINITEPAY
    // --------------------------------------------------------

    return res.status(200).json({

      success: true,

      message: null

    });


  } catch (erro) {

    console.error(
      "Erro no webhook InfinitePay:",
      erro
    );


    return res.status(400).json({

      success: false,

      message:
        "Erro ao processar pagamento."

    });

  }

}
