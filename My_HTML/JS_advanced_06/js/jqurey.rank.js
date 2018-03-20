
define(['js/jquery-1.11.0'],function(){
	
	var _pingfen=function(){
		   _pingfen = this ;
			var flag = true;
				$("li").mouseover(function(){
					if(flag){
						var index = $(this).index("li");
						$("li").each(function(i,elem){
							if(i<=index){
								$(this).css("background","url(img/star_onmouseover@2x.png)");
							}
						})
						$("span").eq(index).css("display","block").siblings("span").css("display","none");
				   }
				}).mouseout(function(){
					if(flag){
						$("li").css('background',"url(img/star_hollow_hover@2x.png)");
						$("span").css("display","none");
					}
				})
				$("li").click(function(){
					flag = false;
				})	
	}
	
	 return{
	   pingfen : _pingfen
	 };
	
})
