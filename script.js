// Exibe uma mensagem de boas-vindas no console
console.log("Bem-vindo à Caltack Shop!");

// Espera o carregamento da página antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões de compra
  const botoesComprar = document.querySelectorAll(".botao-comprar");

  // Define os links de destino de cada produto
  const linksProdutos = [
    "https://s.shopee.com.br/70C9hwuDwg", // Fone de Ouvido Wireless
    "https://s.shopee.com.br/9Ka4TtGIMR", // Teclado Multimídia
    "https://s.shopee.com.br/2VjkM2BGfS", // Projetor Android 11
  ];

  // Associa cada botão ao seu respectivo link
  botoesComprar.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      const link = linksProdutos[index];
      // Abre o link em uma nova aba
      window.open(link, "_blank");
    });
  });
});
