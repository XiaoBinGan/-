$(function(){
    var url = "http://localhost:9090/api/";
    $.ajax({
        type:'get',
        url:url+'getsitenav',
        success:function(info){
                console.log(info);
                $(".pp_menu").html(template("tpl",info))
        }
    });
});