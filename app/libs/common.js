$(document).ready(function() {

    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".overlayMenu").toggleClass("skroled");

    });


    $(".overlayMenu ul li a").on('click', function () {
       $("#navToggle").toggleClass("active");
       $(".overlay").removeClass("open");
        $("body").removeClass("locked");
        $(".overlayMenu").removeClass("skroled");
   });









    /* Page Scroll to id fn call */
    $(".overlayMenu ul li a, .top_line_menu ul li a, a.copyright_wrapper_item").mPageScroll2id({
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
  //  autoplay:true,
autoplayTimeout:4000,
nav:true,
    navText: ['<div class="slider_fon_icon"><i class="fa fa-angle-left"></i></div>','<div class="slider_fon_icon"><i class="fa fa-angle-right"></i></div>'],
    lazyLoad:true,
    loop:true,
    margin: 10,
    
    responsive: {
        0: {
            nav: false,
            dots: true,
        },    
        570: {
            nav: true,
            dots: false,
        }

    }











});

    $('#carousel_trade').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<div class="traideslider_fon_icon"><i class="fa fa-angle-left"></i></div>', '<div class="traideslider_fon_icon"><i class="fa fa-angle-right"></i></div>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            642: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });

    $(".gallery_item_fon .icon").magnificPopup({
        type: "image",
        tLoading: "Загрузка...",
        removalDelay: 300,
        closeOnContentClick: !0,
        mainClass: "mfp-with-zoom",
        image: {
            tError: '<a href="%url%">Работа #%curr%</a> не может загрузится.',
            titleSrc: function (e) {
                return e.el.attr("title")
            }
        },
        zoom: {
            enabled: !0,
            duration: 300,
            easing: "ease-in-out",
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        gallery: {
            navigateByImgClick: !0,
            preload: [0, 1],
            enabled: !0,
            tclose: "Закрыть (Esc)",
            tPrev: "Предыдущий (левая клавиша на клавиатуре)",
            tNext: "Следующий (правая клавиша на клавиатуре)",
            tCounter: "%curr% из %total%"
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
