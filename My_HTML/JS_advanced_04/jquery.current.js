;
(function($){
	//jQuery.fn = jQuery.prototype = {};
	
	$.fn.current = function () {
		this.css({
			"background-color":"#f60",
			"color":"#fff",
			"font-zise":"18px",
			"border-bottom":"6px solid #000"
		});
	}
})(jQuery);
