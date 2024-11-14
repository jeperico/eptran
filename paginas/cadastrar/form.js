$(document).ready(() => {
    // $("#change-section").on("click", () => {
    //     $(".form-section").each((i, el) => {
    //         $(el).toggleClass("hidden");
    //         $("#change-section").html(
    //             i && !$(el).hasClass("hidden") ? "Anterior" : "Próximo"
    //         );
    //         $("#send").toggleClass("hidden", i && $(el).hasClass("hidden"));
    //     });
    // });

    // $("#content").on("submit", (event) => {
    //     event.preventDefault();
    //     let formData = new FormData(event.target);

    //     for (const [key, value] of formData) {
    //         if (key != "escola" && key != "etapa-escolar" && !value) {
    //             alert(`O campo de ${key} não foi prenchido.`);
    //             return;
    //         }
    //     }

    //     window.location.href = "../Login/Login.html";
    // });

    // $("input[type='password']").each((i, el) => {
    //     $(el).closest(".input");
    // });

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
    let chosen = false;
    let current = null;
    let secNum = $("form .form-section").length;

    console.log($("form .form-section").toArray());

    let mapArray = dir
        ? $("form .form-section").toArray()
        : $("form .form-section").toArray().reverse();

    mapArray.forEach((el, j) => {
        current = chosen ? j : current;
        let c = $(el).hasClass("active");
        $(el).toggleClass("active", chosen);
        $(el).toggleClass("hidden", !chosen);
        chosen = c;
    });

    if (current == 0) {
        $("form .prev").toggleClass("hidden", true);
        $("form .next").toggleClass("hidden", false);
        $("form button[type='submit']").toggleClass("hidden", true);
    } else if (current == secNum - 1) {
        $("form .prev").toggleClass("hidden", false);
        $("form .next").toggleClass("hidden", true);
        $("form button[type='submit']").toggleClass("hidden", false);
    } else {
        $("form .prev").toggleClass("hidden", false);
        $("form .next").toggleClass("hidden", false);
        $("form button[type='submit']").toggleClass("hidden", true);
    }
};
