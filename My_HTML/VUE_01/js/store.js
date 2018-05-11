// 数据操作
(function(exports){

  var KEY = 'todos-vuejs';

  exports.todoStorage = {
      fetch:function(){
        return JSON.parse(localStorage.getItem(KEY)|| '[]');
      }
      ,save:function(todos){
        localStorage.setItem(KEY,JSON.stringify(todos));
      }
  }
})(window)
