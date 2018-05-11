$(function () {			
			//导航banner
			$("#products_banner").tyslide({
				boxh:420,//盒子的高度
				w:1000,//盒子的宽度
				h:390,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:30,//控制按钮宽度
				controlsH:30,//控制按钮高度
				radius:15,//控制按钮圆角度数
				controlsColor:"#eee",//普通控制按钮的颜色
				controlsCurrentColor:"#ff0",//当前控制按钮的颜色
				isNumber:true //是否需要数字
			});
			
			//图书排行榜样式
			$(".tsDetails span:lt(3)").css("color","red");
			 	//鼠标滑动事件：默认样式放在点击事件外面 .eq(0)
			$(".bookImg").hide();
			$(".bookImg").eq(0).show();
			$(".tsDetails li").on("mouseover",function () {
				$(this).find(".bookImg").show();
				$(this).siblings().find(".bookImg").hide();
			});
});