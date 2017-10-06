var $ = require('./jquery')

var Tab2 = (function () {
    function Tab($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }
    Tab.prototype.init = function () {
        this.$options = this.$ct.find('ul>li');
        this.$contents = this.$ct.parents('.resume').find('.rightContents>.tab-contents>li');
    }
    Tab.prototype.bind = function () {
        var self = this;
        this.$options.on('click',function () {
            self.index = $(this).index();
            console.log(self.index)
            console.log($(this))
            $(this).addClass('active')
                .siblings().removeClass('active');
            self.$contents.siblings().removeClass('active')
                .eq(self.index).addClass('active');
        })
    }
    return {
        start: function ($ct) {
            $ct.each(function (index,node) {
                new Tab($(node));
            })
        }
    }
})();
// Tab2.start($('.tab')); //组件使用方法 传入tab的父元素即可实现tab切换
module.exports.Tab = Tab2