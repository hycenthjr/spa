var swiper = new Swiper(".testSlide-content", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     520: {
    //         slidesPerView: 1,
    //     },
    //     950: {
    //         slidesPerView: 1,
    //     },
    // }

});