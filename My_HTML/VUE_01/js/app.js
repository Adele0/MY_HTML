(function(exports){
  var filter = {
    all(todos){
      console.log('all:',todos);
      return todos;
    },
    // 活动，没有完成
    active(todos){
      // console.log('active:',todos,todos.filter((todo) => {!todo.completed})); // 箭头函数后面有括号，就必须有return
      return todos.filter((todo) => !todo.completed);
    },
    // 已完成
    completed(todos){
      // console.log('completed:',todos,todos.filter((todo) => {!todo.completed}));
      return todos.filter((todo) => todo.completed)
    }
  }

  exports.app =new Vue({
    el:".todoapp",
    data:{
      todos:todoStorage.fetch(), // 数据集
      newTodo:''  // 新数据
      ,visiable :'all'
    },
    methods:{
      addTask(e){
        console.log('添加任务！！',e.target.value, this.newTodo);
        // 有效性验证
        var value = this.newTodo && this.newTodo.trim();
        if(!value){
          return;
        }

        // 添加到数据库
        this.todos.push({title:value, completed:false});
        todoStorage.save(this.todos);

        //清空输入框
        this.newTodo="";
      },
      removeTodo:function(index){
        // 删除
        this.todos.splice(index,1);
        // 同步
        todoStorage.save(this.todos);
      },
      changeTaskState(){
        console.log('this.todos', this.todos);
        // 同步(todos更新的时间会有延迟，所以最佳是在改变后)
        setTimeout(()=>todoStorage.save(this.todos),100);

      },
      changeVisiable(newState){
          this.visiable = newState;
      }
    },
    computed: {
        filterTodos(){
          // 根据当前的可视化属性值，过滤不同的数据
          return filter[this.visiable](this.todos);
        }
    }
  });

})(window)
