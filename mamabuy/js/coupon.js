$(function(){
    var url="http://localhost:9090/api/";
    $.ajax({
            type:'get',
            url:url+'getcoupon',
            success:function(info){
                    console.log(info);
                    $(".mm_product1").html(template("tpl",info));
            }
    });
});