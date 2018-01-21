$(function () {
            var url = "http://localhost:9090/api/";
            var id = location.search.slice(1).split("=")[1]; //获取到上个页面传递过来的id
            // console.log(id);
            $.ajax({
                type: 'get',
                url: url + 'getbrand',
                data: {
                    brandtitleid: id
                },
                success: function (info) {
                    console.log(info);
                    $(".mm_tv_body_ul").html(template("tpl", info));
                }
            });

            $.ajax({
                type: 'get',
                url: url + 'getbrandproductlist',
                data: {
                    brandtitleid: id,
                    pagesize: 4
                },
                success: function (info) {
                    console.log(info);
                    $(".mm_tv_sales_volume_bd").html(template("tpl2", info));
                }
            })
            $.ajax({
                    type: 'get',
                    url: url + 'getproductcom',
                    data: {
                        productid: id,
                    },
                    success: function (info) {
                        console.log(info);
                        $(".pinglun").html(template("tpl3", info));
                        var obj = $(".index1").data();
                        $(".pinglun .pic .img_box ").html(obj.img);
                        $(".pinglun .pic .text ").html(obj.text);
                            // console.log(obj.text); console.log(obj.img);
                        }
                    })



            });