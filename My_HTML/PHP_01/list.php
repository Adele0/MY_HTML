<?php
include('./conn.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			table{
				width: 100%;
				border-collapse: collapse;
				font-size: 14px;
			}
			
			table td{
				border: solid 1px #eee;
				padding-right: 5px;
				height: 30px;
				font-family: "微软雅黑";
			}
			
			table td a{
				text-decoration: none;
				color: black;
				margin-left: 10px;
			}
			
			.tdcenter{
				text-align: center;
			}
			
			.td100{
				width: 100px;
			}
			#btnsave{
				width: 80px;
				background-color: darkorange;
				color: white;
				border:solid 1px #FF8C00;
				height: 20px;
			}
		</style>
	</head>
	<body>
		<a href="add.html">新增</a>
		<table cellpadding="0" cellspacing="0">
			<tr><td class="tdcenter">标题</td><td class="tdcenter td100">来源</td><td class="tdcenter td100">作者</td><td class="tdcenter td100">时间</td><td class="tdcenter td100">操作</td></tr>
			<?php
			$rs=mysqli_query($conn,'select * from news');
			while( $row=mysqli_fetch_assoc($rs) ){
				echo '<tr>';
				echo '<td>'.$row['title'].'</td>';
				echo '<td class="tdcenter">'.$row['source'].'</td>';
				echo '<td class="tdcenter">'.$row['author'].'</td>';
				echo '<td class="tdcenter">'.$row['intime'].'</td>';
				echo '<td><a href="#">修改</a><a href="delete.php?id='.$row['id'].'">删除</a></td>';
				echo '</tr>';
			}
			mysqli_free_result($rs);
			?>
		</table>	
		
	</body>
</html>
