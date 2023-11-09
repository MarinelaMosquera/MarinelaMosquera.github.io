const productoImagen = document.querySelectorAll(".producto-imagen img");
const productosImagenSlide = document.querySelector(".imagen-slider");

let activeImagenSlide = 0;

productoImagen.forEach((item, i) => {
    item.addEventListener('click', () => {
        productoImagen[activeImagenSlide].classList.remove('active');
        item.classList.add('active');
        productosImagenSlide.style.backgroundImagen = `url('${item.src}')`;
        activeImagenSlide = i;
    })
})

const sizeBoton = document.querySelectorAll('.size-radio-boton');
let chekedBoton = 0;

sizeBoton.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBoton[chekedBoton].classList.remove('check');
        item.classList.add('check');
        chekedBoton = i;
    })
})
