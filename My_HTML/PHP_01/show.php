<?php
header('Content-Type:text/html; charset=utf-8');

$conn=@mysqli_connect('localhost','root','root','tamaki') or die('error');

//2. 获取POST方式传值
$username=$_POST['username'];
$pwd=$_POST['pwd'];
$gender=$_POST['gender'];
$hobby=$_POST['hobby'];
$city=$_POST['city'];
$introduct=$_POST['introduct'];

//验证是否为空
if($username==''){
	die('标题不能为空');
};

if($pwd==''){
	die('密码不能为空');
};

if($gender==''){
	die('性别不能为空');
};

if($city==''){
	die('城市不能为空');
};

//4. 构造SQL语句并且发送到MYSQL服务器实现新增数据
$sql="insert into register(username,pwd,gender,hobby,city,introduct) values('$username','$pwd','$gender','$hobby','$city','$introduct')";
$r=mysqli_query($conn, $sql);

//5. 将执行结果显示出来
if($r){
	echo '<script>alert("恭喜你，发布成功！")</script>';
}else{
	echo '发布失败：'.mysqli_error($conn);
}
?>