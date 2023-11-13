var Registrarse = [];



function addRegistrarse(Nombre,Apellido,Email,Contraseña,Gender){
    
    var nuevoUsuario = {
        Nombre : Nombre,
        Apellido : Apellido,
        Email : Email,
        Password : Contraseña,
        Gender : GenderSelect
        
    };

    console.log(nuevoUsuario);
    Registrarse.push(nuevoUsuario);
    localStoreRegistrarse(Registrarse);

}

function getRegistrarse(){
    var storeRegistro = localStorage.getItem('localRegistrarse');
    if(storeRegistro == null){
        Registrarse =[];
    }else{
        Registrarse = JSON.parse(storeRegistro);
    }

    return Registrarse;

}

function localStoreRegistrarse(data){
    localStorage.setItem('localRegistrarse', JSON.stringify(data));
}



function RegistrarseEvento(evt) {
    evt.preventDefault();
    let formRegistrarse = document.querySelector('#miFormulario');
    let nuevoUsuario = formDataUtil.formToObject(formRegistrarse);
    console.log(nuevoUsuario);

    localStoreRegistrarse(nuevoUsuario);
    window.location.replace('index.html');
    return false;
}

document.addEventListener("DOMContentLoaded", () => {

    let containerId = 'div#registry-form-container';
    validateLoggedUserUtil.validate(containerId,'./index.html');
    document.querySelector('#registro-boton').addEventListener('click', RegistrarseEvento);


})