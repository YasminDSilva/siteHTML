
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede envio automático

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

              if (senha.length < 6) {
                alert("A senha deve ter pelo menos 6 caracteres.");
            } 
              else {
               alert("Login realizado com sucesso!");
            }
        });
    });