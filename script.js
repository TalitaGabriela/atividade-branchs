document.addEventListener("DOMContentLoaded", () => {
  console.log("Atividade Branchs carregada.");

  let contador = 0;
  const valor = document.getElementById("contador-valor");
  const botao = document.getElementById("contador-botao");

  botao.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
  });

  const botaoModoEscuro = document.getElementById("modo-escuro-botao");
  botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const formContato = document.getElementById("form-contato");
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Mensagem enviada com sucesso!");
    formContato.reset();
  });
});
