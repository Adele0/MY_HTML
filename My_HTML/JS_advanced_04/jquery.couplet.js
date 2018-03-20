;
(function($){
	//jQuery.fn = jQuery.prototype = {};
	
	$.fn.couplet = function () {
		var couplet = $('.couplet');
		
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			couplet.stop(true,true).animate({top: scrollTop + 50},50);
		})
		
	}
})(jQuery);