$(document).ready(() => {
    $("form .next").on("click", () => changeSection(1));
    $("form .prev").on("click", () => changeSection(-1));

    $(".input:has(> input[type='password']) .turn").each((i, el) => {
        $(el).on("click", () => {
            let input = $(el).closest(".input").children("input")[0];
            input.type = input.type == "text" ? "password" : "text";
            $(el).children("i").toggleClass("fa-eye");
            $(el).children("i").toggleClass("fa-eye-slash");
        });
    });
});

const changeSection = (dir) => {
    if ($(".page-form").length) {
        window.scrollTo(window.scrollX, 0);
    }
    let chosen = false;
    let current = 0;
    let secNum = $("form .form-section").length;

    let mapArray =
        dir > 0
            ? $("form .form-section").toArray()
            : $("form .form-section").toArray().reverse();

    mapArray.forEach((el, j) => {
        current = chosen ? j - (dir < 0 ? secNum - 1 : 0) : current;
        let c = $(el).hasClass("active");
        $(el).toggleClass("active", chosen);
        $(el).toggleClass("hidden", !chosen);
        chosen = c;
    });

    $("form .prev").toggleClass("hidden", current == 0);
    $("form .next").toggleClass("hidden", current == secNum - 1);
    $("form button[type='submit']").toggleClass("hidden", current < secNum - 1);
};
