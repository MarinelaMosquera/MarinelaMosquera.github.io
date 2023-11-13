let indexModule = ((localStorageUtil) => {
    let _this = {};

    _this.init = () => {
        let _user = localStorageUtil.get('localRegistrarse'); 
        document.querySelector('#user-info').innerHTML = _user.Nombre + " " + _user.Apellidos;
    };

    return _this;
})(localStorageUtil);

document.addEventListener("DOMContentLoaded", () => {
    indexModule.init();

});



