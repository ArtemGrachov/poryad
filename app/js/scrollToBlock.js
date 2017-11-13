const scrollToBlock = function (id) {
    console.log('call scroll');
    $('html,body').animate({
        scrollTop: $('#' + id)
            .offset()
            .top
    }, 1000)
}