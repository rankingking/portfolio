$(function(){
	$(".fa-align-justify").on("click", () => {
		$(this).addClass("top-nav-block");
		$("#top-nav").slideDown(500);
		$(".show h1").hide().each(function(){
			$(this).delay(100).slideDown();
		})
		$(".show h2").hide().each(function(i){
			$(this).delay(150).slideDown();
		})
		$(".first-menu").hide().each(function(){
			$(this).delay(150).slideDown();
		})
		$(".top-menu ul li").hide().each(function(i){
			$(this).delay(i * 150).slideDown();
		});
		$(".sns").hide().each(function(){
			$(this).delay(600).slideDown();
		});
	})

	$(".remove").on("click", () => {
		$(this).removeClass("top-nav-block");
		$("#top-nav").slideUp(800);
	})

	$("#top-nav").on("click", () => {
		$(this).removeClass("top-nav-block");
		$("#top-nav").slideUp(800);
	})

	$(window).scroll(function(){
		$(".fade_off").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if(scroll > imgPos - windowHeight + windowHeight/5) {
				$(this).addClass("fade_on");
			} else {
				$(this).removeClass("fade_on");
			}
		});
	});

	var pagetop = $(".fa-angle-double-up");
	pagetop.hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function(){
		$("body, html").animate({ scrollTop: 0}, 500);
		return false;
	});
});
