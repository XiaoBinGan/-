$(function(){
    var url="http://localhost:9090/api/";
    $.ajax({
       type:"get",
       url:url+'getbrandtitle',
       success:function(info){
                console.log(info);
                $(".mm_productcc").html(template("tpl",info));
       }
    });







});