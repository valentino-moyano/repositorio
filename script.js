/* menu desplegable */
    /* constantes */
    const carritoBtn = document.querySelector("#carritoBtn");
    const carrito = document.querySelector("#carrito");

    /* eventos */
    carritoBtn.addEventListener("click", abriCarrtio);
    /* function */
    function abriCarrtio() {
        carrito.classList.toggle("visible");
    };

/* carrito */
    let allProducts = []
    const rowProduct = document.querySelector('.containerProduct')

    const productsList = document.querySelector(".botonTemporal");

    productsList.addEventListener('click', e => {
        if(e.target.classList.contains('botonTemporal')){
            const product = e.target.parentElement

            const infoProduct = {
                quantity: 1,
                title: product.querySelector('h1').textContent,
                price: product.querySelector('p').textContent,
            };
            
            allProducts = [...allProducts, infoProduct]
            
            showHTML();
        };

        console.log(allProducts)
    });

    const showHTML = () => {
        
        allProducts.forEach(product => {
            const containerProduct = document.createElement('div')
            containerProduct.classList.add('producto')

            containerProduct.innerHTML = `
                <div class="producto">
                    <div id="cuantity">
                        ${product.quantity}
                    </div>

                    <h1 id="itemName">${product.title}</h1>
    
                    <div id="price">
                       <p>${product.price}</p> 
                    </div>
                    <div id="BtnClose">
                    <img src="./fotos/x.svg">
                    </div>
                </div>
            `

            rowProduct.append(containerProduct)
        })
    }