document.addEventListener("DOMContentLoaded", () => {

    validateLoggedUserUtil.validate('./../../index.html');

    inventoryModule.loadInventory();
    inventoryModule.initSaveItemForm();
})