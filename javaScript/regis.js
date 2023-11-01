document.querySelector('#registro-boton').addEventListener('click', Registrarse);


function Registrarse(evt) {
    evt.preventDefault();
    let formRegistrarse = document.querySelector('#miFormulario');
    let nuevoUsuario = formDataUtil.formToObject(formRegistrarse);
    console.log(nuevoUsuario);

    localStoreRegistrarse(nuevoUsuario);
    
    return false;
}