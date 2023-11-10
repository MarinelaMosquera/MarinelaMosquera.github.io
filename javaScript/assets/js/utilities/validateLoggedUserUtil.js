let validateLoggedUserUtil = ((localStorageUtil) => {
    let _this = {};

    _this.validate = (containerId, indexPath) => {

        let body = document.querySelector(containerId);

        body.classList.add('hidden-body');

        const userLogged = localStorageUtil.get('userLogged');

        if (userLogged) {
            body.classList.remove('hidden-body');
        } else {
            window.location.replace(indexPath);
        }
    };

    return _this;
})(localStorageUtil);