import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slider = new Swiper(".slider .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    autoplay: {
        delay: 5000,
    },
});

const postCarousel = new Swiper(".post-carousel .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 40,
    slidesPerView: 2,
});
