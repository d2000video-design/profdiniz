// ============================================================
// PROFESSOR DINIZ — LOJA DE MODELOS DE LAUDOS
// Catálogo: 24 modelos individuais + 14 combos
// ============================================================

const produtos = [
  {
    id: "laudo-01",
    numero: "01",
    nome: "Avaliação de Apartamento",
    subtitulo: "Método Comparativo",
    categoria: "Residencial",
    preco: 98,
    imagem: "assets/laudo-01.png",
    sku: "LAUDO-01"
  },
  {
    id: "laudo-02",
    numero: "02",
    nome: "Avaliação de Casa",
    subtitulo: "Método Comparativo",
    categoria: "Residencial",
    preco: 98,
    imagem: "assets/laudo-02.png",
    sku: "LAUDO-02"
  },
  {
    id: "laudo-03",
    numero: "03",
    nome: "Avaliação de Casa",
    subtitulo: "Método Evolutivo",
    categoria: "Residencial",
    preco: 128,
    imagem: "assets/laudo-03.png",
    sku: "LAUDO-03"
  },
  {
    id: "laudo-04",
    numero: "04",
    nome: "Avaliação de Terreno",
    subtitulo: "Método Comparativo",
    categoria: "Terrenos",
    preco: 98,
    imagem: "assets/laudo-04.png",
    sku: "LAUDO-04"
  },
  {
    id: "laudo-05",
    numero: "05",
    nome: "Avaliação de Terreno - Área",
    subtitulo: "Método Involutivo",
    categoria: "Terrenos",
    preco: 128,
    imagem: "assets/laudo-05.png",
    sku: "LAUDO-05"
  },
  {
    id: "laudo-06",
    numero: "06",
    nome: "Avaliação de Gleba Urbanizável",
    subtitulo: "Método Comparativo",
    categoria: "Terrenos",
    preco: 98,
    imagem: "assets/laudo-06.png",
    sku: "LAUDO-06"
  },
  {
    id: "laudo-07",
    numero: "07",
    nome: "Avaliação de Gleba Urbanizável",
    subtitulo: "Método Involutivo",
    categoria: "Terrenos",
    preco: 128,
    imagem: "assets/laudo-07.png",
    sku: "LAUDO-07"
  },
  {
    id: "laudo-08",
    numero: "08",
    nome: "Avaliação de Prédio Comercial",
    subtitulo: "Método Evolutivo",
    categoria: "Comercial",
    preco: 128,
    imagem: "assets/laudo-08.png",
    sku: "LAUDO-08"
  },
  {
    id: "laudo-09",
    numero: "09",
    nome: "Avaliação de Complexo Comercial-Residencial",
    subtitulo: "Método Evolutivo",
    categoria: "Comercial",
    preco: 128,
    imagem: "assets/laudo-09.png",
    sku: "LAUDO-09"
  },
  {
    id: "laudo-10",
    numero: "10",
    nome: "Avaliação de Galpão, Armazém, Depósito ou Barracão",
    subtitulo: "Método Evolutivo",
    categoria: "Comercial",
    preco: 128,
    imagem: "assets/laudo-10.png",
    sku: "LAUDO-10"
  },
  {
    id: "laudo-11",
    numero: "11",
    nome: "Avaliação de Área Rural - Terra",
    subtitulo: "Método Comparativo",
    categoria: "Rural",
    preco: 128,
    imagem: "assets/laudo-11.png",
    sku: "LAUDO-11"
  },
  {
    id: "laudo-12",
    numero: "12",
    nome: "Avaliação de Área Rural",
    subtitulo: "Terra + Benfeitorias + Instalações — Método Evolutivo",
    categoria: "Rural",
    preco: 148,
    imagem: "assets/laudo-12.png",
    sku: "LAUDO-12"
  },
  {
    id: "laudo-13",
    numero: "13",
    nome: "Avaliação de Servidão Administrativa",
    subtitulo: "Linha de Transmissão",
    categoria: "Servidão",
    preco: 148,
    imagem: "assets/laudo-13.png",
    sku: "LAUDO-13"
  },
  {
    id: "laudo-14",
    numero: "14",
    nome: "Avaliação de Servidão Administrativa",
    subtitulo: "Passagens de Tubulações, Veículos e Pedestres",
    categoria: "Servidão",
    preco: 148,
    imagem: "assets/laudo-14.png",
    sku: "LAUDO-14"
  },
  {
    id: "laudo-15",
    numero: "15",
    nome: "Avaliação de Empresa",
    subtitulo: "Modelo profissional editável",
    categoria: "Empresarial",
    preco: 168,
    imagem: "assets/laudo-15.png",
    sku: "LAUDO-15"
  },
  {
    id: "laudo-16",
    numero: "16",
    nome: "Avaliação de Posto de Combustível",
    subtitulo: "Método Evolutivo",
    categoria: "Empresarial",
    preco: 168,
    imagem: "assets/laudo-16.png",
    sku: "LAUDO-16"
  },
  {
    id: "laudo-17",
    numero: "17",
    nome: "Avaliação de Desapropriação",
    subtitulo: "Laudo 1",
    categoria: "Desapropriação",
    preco: 148,
    imagem: "assets/laudo-17.png",
    sku: "LAUDO-17"
  },
  {
    id: "laudo-18",
    numero: "18",
    nome: "Avaliação de Desapropriação",
    subtitulo: "Laudo 2",
    categoria: "Desapropriação",
    preco: 148,
    imagem: "assets/laudo-18.png",
    sku: "LAUDO-18"
  },
  {
    id: "laudo-19",
    numero: "19",
    nome: "Avaliação de Desapropriação",
    subtitulo: "Laudo 3",
    categoria: "Desapropriação",
    preco: 148,
    imagem: "assets/laudo-19.png",
    sku: "LAUDO-19"
  },
  {
    id: "laudo-20",
    numero: "20",
    nome: "Avaliação de Desapropriação",
    subtitulo: "Laudo 4 - Processo Judicial",
    categoria: "Desapropriação",
    preco: 148,
    imagem: "assets/laudo-20.png",
    sku: "LAUDO-20"
  },
  {
    id: "laudo-21",
    numero: "21",
    nome: "Avaliação de Lucros Cessantes",
    subtitulo: "Modelo profissional editável",
    categoria: "Empresarial",
    preco: 148,
    imagem: "assets/laudo-21.png",
    sku: "LAUDO-21"
  },
  {
    id: "laudo-22",
    numero: "22",
    nome: "Avaliação de Valor Locativo",
    subtitulo: "Apartamento e Casa — Método Comparativo",
    categoria: "Locação",
    preco: 98,
    imagem: "assets/laudo-22.png",
    sku: "LAUDO-22"
  },
  {
    id: "laudo-23",
    numero: "23",
    nome: "Avaliação de Valor Locativo",
    subtitulo: "Loja Comercial e Prédio Comercial — Método Comparativo",
    categoria: "Locação",
    preco: 128,
    imagem: "assets/laudo-23.png",
    sku: "LAUDO-23"
  },
  {
    id: "laudo-24",
    numero: "24",
    nome: "Avaliação de Valor Locativo",
    subtitulo: "Galpão Industrial, Depósito, Armazém e Barracão — Método Comparativo",
    categoria: "Locação",
    preco: 128,
    imagem: "assets/laudo-24.png",
    sku: "LAUDO-24"
  }
];


