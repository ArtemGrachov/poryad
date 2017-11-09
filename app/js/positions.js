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