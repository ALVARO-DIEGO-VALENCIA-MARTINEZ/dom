document.addEventListener("DOMContentLoaded", function() {
    let cargarBtn = document.getElementById("cargarBtn");
    let contenidoDiv = document.getElementById("contenido");

    cargarBtn.addEventListener("click", function() {
        contenidoDiv.textContent = "Cargando..."; 

        setTimeout(function() {
            contenidoDiv.textContent = "¡Contenido cargado exitosamente!";
        }, 2000); 
    });
});
