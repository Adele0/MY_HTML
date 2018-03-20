define(['js/jquery-1.11.0'], function () {
	var _choujiang = function () {
		var num = Math.floor(Math.random()*21+10);
		var iNow = 0;
		var timer = setInterval(function(){
			
			 
			$('li').removeAttr("class");
			 
			$("li").eq(iNow).addClass('active');
			iNow++;
			if (iNow == $('li').length) {
				iNow = 0;
			}
			num--;
			if(num==0){
				clearInterval(timer);
				setTimeout(function(){
					alert("恭喜你，抽中了"+$('li[class="active"]').html());
				},50);
			}
		},100)
	}
	
	$.fn.choujiang = _choujiang;
})