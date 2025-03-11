let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio }); 
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalElemento = document.getElementById("total");

    listaCarrito.innerHTML = ""; 

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let li = document.createElement("li");
        li.textContent = item.nombre + " - " + item.precio; 
        listaCarrito.appendChild(li);
    }

    totalElemento.textContent = total;
}
