function enviar(){
    const Nombre = document.getElementById('Nombre').value
    const Apellidos = document.getElementById('Apellidos').value
    const Correo = document.getElementById('Correo electrónico').value
    const gender = document.getElementById('gender').value
    const password = document.getElementById('Contraseña').value

    console.log(Nombre,Apellidos,Correo,gender,password);
}
