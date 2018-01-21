$(function(){
    var url="http://localhost:9090/api/";
    $.ajax({
       type:"get",
       url:url+'getcategorytitle',
       success:function(info){
                console.log(info);
                $(".mm_product").html(template("tpl",info));
       }
    });

   $(".mm_product").on("click",".cl",function(){
       var $this=$(this).data("id");
        $.ajax({
           type:'get',
           url:url+'getcategory', 
           data:{
            titleid:$this
           },
           success:function(info){
                console.log(info);
                $(".category").html(template("tpl2",info));
           }
        });
        $(this).children(".category").toggle();
        $(this).siblings().children(".category").hide();





   }) 








});