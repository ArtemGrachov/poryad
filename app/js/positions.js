const positions = function () {
    $('.positions-item').on('click', function (e) {
        const $this = $(this);
        $this
            .toggleClass('active');
        $this
            .siblings()
            .removeClass('active');
    })
}