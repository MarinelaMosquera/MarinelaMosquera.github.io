const createfooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML= `
    <div class="container">
            <img src="imagenes.jpg/logo-2.jpg" class="logo" alt="">
            <div class="footer-container">
                <ul class="categoria">
                    <li class="categoria-titulo">Ropa</li>
                    <li><a href="../Productos/Blusas y crop tops.html" class="footer-link">Blusas y Croptops</a></li>
                    <li><a href="../Productos/pantalones.html" class="footer-link">Pantalones</a></li>
                    <li><a href="../Productos/faldas.html" class="footer-link">Faldas</a></li>
                    <li><a href="../Productos/Vestidos.html" class="footer-link">Vestidos</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-titulo">Acerca de la compañia</p>
        <p class="informacion"> Somos una empresa dedicada al diseño, producción y comercialización
        de propuestas completas de vestuario y accesorios para mujeres. Creamos, innovamos y 
        sorprendemos con todo lo que hacemos.</p>

        <p class="informacion">Soporte Emails-<a href ="mailto: proyectocuenta929@gmail.com" class="informacion-cuenta">proyectocuenta929@gmail.com</a></p>
        <p class="informacion">Telefono- <a href="tel: 3023071678" class="informacion-cuenta">3023071678</a></p>
        <div class="footer-social">
            <div>
                <a href="#" class="social-link">Términos y condiciones</a>
                <a href="#" class="social-link">Privacidad </a>
            </div>
            <div>
                <a href="https://instagram.com/instempresaproyecto?igshid=MXI5bHlxODY4bDM3ag==" class="social-link">instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61552248096891&mibextid=ZbWKwL" class="social-link">Facebook</a>
            </div>
        </div>
        <p class="creditos-footer">Corita shop, tienda online</p>
    </div>
        `;
}

createfooter();