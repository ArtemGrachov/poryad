const initSlider = function (el) {
    const slider = el.find('.slider-list'),
        prevArrow = el.find('.slider-toggle__prev'),
        nextArrow = el.find('.slider-toggle__next');
    slider.slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        pauseOnHover: false
    });
}

const slider = function () {
    const sliders = $('.slider');
    sliders.each(function () {
        initSlider($(this));
    })
}