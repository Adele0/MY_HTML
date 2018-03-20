


define(['js/jquery-1.11.0'],function(){
	
	  var _color=function(){
	  	    _color =this;
	  	var color = "red";
				$("input:not(input[value='清空红色'])").on('click',function(){
					color = $(this).val();
					console.log(color);
				});
				
				 $('div').on("click",function(){
				 	 $(this).css("background",color);
				 })
					

				$('input[value="清空红色"]').on("click",function(){
					$('div[style*=red]').css("background","");
				})
				return _color;
	  };	
	  
	  return {
	  	color : _color
	  };
})
