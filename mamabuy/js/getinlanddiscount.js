$(function(){
    var url="http://localhost:9090/api/";
    $.ajax({
            type:'get',
            url:url+'getinlanddiscount',
            success:function(info){
                console.log(info);
               $(".main").html(template("tpl",info)); 
            }
    });
});