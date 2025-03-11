document.addEventListener("DOMContentLoaded", function() {
    let cuadrado = document.getElementById("cuadrado");
    let contenedor = document.querySelector(".contenedor");
    
    let posX = 225; 
    let posY = 125;
    let paso = 10; 

    document.addEventListener("keydown", function(event) {
        let contenedorRect = contenedor.getBoundingClientRect();
        let cuadradoRect = cuadrado.getBoundingClientRect();

        switch (event.key) {
            case "ArrowUp":
                if (cuadradoRect.top > contenedorRect.top) posY -= paso;
                break;
            case "ArrowDown":
                if (cuadradoRect.bottom < contenedorRect.bottom) posY += paso;
                break;
            case "ArrowLeft":
                if (cuadradoRect.left > contenedorRect.left) posX -= paso;
                break;
            case "ArrowRight":
                if (cuadradoRect.right < contenedorRect.right) posX += paso;
                break;
        }

        cuadrado.style.top = posY + "px";
        cuadrado.style.left = posX + "px";
    });
});
