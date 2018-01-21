$(function(){

        var url = "http://localhost:9090/api/";
        var id=location.search.slice(1).split("=")[1];
        $.ajax({
                type:'get',
                url:url+'getcouponproduct',
                data:{
                        couponid:id
                },
                success:function(info){
                        console.log(info);
                $(".mm_coupon").html(template("tpl",info));

                }
        });

$(".mm_coupon").on("click","li",function(){
        $(".overspread").toggle();
        var thisimg=$(this).data("id");
        console.log(thisimg);
        $(".overspread").html(template("tpl-lu",{list:thisimg}));
})


});