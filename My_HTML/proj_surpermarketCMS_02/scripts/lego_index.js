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
				controlsW:30,//控制按钮宽度
				controlsH:30,//控制按钮高度
				radius:15,//控制按钮圆角度数
				controlsColor:"#eee",//普通控制按钮的颜色
				controlsCurrentColor:"#ff0",//当前控制按钮的颜色
				isNumber:true //是否需要数字
			});
			
			//产品列表样式
			$("#productDt li img:first-of-type").css("margin-left","25px");
			$("#productDt li p").css({
				"margin-left":"7px",
				"color":"#f4290d"
			});
			$("#productDt li p:nth-of-type(1)").css("color","#333");
			$("#productDt li p:nth-of-type(3)").css({
				"margin-top":"10 px",
				"font-size":"24px"
			});
				
			//图书大标题,滑动效果
			$("#booksList li").mouseover(function () {
				//菜单高亮显示
				$(this).addClass("current").siblings().removeClass("current");
				//获取索引值
				var index = $(this).index();
				//隐藏所有内容
				$(".booksRightWrapper").hide();
				//显示相应的内容
				$(".booksRightWrapper").eq(index).show();
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
			$(".bookbox li:nth-of-type(2)").css({
				"color":"#f91616",
				"font-size":"12px",
			});
			$(".bookbox li:last-of-type").css({
				"color":"#f91616",
				"margin-top":"10px",
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
			
			//服装统一的标题菜单滑动效果
			$("#clothes li").mouseover(function () {
				//菜单高亮显示
				$(this).addClass("current").siblings().removeClass("current");
				//获取索引值
				var index = $(this).index();
				$(".cloth_conSilde").hide();
				$(".cloth_conSilde").eq(index).show();
			});
			
			//户外统一的标题菜单滑动效果
			$("#outdoor li").mouseover(function () {
				//菜单高亮显示
				$(this).addClass("current").siblings().removeClass("current");
				//获取索引值
				var index = $(this).index();
				$(".outdoor_conSilde").hide();
				$(".outdoor_conSilde").eq(index).show();
			});
			
			//童装统一的标题菜单滑动效果
			$("#baby li").mouseover(function () {
				//菜单高亮显示
				$(this).addClass("current").siblings().removeClass("current");
				//获取索引值
				var index = $(this).index();
				$(".baby_conSilde").hide();
				$(".baby_conSilde").eq(index).show();
			});
			
			//服装\户外\童装统一的banner轮播
			$(".pptPubCSC").tyslide({
		        boxh:340,//轮播盒子的高度
				w:387,//图片宽度
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
			$("#pop .commonTitle li").hover(function () {
				//按钮的样式
				$(this).addClass("current").siblings().removeClass("current");
				
				//内容滚动
				var index=$(this).index();
				$("#popContent").stop(true,true).animate({"left":-1200*index},100);
			});
			
			
			//右侧导航：领券中心
			$("#rightNav li:eq(1)").hover(function () {
				$("#QRcode").stop(true,true).animate({"right":"40px","opacity":"1"});
			},function(){
				$("#QRcode").stop(true,true).animate({"right":"-99px","opacity":"0"});
			});
			
			
			//左侧导航：楼层移入移出
			$("#layerScoll li").hover(function () {
				//移入
				var colorArray=["#93d56f","#f55826","#ba9eed","#fe9eb4","#c1ee51","#000","#ccc"];
				var textArray=["图书","服装","户外","童装","家居","推广","顶部"];
				var index=$(this).index();	//获取楼层的索引值
				$(this).css({//设置背景色
					"background-color":colorArray[index],
					"background-position-x": "-40px"
				}); 
				
				$(this).stop(true,true).animate({"width":"80px"},function () {
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
			
			
			//左侧导航：楼层点击定位(最后返回顶层，设置单独样式)
			$("#layerScoll li:not(:last)").click(function () {	//给每一个需要定位的楼层给一个公用的类，以便获得index值。
				var layerTop = $(".layerScoll").eq($(this).index()).offset().top;	//获取每个楼层的offset().top
				$("html,body").animate({"scrollTop":layerTop},50);	//将获取的offset().top值赋给滚动条，作为距离顶部的值
			});
			
			
			//左侧导航：返回顶层，设置单独样式
			$("#layerScoll li:last").click(function () {
				$("html,body").animate({"scrollTop":0},50);	//点击直接将距离顶部设置为0
			});
			
			
			//窗口滚动事件
			$(window).scroll(function(){
				//获取滚动条距离顶部的位置
				var scroll_top = $(document).scrollTop();
				
				if(scroll_top>400){
					//显示固定到顶部，并且添加form到其中
					$("#fixed_top").slideDown(500);
					$("#fixed_top").append($("#search"));
					
					//显示左侧导航
					$("#layerScoll").fadeIn(500);
				}else{
					//隐藏固定到顶部，将form还原到原来位置
					$("#fixed_top").slideUp(500);
					$("#trolley").after($("#search"));	//可以也用navForm的append，这里是为了练习after
					
					//隐藏左侧导航
					$("#layerScoll").fadeOut(500);
				}
				
			});
});