// ============================================================
// COMBOS
// ============================================================

const combos = [
  {
    id: "combo-01",
    nome: "Combo 1",
    preco: 328,
    modelos: ["01", "04", "11", "22"],
    sku: "COMBO-01"
  },
  {
    id: "combo-02",
    nome: "Combo 2",
    preco: 328,
    modelos: ["02", "07", "11", "23"],
    sku: "COMBO-02"
  },
  {
    id: "combo-03",
    nome: "Combo 3",
    preco: 338,
    modelos: ["03", "05", "08", "12"],
    sku: "COMBO-03"
  },
  {
    id: "combo-04",
    nome: "Combo 4",
    preco: 488,
    modelos: ["01", "03", "05", "06", "09", "11"],
    sku: "COMBO-04"
  },
  {
    id: "combo-05",
    nome: "Combo 5",
    preco: 788,
    modelos: ["01", "03", "05", "07", "09", "11", "14", "18", "23"],
    sku: "COMBO-05"
  },
  {
    id: "combo-06",
    nome: "Combo 6",
    titulo: "Método Evolutivo",
    preco: 358,
    modelos: ["03", "08", "12"],
    sku: "COMBO-06"
  },
  {
    id: "combo-07",
    nome: "Combo 7",
    titulo: "Aluguéis",
    preco: 288,
    modelos: ["22", "23", "24"],
    sku: "COMBO-07"
  },
  {
    id: "combo-08",
    nome: "Combo 8",
    titulo: "Servidões",
    preco: 248,
    modelos: ["13", "14"],
    sku: "COMBO-08"
  },
  {
    id: "combo-09",
    nome: "Combo 9",
    titulo: "Imóveis Rurais",
    preco: 228,
    modelos: ["11", "12"],
    sku: "COMBO-09"
  },
  {
    id: "combo-10",
    nome: "Combo 10",
    titulo: "Desapropriações",
    preco: 478,
    modelos: ["17", "18", "19", "20"],
    sku: "COMBO-10"
  },
  {
    id: "combo-11",
    nome: "Combo 11",
    titulo: "Empresarial",
    preco: 278,
    modelos: ["15", "16"],
    sku: "COMBO-11"
  },
  {
    id: "combo-12",
    nome: "Combo 12",
    titulo: "Básico",
    preco: 688,
    modelos: ["02", "03", "04", "06", "10", "11", "17", "24"],
    sku: "COMBO-12"
  },
  {
    id: "combo-13",
    nome: "Combo 13",
    titulo: "Médio",
    preco: 988,
    modelos: ["01", "03", "07", "09", "10", "11", "13", "15", "16", "19", "21", "23"],
    sku: "COMBO-13"
  },
  {
    id: "combo-14",
    nome: "Combo 14",
    titulo: "Máximo",
    preco: 1528,
    modelos: [
      "01", "02", "03", "04", "05", "06",
      "07", "08", "09", "10", "11", "12",
      "13", "14", "15", "16", "17", "18",
      "19", "20", "21", "22", "23", "24"
    ],
    sku: "COMBO-14",
    destaque: true
  }
];


