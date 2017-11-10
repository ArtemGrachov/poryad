const positions = function () {
    $('.positions-nav__close').on('click', function () {
        $(this)
            .closest('.positions-item')
            .removeClass('active');
    })
    $('.positions-item').on('click', function () {
        const $this = $(this);
        if (!$this.hasClass('active')) {
            $this
                .toggleClass('active');
            $this
                .siblings()
                .removeClass('active');
        }
    })
}