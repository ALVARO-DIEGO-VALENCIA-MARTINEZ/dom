document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById("countdown");
    let startButton = document.getElementById("startButton");
    let counter = 10;
    let interval = null;

    startButton.addEventListener("click", function() {
        if (interval) clearInterval(interval); 

        counter = 10;
        countdownElement.textContent = counter;

        interval = setInterval(function() {
            countdownElement.textContent = counter;
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                countdownElement.textContent = "¡Tiempo terminado!";
            }
        }, 1000);
    });
});
