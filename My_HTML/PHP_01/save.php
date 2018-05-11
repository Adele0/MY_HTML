<?php
//1. 连接数据库
include('conn.php');

//2. 获取POST方式传值
$username=$_POST['username'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$comments=$_POST['comments'];

//3. 验证数据有效性
if($username==''){
	die('用户名不能为空');
}

if($email==''){
	die('邮箱不能为空');
}

if($phone==''){
	die('电话不能为空');
}

if($comments==''){
	die('留言不能为空');
}
//4. 构造SQL语句并且发送到MYSQL服务器实现新增数据
$sql="insert into msg(username,email,phone,comments) values('$username','$email','$phone','$comments')";
$r=mysqli_query($conn, $sql);

//5. 将执行结果显示出来
if($r){
	echo '<script>alert("恭喜你，发布成功！"); location.href="list.php";</script>';
}else{
	echo '发布失败：'.mysqli_error($conn);
}
?>