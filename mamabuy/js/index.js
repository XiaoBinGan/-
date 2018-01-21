$(function(){
//nav渲染
    var url="http://localhost:9090/api/";
    $.ajax({
        type:"get",
        url:url+'getindexmenu',
        success:function(info){
            $(".row").html(template("tpl",info));    
        }
    });

// 中部横条的商品渲染
$.ajax({
    type:'get',
    url:url+'getmoneyctrl',
    success:function(info){
            console.log(info);
         $(".mm_product").html(template("tpl2",info));
    }
})








// 注册点击事件显示最后一行
$(".row").on("click",".show_more",function(){
    $(".hide").toggleClass("show");
console.log("呵呵");
})




// 



});