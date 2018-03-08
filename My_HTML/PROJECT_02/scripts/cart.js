$(function(){
	factors();
	//全选和反选效果
	$(".check_all").click(function (){
		//获得复选框是否选中的值
		var checked_val = $(this).prop("checked");
	
		//将该值赋给子复选框，及其他全选框
		$(".check_item").prop("checked",checked_val);
		$(".check_all").prop("checked",checked_val);
		
		//调用封装统计方法
		factors();
	});
	
	$(".select_book").click(function(){
		//全选反选完善
		//获取子选择框的个数  
	    var select_num = $(".select_book").length;  
//		console.log(select_num);
		
	    //获取选中的子选择框k的个数   
	    var num_select = $(".select_book input:checked").length;
	    
//	    console.log(num_select);
	    if (select_num == num_select) {  
	    	
	        $(".check_all").prop("checked", true);  
	    }else{
	   		$(".check_all").prop("checked", false);
	    }
	});
	
	//分别实现点击加减，实现小计数量、价格的变化
	//加
	$(".increase").click(function (){
		//变量储存新旧值,单价,小计
		var old_val,new_val,unit_price,subtotal;
		
		old_val = parseInt($(this).next().text());	//需要先转换数据类型，才能进行后面的运算，数量为正整数
		console.log("old_val",old_val);
		old_val++;
		$(this).next().text(old_val);	//注意：当结构布局使用的是表单时，不使用text()而使用val()
		
		//获得数量，单价（当前最近的单价）
		new_val = parseInt($(this).next().text());		//用新得到的值(需要重新获得一次)参与运算
		console.log("new_val",new_val);
		
   		unit_price = parseFloat($(this).parent().parent().prev().text());		//单价保留两位小数
		console.log("unit_price",unit_price.toFixed(2));

			
		subtotal = new_val*unit_price;
		console.log("subtotal",subtotal.toFixed(2));
		
//		将获取的小计值赋给元素,注意保留小数
		$(this).parent().parent().next().text(subtotal.toFixed(2));
		
		//调用封装统计方法
		factors();
	});
//	console.log(new_val)

	//减： 同加（注意if判断数量的最小值1）
	$(".decrease").click(function (){

		var old_val,new_val,unit_price,subtotal;
		
		old_val = parseInt($(this).prev().text());
		
		if(old_val>1) {
			old_val--;
		}else {
			alert("不能再减了呢，如果您不需要请尝试删除吧~");
		}
		
		$(this).prev().text(old_val);

		new_val = parseInt($(this).prev().text());
		
		unit_price = parseFloat($(this).parent().parent().prev().text());
		
		subtotal = new_val*unit_price;
		
		$(this).parent().parent().next().text(subtotal.toFixed(2));
		
		//调用封装统计方法
		factors();
	});
	
	
	/*
	//输入数字（blur）,只在是input框的情况下在执行
	$(".num").blur(function(){
		var new_val,unit_price,subtotal;
		new_val= parseInt($(this).text());
		unit_price = parseFloat($(this).parent().parent().prev().text());
		subtotal = new_val*unit_price;
		$(this).parent().parent().next().text(subtotal.toFixed(2));
		
		$(this).parent().parent().next().text((parseInt($(this).text()))*(parseFloat($(this).parent().parent().prev().text())).toFixed(2));
	})
	*/
	
	$(".select_book").click(function(){
		factors();
	})
	
//	在统计已选择多少件产品和计算总价的时候，需要在各种事件中 挨个统计影响产品件数和总价的影响因素,所以封装一个函数，在每一个事件中调用



//	封装方法：
	function factors() {
		
	/*	
		//全选反选完善
		
		//获取子选择框的个数  
	    var select_num = $(".select_book").length;  
		
	    //获取选中的子选择框k的个数   
	    var num_select = $(".select_book:checked").length;
	    
	    if (select_num == num_select) {  
	    	
	        $(".check_all").prop("checked", true);  
	    }else{
	   		$(".check_all").prop("checked", false);
	    }
		*/
		
		var pieces=0;
		var sum=0;	//由于 所有的值定义后都要参与运算，为来了避免出现NaN的情况，定义后立即赋值
		
		//使用each()遍历(这里不需要使用index和item)，select_book这个类，当前类使用this
		
		$(".select_book").each(function () {
			//每次在遍历，都应该获取一次数量，单价,从而设置小计值
			var units = parseInt($(this).find(".num").text());
//			console.log("数量",$(this).find(".num").text());
			
			var unit_price = parseFloat($(this).find(".unit_price").text());
//			console.log("danjia",unit_price);
			
			$(this).find(".subtotal").text((units*unit_price).toFixed(2));
//			console.log("小计",$(this).find(".subtotal").text());
			
//			判断当前的select_book商品类下面的单个复选框是否被选中，只有被选中，下面的影响因素才有获取的意义（用于计算）
			if($(this).find(".check_item").prop("checked")){
				
				//获取当前选中的框中数量值，用于遍历累加
				pieces += parseInt($(this).find(".num").text());
				
				//获取当前选中的框中小计值，用于遍历累加
				sum += parseFloat($(this).find(".subtotal").text());
			}
		})	
		//遍历之后得到累加的数量和单价，将得到的值赋值给元素节点
		$(".total_unit").text(pieces);
		$(".total_price").text(sum.toFixed(2));	//回到这种事件中去调用此函数
	};
	
})