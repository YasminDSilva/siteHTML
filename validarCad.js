
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("c_email").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !tel || !cpf || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert("O CPF deve conter 11 números!");
      return;
    }
    
    alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}!`);

  });
});