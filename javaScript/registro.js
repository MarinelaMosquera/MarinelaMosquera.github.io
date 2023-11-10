var Registrarse = [];

console.log('marinela');
function registro(){
    alert('marinela');
    return true;
}

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

document.querySelector('#registro-boton').addEventListener('click', Registrarse);


function Registrarse(evt) {
    evt.preventDefault();
    let formRegistrarse = document.querySelector('#miFormulario');
    let nuevoUsuario = formDataUtil.formToObject(formRegistrarse);
    console.log(nuevoUsuario);

    localStoreRegistrarse(nuevoUsuario);
    
    return false;
}

document.addEventListener("DOMContentLoaded", () => {

    let containerId = 'div#registry-form-container';
    validateLoggedUserUtil.validate(containerId,'./index.html');

    

})