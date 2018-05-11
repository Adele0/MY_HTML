$(function () {
	$("#formWrapper").validate({
				rules:{//验证规则
					username:{
						required: true,
						rangelength:[5,10]
					},
					pwd:{
						required: true,
						//minlength:6,
						//maxlength:18,
						//最大与最小区间
		                rangelength: [6,18]
					},
					pwd2:{  
				  	    required: true,  
		                rangelength: [6,18],
				 	    equalTo: "#pwd"
			 	    },
			 	    tel:{
			 	    	required: true
			 	    },
			 	    code:{
			 	    	required: true
			 	    },
			 	    msgCode: {
			 	    	required: true
			 	    }
				},
				messages:{//错误提示
			 	   username:{
			 	   	  required:"输入用户不能为空",
			 	   	  rangelength:"密码必须在5-10位"
			 	   }, 
			 	   pwd:{  
			          required: "请输入密码",
			 	      rangelength:"密码必须在6-18位"
			 	   },  
			 	   pwd2:{  
			 	      required: "请输入确认密码",  
			 	      rangelength:"密码必须在6-18位", 
			 	      equalTo: "两次输入密码不一致"  
			 	   },
			 	    tel:{
			 	    	required: "请输入手机号",
			 	    	minlength:"请输入正确的11位手机号",
						maxlength:"请输入正确的11位手机号"
			 	    },
			 	    code:{
			 	    	required: "请输入验证码"
			 	    },
			 	    msgCode: {
			 	    	required: "请输入手机短信验证码"
			 	    }
				}
			});
})