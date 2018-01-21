$(function () {
    var url = "http://localhost:9090/api/";
    let arr = location.search;
    arr = decodeURI(arr);
    arr = arr.slice(1).split("&");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].split("=")[0];
        let value = arr[i].split("=")[1];
        obj[key] = value;
    }
    $.ajax({
        type:'get',
        url:url+'getproduct',
        data:obj,
        success:function(info){
            console.log(info);
            $(".product-list-title").html(template("tpl1",info));
            $(".mm_product").html(template("tpl",info));
        }
    });
    $.ajax({
        type:'get',
        url:url+'getproductcom',
        data:obj,
        success:function(info){
            console.log(info);

            $(".net_friend").html(template("tpl3",info));
        }
    });

})