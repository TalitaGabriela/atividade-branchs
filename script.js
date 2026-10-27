document.addEventListener("DOMContentLoaded", () => {
  console.log("Atividade Branchs carregada.");

  const botaoModoEscuro = document.getElementById("modo-escuro-botao");
  botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
