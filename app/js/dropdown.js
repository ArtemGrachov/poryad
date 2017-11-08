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