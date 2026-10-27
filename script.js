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
  const formContatoErro = document.getElementById("form-contato-erro");

  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.getElementById("email").value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formContato.checkValidity() || !regexEmail.test(email)) {
      formContatoErro.textContent = "Preencha todos os campos corretamente.";
      return;
    }

    formContatoErro.textContent = "";
    alert("Mensagem enviada com sucesso!");
    formContato.reset();
  });

  const formTarefa = document.getElementById("form-tarefa");
  const tarefaInput = document.getElementById("tarefa-input");
  const listaTarefas = document.getElementById("lista-tarefas");

  formTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (tarefaInput.value.trim() === "") return;

    const item = document.createElement("li");
    item.textContent = tarefaInput.value;
    listaTarefas.appendChild(item);

    tarefaInput.value = "";
  });
});
