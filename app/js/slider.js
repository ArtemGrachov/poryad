const slider = function () {
    const sliders = $('.slider');
    sliders.each(function () {
        const $this = $(this),
            slider = $this.find('.slider-list'),
            prevArrow = $this.find('.slider-toggle__prev'),
            nextArrow = $this.find('.slider-toggle__next');
        slider.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            pauseOnHover: false
        })
    })
}