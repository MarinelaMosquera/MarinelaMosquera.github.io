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

function localStoreRegistrarse(Registro){
    localStorage.setItem('localRegistrarse', JSON.stringify(Registro));
}

