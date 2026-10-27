document.addEventListener("DOMContentLoaded", () => {
  console.log("Atividade Branchs carregada.");

  let contador = 0;
  const valor = document.getElementById("contador-valor");
  const botao = document.getElementById("contador-botao");

  botao.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
  });
});
