;
(function($){
	//jQuery.fn = jQuery.prototype = {};
	
	var _target;
	
	$.fn.couplet = function (option) {
		//创建元素
		var leftAd = $('<div><a href="#"><img src="'+option.leftAd +'" /></a></div>').appendTo('body');
		leftAd.css({
			'position':'fixed',
			'top':100,
			'left':10
		});
		
		var rightAd = $('<div><a href="#"><img src="'+option.rightAd +'" /></a></div>').appendTo('body');
		rightAd.css({
			'position':'fixed',
			'top':100,
			'right':10
		});
		
		return _target;
	}
})(jQuery);