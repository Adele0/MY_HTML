$(function(){
	
	//绑定添加银行卡时间	
	$("#add_bankcard").click(function(){
//		alert(1);
	var added= '<p class="added">'+
					'<select>'+
		 	 			'<option value="">中国工商银行</option>'+
		 	 			'<option value="">中国农业银行</option>'+
		 	 			'<option value="">中国银行</option>'+
		 	 			'<option value="">中国建设银行</option>'+
		 	 		'</select>'+
		 	 		'<input class=""  type="text" placeholder="请输入卡号" />'+
		 	 		'<button class="delete_card" >删除银行卡</button>'+
				'</p>';
	 	 		
	$("#bankcard").append(added);
	$("#bankcard").delegate(".added .delete_card","click",function(){
     	$(this).parent().remove();
    });
	 
	});

})
