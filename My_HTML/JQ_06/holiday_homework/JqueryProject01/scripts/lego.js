$(function () {			
			//导航菜单滑动效果
			$("#product li").hover(function () {
				$("#product li").css("width","900px")
				$(this).find(".sub_menu").show()
				$(this).find("span").addClass("current")
				
			},function () {
				$("#product li").css("width","200px")
				$(this).find(".sub_menu").hide()
				$(this).find("span").removeClass("current")
			})
			
			//导航banner
			$("#boxAnimate").tyslide({
				boxh:420,//盒子的高度
				w:1000,//盒子的宽度
				h:390,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:13,//控制按钮圆角度数
				controlsColor:"#eee",//普通控制按钮的颜色
				controlsCurrentColor:"#ff0",//当前控制按钮的颜色
				isNumber:true //是否需要数字
			});
			
			//产品列表样式
			$("#productDt li img:first-of-type").css("margin-left","25px");
			$("#productDt li p").css("margin-left","5px");
			$("#productDt li p:nth-of-type(2)").css("color","red");
			$("#productDt li p:nth-of-type(3)").css({
				"color":"red",
				"font-size":"18px",
				"margin-top":"10 px"
				});
				
			//图书大标题,滑动效果
			$("#booksList li").mouseover(function () {
				$(this).addClass("current").siblings().removeClass("current");
			});	
			
				
			//电子书轮播图
			$(".pptEbook").tyslide({
		        boxh:216,//轮播盒子的高度
				w:330,//图片宽度
				h:216,//图片高度
				isShow:true,//是否显示控制按钮
				isShowBtn:true,//是否显示左右按钮
				controltop:5,//数字控制器按钮上下偏移距离 
				controlsW:20,//数字控制按钮宽度
				controlsH:3,//数字控制按钮高度
				radius:1,//圆角度数
				controlsColor:"#fff",//普通控制按钮的颜色
				controlsCurrentColor:"#666",//当前控制按钮的颜色
				isNumber:false //是否显示数字
			});
			
			//图书列表样式
			$(".bookbox li:not('li:nth-of-type(3)')").css("padding-left","5px");
			$(".bookbox li:nth-of-type(2)").css("color","red");
			$(".bookbox li:last-of-type").css({
				"color":"red",
				"font-size":"18px"
			});
			$(".delPrice").css({
				"color":"#ccc",
				"text-decoration":"line-through"
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
			
			//服装\户外\童装统一的标题菜单滑动效果
			$(".commonTitle li").mouseover(function () {
				$(this).addClass("current").siblings().removeClass("current");
			});
			
			//服装\户外\童装统一的banner轮播
			$(".pptPubCSC").tyslide({
		        boxh:340,//轮播盒子的高度
				w:383,//图片宽度
				h:340,//图片高度
				isShow:true,//是否显示控制按钮
				isShowBtn:true,//是否显示左右按钮
				controltop:5,//数字控制器按钮上下偏移距离 
				controlsW:20,//数字控制按钮宽度
				controlsH:3,//数字控制按钮高度
				radius:1,//圆角度数
				controlsColor:"#fff",//普通控制按钮的颜色
				controlsCurrentColor:"#666",//当前控制按钮的颜色
				isNumber:false //是否显示数字
			});
			
			//服装\户外\童装统一的右侧内容样式
			$(".conRight li:first-child").css("font-size","16px");
			$(".conRight li:nth-child(2)").css({
				"font-size":"14px",
				"color":"#b4b4b4",
				"margin-bottom":"5px"
			});
			$(".conBig li:nth-of-type(3)").css({
				"width":"100px",
				"margin":"10px auto 28px 10px",
				"font-size":"15px",
				"color":"#fff",
				"background-color":"#f00",
				"border-radius":"10px"
			});
			
			//推广内容滚动
			$("#pop .commonTitle li").click(function () {
				//按钮的样式
				$(this).addClass("current").siblings().removeClass("current");
				
				//内容滚动
				var index=$(this).index();
				$("#popContent").animate({"left":-1200*index});
			});
			
			
			//右侧导航：领券中心
			$("#rightNav li:eq(1)").hover(function () {
				$("#QRcode").stop(true,false).animate({"right":"40px","opacity":"1"});
			},function(){
				$("#QRcode").stop(true,false).animate({"right":"-99px","opacity":"0"});
			});
			
			
			//左侧导航：楼层滚动
			$("#layerScoll li").hover(function () {
				//移入
				var colorArray=["#93d56f","#f55826","#ba9eed","#fe9eb4","#c1ee51"];
				var textArray=["服装","户外","童装","家居","推广"];
				var index=$(this).index();
				$(this).css({
					"background-color":colorArray[index],
					"background-position-x": "-40px"
				}); //设置背景色
				
				$(this).animate({"width":"80px"},function () {
				    $(this).find("span").text(textArray[index]); //设置文本
				});
				
				},function () {
					//移出
					$(this).css({
						"background-color":"#f2f2f2",
						"background-position-x": "0px"
					});//
					$(this).animate({"width":"40px"},function () {
				    	$(this).find("span").text(""); //设置文本
					});
			});
});