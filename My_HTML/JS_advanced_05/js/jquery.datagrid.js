;
(function ($) {
	var _target;	//1.1用来记录内部的table对象 
	
	
	
	function _datagrid(option){	//1.2主函数，接收多个参数
		_target = this;		//为了始终正确得到指针指向，每次进入函数内部都应该对this指针赋值
		
			/*主函数是为了实现插件的逻辑。这里主函数调用getRemoteData()进行传参。
			第一个参数为URL，第二个远程得到的数据作为参数放入希望使用数据的回调函数中*/
	
		if(option && option.url){	//有参数，且有url参数 才调用getRemoteData()
			$.getRemoteData(option.url, _loadData)	//由于要使用得到的数据，回调函数逻辑抽取出去
		}else{
			alert("地址有误");
		}
		
		return _target;		//始终很第一个指针配对
	}
	
	
	
	
		//2.抽取getRemoteData()的回调函数逻辑_loadData()，该回调函数需要一个从内部iframe的contentDocument指定节点转化为对象的数据data作为参数
	
	function _loadData(data){	//多条数据，需要遍历
		$(data).each(function (index,obj) {	//不确定参数，使用arguments，内容部分在obj
			//每一次循环拿到数据以后的逻辑：添加到table中，此处抽取该逻辑
			_createTableRow(obj);
			
		})
	}
	
	
	
	
	//3. 抽取_createTableRow(obj)
	function _createTableRow(obj) {
		var $tr = $('<tr></tr>');	//创建行
		
		var $ths = _target.find('thead th') //遍历表头,创建td
		$ths.each(function (i,th) {
			var field = $(th).attr('field');
			var $td = $('<td>'+(obj[field]?obj[field]:'')+'</td>');
			$td.appendTo($tr);			
		})
	
		$tr.appendTo('tbody');
	}
	
	
	
	
	
	
	$.fn.datagrid = _datagrid;	//1.3 暴露主函数
	
})(jQuery)
