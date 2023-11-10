let indexModule = ((formDataUtil, localStorageUtil) => {
    let _this = {};

    _this.Registrarse = () => {

        const form = document.querySelector('form#Registrarse');

        let formObj = formDataUtil.formToObject(form);

        console.log(formObj);
    };

    _this.login = () => {

        const form = document.querySelector('form#Registrarse');

        let formObj = formDataUtil.formToObject(form);

        console.log(formObj);
    };

    _this.loadEvents = () => {

        let registroBoton = document.querySelector('input#registro-boton');

        registroBoton.addEventListener('click',  (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            _this.registro();

            return false;
        });

    };

    return _this;
})(formDataUtil, localStorageUtil);

document.addEventListener("DOMContentLoaded", () => {
    alert('hhh')
    indexModule.loadEvents();

});