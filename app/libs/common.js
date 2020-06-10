$(document).ready(function() {
    //email mask
    // $('#emailid').inputmask({
    //     mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    //     greedy: false,
    //     clearMaskOnLostFocus: false,
    //     onBeforeWrite: function (event, buffer, caretPos, opts) {
    //         buffer.forEach(function (item, i, buffer) {
    //             if (item == '@') {
    //                 buffer[i + 1] = 'g';
    //                 buffer[i + 2] = 'm';
    //                 buffer[i + 3] = 'a';
    //                 buffer[i + 4] = 'i';
    //                 buffer[i + 5] = 'l';
    //                 buffer[i + 6] = '.';
    //                 buffer[i + 7] = 'c';
    //                 buffer[i + 8] = 'o';
    //                 buffer[i + 9] = 'm';
    //                 buffer.length = i + 10;
    //             }
    //         });
    //     }
    // });

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top_line_menu").slideToggle();
return false;
});
$('body, .top_line_menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
$(".toggle-mnu").removeClass("on");
});

    /* Page Scroll to id fn call */
    $(".top_line_menu ul li a").mPageScroll2id({
        layout: "auto",
        offset: ".top_line",
        autoScrollSpeed: true,
        scrollSpeed: 1000,
        highlightSelector: ".top_line_menu ul li a"
    });

    /* demo functions */
    $("a[rel='next']").click(function(e) {
        e.preventDefault();
        var to = $(this).parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo", to);
    });



$('#carousel_header').owlCarousel({
    items:1,
    autoplay:true,
autoplayTimeout:4000,
nav:true,
navText:['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>','<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
    lazyLoad:true,
    loop:true,
    margin:10
});

    $('#carousel_trade').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass    : 'mfp-fade',
  removalDelay : 400,
    type: 'inline',
    tClose: 'Закрыть (ESC)',
    fixedContentPos: false,
    fixedBgPos: true,
});

    
/*чтобы в формах был индивидуальный заголовок */
    $("a[href='#call-back']").click(function () {
    ///    $('.lp').toggleClass("fix");
  const dataForm = $(this).data("form");
  const dataText = $(this).data("text");
  const dataSub = $(this).data("sub");
  $(".forms-calldecor h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
    $("form").attr('onsubmit', dataSub);
});
// onsubmit="yaCounterXXXXX.reachGoal('raschetSmetyHeader'); return true;"
    
//Ajax push mesege http://api.jquery.com/jquery.ajax/

    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(".forms-calldecor .success").addClass("active");
            setTimeout(function () {
                // Done Functions
                $(".forms-calldecor .success").removeClass("active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });
//castom code



});
