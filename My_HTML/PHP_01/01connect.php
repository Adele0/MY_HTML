<?php
	header('Content-Type:text/html;charset=utf-8');
	$con = @mysqli_connect('localhost','root','root','tamaki') or die('tamaki love u');
//	var_dump($con);
	
	mysqli_query($con,'set name uft8');
	
	$rs = mysqli_query($con,'select * from companyInfo');
	
//	var_dump($rs);
	while ($row=mysqli_fetch_assoc($rs)) {
		echo $row['name'];
		echo '<br>';
	};
	
	mysqli_free_result($rs);
	
	mysqli_close($con);
?>