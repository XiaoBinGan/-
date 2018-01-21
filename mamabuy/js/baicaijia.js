$(function () {
    var url = "http://localhost:9090/api/";
    $.ajax({
        type: 'get',
        url: url + 'getbaicaijiatitle',
        success: function (info) {
            // console.log(info);
            $(".mui-scroll").html(template("tpl", info));
            let $li = $(".bc").children();
            let len = $li.length; //获取到当前li的个数将ul的宽度均分
            let width = $(".bc").width() / len;
            $li.width(width);

        }
    });


    // 区域滚动
    mui('.mui-scroll-wrapper').scroll({

        scrollY: false, //是否竖向滚动
        scrollX: true, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹

    });

    //  注册点击事件

    $(".bc").on("click", "li", function () {
        $this = $(this);
        id = $this.data("id");
        $this.toggleClass("now").siblings().removeClass("now");
        render(id);
    });
       
    render();
    function render(id){
        var url = "http://localhost:9090/api/";
        $.ajax({
            type: 'get',
            url: url + 'getbaicaijiaproduct',
            data: {
                titleid:id||1
            },
            success: function (info) {
                console.log(info);
                $(".mm_baicai").html(template("tpl1", info));
            }
        })
    }





});