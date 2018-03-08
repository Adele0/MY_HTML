$(function(){
	//点击不同的登录方式显示当前li样式,并显示所定义的登录界面,隐藏其他界面
	$("#loginTitle li").click(function(){
		var index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".loginMode").eq(index).show().siblings(".loginMode").hide();
		//如果切换页面为二位码页面,显示图片3秒后隐藏手机图片
		if(index==0){
			$("#QRcode").stop(true,false).animate({"right":170},function(){
				$("#phone").stop(true,false).fadeIn(function(){
					$("#phone").delay(3000).hide(function(){
						$("#QRcode").stop(true,false).animate({"right":100});
					});
				});
			});
		}else{
			$("#phone").stop(true,false).hide(function(){
				$("#QRcode").stop(true,false).animate({"right":100})
			});
		};
	});
	//鼠标移入二维码时显示手机,移除时隐藏
	$("#QRcode").hover(function(){
		$("#QRcode").stop(true,false).animate({"right":170},function(){
			$("#phone").stop(true,false).fadeIn();
		});
	},function(){
		$("#phone").fadeOut(function(){
			$("#QRcode").stop(true,false).animate({"right":100});
		});
	});
	
})