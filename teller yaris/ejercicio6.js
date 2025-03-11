document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("emailForm");
    let emailInput = document.getElementById("email");
    let errorMessage = document.getElementById("error-message");
    let validoMessage = document.getElementById("valido-message"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        validateEmail();
    });

    emailInput.addEventListener("input", validateEmail);

    function validateEmail() {
        let emailValue = emailInput.value.trim();
        let isValid = validarEmail(emailValue); 

        if (isValid === false) { 
            errorMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
            errorMessage.style.display = "block"; 
            validoMessage.style.display = "none"; 
            emailInput.classList.add("invalid");
            emailInput.classList.remove("valid");
        } 
        
        if (isValid === true) { 
            validoMessage.textContent = "Correo electrónico válido.";
            validoMessage.style.display = "block"; 
            errorMessage.style.display = "none"; 
            emailInput.classList.add("valid");
            emailInput.classList.remove("invalid");
        }
    }

    function validarEmail(email) {
        return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
    }
});
