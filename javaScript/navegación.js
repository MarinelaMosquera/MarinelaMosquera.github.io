const createNavegación = () => {
    let nav = document.querySelector('.Navegación')

    nav.innerHTML = `
        <div class="nav">
            <img src="imagenes.jpg/logo-2.jpg"  class="logo-2" alt="logo">
            <div class="items-navegación">
                <div class="Buscar">
                    <input type="text" class="buscar-box" placeholder="Buscar productos">
                     <button class="buscar-boton">Buscar</button>
                </div>
                <a href="#"><img src="imagenes.jpg/imagen-usuario.jpg" alt="imagen-logoUsuario"></a>
                <a href="#"><img src="imagenes.jpg/carro-compra.jpg" alt="imagen-carroCompras"></a>
            </div>
        </div>
        <ul class="links-navegación">
            <li class="item-link"><a href="#" class="Link">Inicio</a></li>
            <li class="item-link"><a href="Servicios(productos)/servicios.html" class="link">Productos</a></li>
            <li class="item-link"><a href="Nosotros.html" class="link">Nosotros</a></li>
            <li class="item-link"><a href="formulario de registro.html" class="link ">Registrarse</a></li>   
        </ul>

    `;
}

createNavegación();
