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

// boton para cambiar tema
   function toggleDarkMode() {
    const body = document.body;
    const button =
     document.querySelector('.toggle-button');

    if (body.classList.contains('light-mode')){
        body.classList.remove('light-mode')
        body.classList.add('dark-mode');
        button.textContent = 'Cambiar a modo claro'
    }
    else{
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Cambiar a modo oscuro';
    }
   }
