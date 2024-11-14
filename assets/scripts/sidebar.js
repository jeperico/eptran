$(document).ready(() => {
    $(".nav-btn").on("click", () => {
        $("header .modal").toggleClass("hide");
        $(".sidebar").toggleClass("hide");
    });

    $("header .modal .bg").on("click", () => {
        $("header .modal").toggleClass("hide");
        $(".sidebar").toggleClass("hide");
    });
});
