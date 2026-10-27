document.addEventListener("DOMContentLoaded", () => {
  console.log("Atividade Branchs carregada.");

  const formContato = document.getElementById("form-contato");
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Mensagem enviada com sucesso!");
    formContato.reset();
  });
});
