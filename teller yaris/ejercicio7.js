document.addEventListener("DOMContentLoaded", function() {
    let passwordInput = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("change", function() {
       
        passwordInput.type = this.checked ? "text" : "password";
    });
});
