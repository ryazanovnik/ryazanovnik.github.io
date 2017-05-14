$(function() {
    
$('.knopka').click(function () {
    var $dvijenie = $(this).parent('.dvijenie');
    var vvvv = parseInt($dvijenie.css('bottom'), 10);
    if (vvvv < 0) {
        $dvijenie.animate({
            bottom: '+=200'
        }, 458, 'swing', function () {
            // Animation complete.
        });
    } else {
        $dvijenie.animate({
            bottom: '-=200'
        }, 458, 'swing', function () {
            // Animation complete.
        });
    }
    $('.dvijenie').not($dvijenie).filter(function () {
        return parseInt($(this).css('left'), 10) == 0
    }).animate({
        left: '-=200'
    }, 458, 'swing', function () {
        // Animation complete.
    });
});

});