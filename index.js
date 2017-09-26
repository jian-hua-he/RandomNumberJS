"use strict";

(function (run, window, $) {
    var elements = {
        randomNum: $('#ramdom-num'),
        btn: $('#btn'),
    };

    run(window, $, elements);

})(function (window, $, elements) {

    // var stop = true;
    // var interval;

    // elements.btn.on('click', function () {
    //     stop = !stop;

    //     if (stop) {
    //         elements.btn.text('START');
    //         window.clearInterval(interval);
    //     } else {
    //         var max = parseInt($('#max').val());
    //         var min = parseInt($('#min').val());

    //         elements.btn.text('STOP');
    //         interval = window.setInterval(function() {
    //             var randomNum = getRandomInt(min, max);
    //             elements.randomNum.text(randomNum);
    //         }, 50);
    //     }
    // });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}, window, jQuery);
