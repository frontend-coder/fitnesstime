$(document).ready(function() {


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












/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
});









//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
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