function convertir() {
    let km = document.getElementById("kilometros").value;
    let millas = km * 0.621371; 
    document.getElementById("millas").textContent = millas.toFixed(2); 
}
