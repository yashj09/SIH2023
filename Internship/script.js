document.addEventListener("DOMContentLoaded", function () {

    const applyButtons = document.querySelectorAll(".apply-button");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");
    const applicationForm = document.getElementById("application-form");

    if (!modal || !closeModal || !applicationForm) {
        console.error("One or more elements not found. Check element IDs.");
        return;
    }
    applyButtons.forEach(function (applyButton) {
        applyButton.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "";
        }
    });
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Application submitted!");

        modal.style.display = "";
    });


});
