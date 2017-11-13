const positions = function () {
    $('.positions-item').on('click', function (e) {
        const $this = $(this);
        if (!$this.hasClass('active')) {

            $this
                .addClass('active');
            $this
                .siblings()
                .removeClass('active');
        } else if ($(e.target).hasClass('positions-nav__close')) {
            $this.removeClass('active');
        }
    })
}