// ============================================================
// FORMATAÇÃO
// ============================================================

function moeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


// ============================================================
// RENDERIZAÇÃO DOS LAUDOS
// ============================================================

function criarCardProduto(produto) {
  return `
    <article class="produto-card" data-categoria="${produto.categoria}">
      
      <div class="produto-imagem">
        <img
          src="${produto.imagem}"
          alt="${produto.nome} - ${produto.subtitulo}"
          loading="lazy"
        >
      </div>

      <div class="produto-conteudo">

        <span class="produto-numero">
          Modelo ${produto.numero}
        </span>

        <h3>${produto.nome}</h3>

        <p class="produto-subtitulo">
          ${produto.subtitulo}
        </p>

        <p class="produto-formato">
          Arquivo editável
        </p>

        <div class="produto-footer">

          <strong class="produto-preco">
            ${moeda(produto.preco)}
          </strong>

          <button
            class="btn-comprar"
            type="button"
            onclick="comprarProduto('${produto.sku}')"
          >
            Comprar
          </button>

        </div>

      </div>

    </article>
  `;
}


function renderizarProdutos(lista = produtos) {
  const container =
    document.getElementById("produtos-grid") ||
    document.getElementById("lista-produtos") ||
    document.getElementById("produtos");

  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="nenhum-resultado">
        Nenhum modelo encontrado.
      </div>
    `;
    return;
  }

  container.innerHTML = lista
    .map(criarCardProduto)
    .join("");
}


// ============================================================
// RENDERIZAÇÃO DOS COMBOS
// ============================================================

function criarCardCombo(combo) {
  const nomesModelos = combo.modelos
    .map(numero => {
      const produto = produtos.find(p => p.numero === numero);
      return produto
        ? `<li><strong>${numero}</strong> — ${produto.nome}</li>`
        : "";
    })
    .join("");

  return `
    <article class="combo-card ${combo.destaque ? "combo-destaque" : ""}">

      ${
        combo.destaque
          ? `<span class="combo-badge">Coleção completa</span>`
          : ""
      }

      <span class="combo-numero">
        ${combo.nome}
      </span>

      ${
        combo.titulo
          ? `<h3>${combo.titulo}</h3>`
          : `<h3>Seleção de modelos</h3>`
      }

      <p class="combo-quantidade">
        ${combo.modelos.length}
        ${combo.modelos.length === 1 ? "modelo" : "modelos"} incluídos
      </p>

      <ul class="combo-lista">
        ${nomesModelos}
      </ul>

      <div class="combo-footer">

        <strong class="combo-preco">
          ${moeda(combo.preco)}
        </strong>

        <button
          class="btn-comprar"
          type="button"
          onclick="comprarProduto('${combo.sku}')"
        >
          Comprar combo
        </button>

      </div>

    </article>
  `;
}


function renderizarCombos() {
  const container =
    document.getElementById("combos-grid") ||
    document.getElementById("lista-combos") ||
    document.getElementById("combos");

  if (!container) return;

  container.innerHTML = combos
    .map(criarCardCombo)
    .join("");
}


// ============================================================
// BUSCA
// ============================================================

function configurarBusca() {
  const campo =
    document.getElementById("busca") ||
    document.getElementById("pesquisa") ||
    document.getElementById("search");

  if (!campo) return;

  campo.addEventListener("input", function () {
    const termo = this.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const resultado = produtos.filter(produto => {
      const texto = `
        ${produto.numero}
        ${produto.nome}
        ${produto.subtitulo}
        ${produto.categoria}
      `
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return texto.includes(termo);
    });

    renderizarProdutos(resultado);
  });
}


// ============================================================
// FILTROS
// ============================================================

function configurarFiltros() {
  const botoes = document.querySelectorAll(
    "[data-filtro], .filtro-btn"
  );

  botoes.forEach(botao => {
    botao.addEventListener("click", function () {
      botoes.forEach(btn =>
        btn.classList.remove("ativo")
      );

      this.classList.add("ativo");

      const categoria =
        this.dataset.filtro ||
        this.dataset.categoria ||
        "Todos";

      if (
        categoria === "Todos" ||
        categoria === "todos" ||
        categoria === "all"
      ) {
        renderizarProdutos(produtos);
        return;
      }

      const filtrados = produtos.filter(
        produto =>
          produto.categoria.toLowerCase() ===
          categoria.toLowerCase()
      );

      renderizarProdutos(filtrados);
    });
  });
}


// ============================================================
// COMPRA
// ============================================================

// Os links do gateway de pagamento serão adicionados
// aqui depois que definirmos a plataforma de checkout.

const checkoutLinks = {
  // Exemplo futuro:
  // "LAUDO-01": "https://checkout...",
  // "COMBO-14": "https://checkout..."
};


function comprarProduto(sku) {
  const link = checkoutLinks[sku];

  if (link) {
    window.location.href = link;
    return;
  }

  alert(
    "O checkout deste produto está sendo configurado. Em breve a compra estará disponível diretamente pelo site."
  );
}


// ============================================================
// MENU MOBILE
// ============================================================

function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("open");
  }
}


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");

    if (menu) {
      menu.classList.remove("open");
    }
  });
});


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  renderizarCombos();
  configurarBusca();
  configurarFiltros();
});
