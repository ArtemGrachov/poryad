const scrollToBlock = function (id) {
    $('html,body').animate({
        scrollTop: $('#' + id)
            .offset()
            .top
    }, 1000)
}