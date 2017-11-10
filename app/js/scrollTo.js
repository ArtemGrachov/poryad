const scrollToPositions = function () {
    $('html,body').animate({
        scrollTop: $('#previews')
            .offset()
            .top
    }, 1000)
}