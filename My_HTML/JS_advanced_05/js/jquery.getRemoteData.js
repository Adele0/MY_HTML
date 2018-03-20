;(function($){
    var _target;

    $.getRemoteData = function(url,callback){
        _target = this;
        // 1) 创建一个iframe元素
        var iframe = $('<iframe style="display: none;"></iframe>');
        // 2) 把url地址配置在iframe元素的src属性上
        iframe.attr('src',url);
        // 3) 把iframe挂到页面
        iframe.appendTo('body');

        // 4) 从iframe中，获取所有的内容数据
            // 1. 在数据加载完毕后
            iframe.on('load',function(){
                // 2. 获取ifram的上下文对象
                var iframeDocument = this.contentDocument;
                // 3. 在iframe的上下文获取获取数据
                var content  = iframeDocument.getElementsByTagName('pre')[0].innerHTML;

                // 4. 把内容转变为需要的数据
                var data = $.parseJSON(content);

                // 5. 把返回的数据，在回调中作为参数传入
                callback(data);
            });

        return _target;
    }

})(jQuery)