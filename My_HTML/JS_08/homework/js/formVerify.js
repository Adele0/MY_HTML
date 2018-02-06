//找到form
var formWrapper = document.getElementById("formWrapper");

//为form绑定注册事件，事件包括所有要验证的内容
formWrapper.onsubmit=function () {

	//验证用户名
	var username = document.getElementById("username");		//为了提示后的聚焦，应该保存username变量
	var usernameRE = /^[A-Za-z0-9]{6,17}$/;

	if (username.length==0 || !usernameRE.test(username.value)) {
		alert("用户名必须6-17位英文);
		username.focus();
		return false;	//每当提示之后都必须阻止浏览器的默认行为。这里是不提交。	
	}
	
	//验证密码和校验密码
	var pwd = document.getElementById("pwd");
	var pwd2 = document.getElementById("pwd2");
	var pwdRE = /\d{6,}/;
	
	if (pwd.length==0 || !pwdRE.test(pwd.value)) {
		alert("密码必须6位以上的数字");
		pwd.focus();
		return false;
	}
	
	if (pwd.value!=pwd2.value) {
		alert("两次密码输入不一致");
		pwd2.focus();
		return false;
	}
	
	//验证Email
	var email = document.getElementById("email");
	var emailRE = /^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	
	if (email.length==0 || !emailRE.test(pwd.value)) {
		alert("邮箱格式不正确！");
		email.focus();
		return false;	
	}
	
	//验证电话号码
	var phone = document.getElementById("phone");
	var phoneRE = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
	
	if (phone.length==0 || !phoneRE.test(phone.value)) {
		alert("输入正确的电话号码！");
		phone.focus();
		return false;	
	}
	
	//验证性别
	var gender = document.getElementsByName("gender");
	 if (!gender[0].checked && !gender[1].checked) {
	 	alert("请选择性别");
		return false;
	 }
	
	//验证地址
	var province = document.getElementById("province");
	var ciry = document.getElementById("city");
	if (province.value==-1 || city.value==-1) {
		alert("请选择地址");
		return false;
	}
	
	//验证是否同意用户守则
	var agree =document.getElementById("agree");
	if (!agree.checked) {
		alert("未同意守则");
		return false;
	}
	
};