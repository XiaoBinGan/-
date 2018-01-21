$(function () {
    var shopid =0;
    var areaid =0;
    //nav渲染
    var url = "http://localhost:9090/api/";
    $.ajax({
        type: "get",
        url: url + 'getgsshop',
        success: function (info) {
            console.log(info);
            $(".jyt").html(template("tpl",info));    
        }
    });



    $.ajax({
        type:"get",
        url:url+'getgsshoparea',
        success:function(info){
            console.log(info);
            $(".area").html(template("tpl2",info));    
        }
    });



    function render(shopid,areaid){
        $.ajax({
          type:"get",
          url:url+'getgsproduct',
          data:{
              shopid:shopid||0,
              areaid:areaid||0
          },
          success:function(info){
              console.log(info);
              $(".gs_menu").html(template("tpl3",info));    
          }
      });
  
  }
    
  

  render();


    $(".title_nav").on("click", "div", function () {
        let thisnav = $(this);
        let thisa = $(this).find("a");
        let index = thisnav.data("index");
        shopid = thisnav.data("id");//向后台传递的数据
        
        // console.log(thisa);
        //   console.log(index);
        let $this = $(".title_nav_list ul").eq(index);
        $this.toggleClass("show").siblings().removeClass("show");
        $this.off().on("click", "li", function () {
            thisa.text($(this).text());
            areaid = $(this).data("id");//向后台传递的数据
            $this.removeClass("show");
            render(shopid,areaid);//点击结束调用后台数据
        });
    })








})