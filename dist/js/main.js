const dropdown = function () {
    $('.dropdown__btn').on('click', function () {
        const $this = $(this),
            dropdown = $(this).closest('.dropdown');
        $('.dropdown')
            .not($this.parent())
            .removeClass('active');

        dropdown.toggleClass('active');
    })
    $('.dropdown__link').on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        $this.closest('.dropdown')
            .toggleClass('active');
    })
    $(window)
        .on('click', function (e) {
            if (!$(e.target).hasClass('dropdown__btn')) {
                $('.dropdown')
                    .removeClass('active')
            }
        })
}
$(document).ready(function () {
    slider();
    dropdown();
    positions();
})
const positions = function () {
    $('.positions-item').on('click', function () {
        const $this = $(this);
        $this
            .find('.positions-wrap')
            .toggleClass('active');
        $this
            .siblings()
            .find('.positions-wrap')
            .removeClass('active');
    })
}
const slider = function() {
    const sliders = $('.slider');
    sliders.each(function() {
        const $this = $(this),
            slider = $this.find('.slider-list'),
            prevArrow = $this.find('.slider-toggle__prev'),
            nextArrow = $this.find('.slider-toggle__next');
        slider.slick({
            // autoplay: true,
            autoplaySpeed: 1200,
            prevArrow: prevArrow,
            nextArrow: nextArrow
        })
    })
}