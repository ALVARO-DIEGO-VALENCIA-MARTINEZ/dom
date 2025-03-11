document.addEventListener("DOMContentLoaded", function() {
    let precioInput = document.getElementById("precio");
    let cantidadInput = document.getElementById("cantidad");
    let totalElement = document.getElementById("total");

    function calcularTotal() {
        let precio = parseFloat(precioInput.value);
        let cantidad = parseInt(cantidadInput.value);
        let total = precio * cantidad;
        totalElement.textContent = total.toFixed(2); 
    }

    
    cantidadInput.addEventListener("input", calcularTotal);
});
