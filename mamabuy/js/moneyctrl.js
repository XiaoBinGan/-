

    var url="http://localhost:9090/api/";

$.ajax({
    type:'get',
    url:url+'getmoneyctrl',
    success:function(info){
            console.log(info);
         $(".mm_product").html(template("tpl2",info));
    }
});