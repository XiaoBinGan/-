$(function(){
    var url="http://localhost:9090/api/";
 var id=location.search;
id=id.slice(id.indexOf("=")+1);
$.ajax({
    type:'get',
    url:url+'getmoneyctrlproduct',
    data:{productid:id},
    success:function(info){
                console.log(info);
                $(".mm_mian").html(template("tpl",info))
    }
});

});