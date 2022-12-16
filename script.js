const dados = [];

function guardaDados() {
  event.preventDefault();
  const novosDados = {
    nome: document.getElementById("nomeF").value,
    email: document.getElementById("emailF").value,
    cpf: document.getElementById("cpfF").value,
  };
  dados.push(novosDados);
  console.log(dados);
}