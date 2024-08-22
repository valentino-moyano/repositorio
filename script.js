// menu desplegable
    // constantes
    const carritoBtn = document.querySelector("#carritoBtn");
    const carrito = document.querySelector("#carrito")

    // eventos
    carritoBtn.addEventListener("click", abriCarrtio)

    // function
    function abriCarrtio() {
        carrito.classList.toggle("visible")
    };