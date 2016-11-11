function btnclick() {
    console.log("blankshsh@163.com");
    //点击显示星际轨道
    $("#round").on("click", function() {
        $(".line-l").animate({
            opacity: 0,
            marginLeft: "-9999px"
        }, 8000)
        $(".line-r").animate({
            opacity: 0,
            marginLeft: "9999px"
        }, 8000)
        setTimeout(function() {
            $("#round").animate({
                opacity: 0,
            }, 500);
            $(".dashed").animate({
                opacity: 1
            }, 1000);
            setTimeout(function() {
                $("#round").css("display", "none")
            }, 400)
        }, 300)

    })

    //遮罩事件
    $(".close").on("click", function() {
        $(".mask-box").animate({
            opacity: 0,
        }, 300)
        setTimeout(function() {
            $(".mask-box").hide();
            clearInterval();
        }, 300)
    });
}

function hover() {
    //作品技能点hover显示 以及lever delay效果
    $(".dot ul li span").on("mouseenter", function() {
        $(".dot ul li p").css("opacity", "1");
        $(".dot ul li i").css("opacity", "1");
    })
    $(".dot ul li").on("mouseleave", function() {
        setTimeout(function() {
            $(".dot ul li p").css("opacity", "0");
            $(".dot ul li i").css("opacity", "0");
        }, 3000)
    })

    //星际轨道hover显示小图片
    $(".dashed .d-item span").on("mouseenter", function() {
        $(this).parent(".d-item").children("i").addClass("hover-animation");
    })
    $(".dashed .d-item").on("mouseleave", function() {
        $(this).children("i").removeClass("hover-animation");
    })



    $("#mask-box").hover(function() {
        $(".hand").show();
    }, function() {
        $(".hand").hide();
    })
}

// function changeBg() {
//     //click显示大图
//     $(".dashed .d-item").on("click", function() {
//         //清空样式
//         $(".mask-box img").removeAttr("style");
//         var this_ = $(this);
//         //获取连接地址 处理获取数据
//         var bg = this_.children("i").css('backgroundImage');
//         bg = bg.substr(5);
//         bg = bg.replace(/\"\)$/, '');
//         //console.log(bg);
//         //显示遮罩
//         $(".mask-box").show();
//         var max_width = $(".mask-box").width();
//         var max_height = $(".mask-box").height();
//         //var max_width = $(window).width();
//         //var max_height = $(window).height();
//         // $(".mask-box").width(max_width);
//         // $(".mask-box").height(max_height);
//         $(".mask-box img").attr("src", bg);
//         var width_ = $(".mask-box img").width();
//         var height_ = $(".mask-box img").height();
//         (width_ > height_) ? $(".mask-box img").width(max_width * 0.7 + "px"): $(".mask-box img").height(max_height * 0.7 + "px");
//         width_ = $(".mask-box img").width();
//         height_ = $(".mask-box img").height();
//         if (max_height - height_ < 80) {
//             $(".mask-box img").removeAttr("style");
//             $(".mask-box img").height(max_height * 0.6 + "px");
//         }
//         // console.log(width_);
//         // console.log(height_);
//         width_ = $(".mask-box img").width();
//         height_ = $(".mask-box img").height();
//         // console.log(width_);
//         // console.log(height_);
//         $(".mask-box img").css({
//             position: "absolute",
//             left: "50%",
//             top: "50%",
//             marginLeft: -width_ / 2 + "px",
//             marginTop: -height_ / 2 + "px",
//             opacity: 1,
//             "box-shadow": " 0 0 20px 5px rgba(200, 200, 200, 0.38)"
//         })
//         $(".mask-box").animate({
//             opacity: 1,
//         }, 500)
//     });
// }

function showimg() {
    $(".dashed .d-item").each(function(index) {
        $(this).on("click", function() {
            //var t = t || {};
            $(".mask-box").show();
            var d_box = $(".dashed-box");
            var d_inner = $(".dashed-inner");
            d_box.removeAttr("style");
            d_inner.removeAttr("style");
            d_box.show();
            d_inner.hide();
            i_show = $(".dashed-inner")[index];
            $(i_show).show();
            var max_height = $(".mask-box").height();
            var img_height = max_height * 0.75;
            $(i_show).children().height(img_height + "px");
            var img_width = $($(i_show).children()[0]).width();
            d_box.height(img_height);
            d_box.width(img_width);
            var length = $(i_show).children().length;
            console.log(img_width);
            console.log(img_height);
            d_inner.width(img_width * length + "px");
            $(".dashed-box").css({
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: -img_width / 2 + "px",
                marginTop: -img_height / 2 + "px",
                opacity: 1,
                "overflow": "hidden",
                "box-shadow": " 0 0 20px 5px rgba(200, 200, 200, 0.38)"
            })
            $(".mask-box").animate({
                opacity: 1,
            }, 500)
            $(".dashed-inner img").css('float', 'left');

            var i = 0;

            function move() {
                if (i == length) {
                    d_inner.css({
                        "margin-left": 0
                    })
                    i = 1;
                }
                d_inner.stop().animate({
                    "margin-left": -i * img_width + "px"
                }, 500);
            }
            var t = setInterval(function() {
                //运行轮播
                i++;
                console.log(i);
                move();
            }, 3000)
            $(".dashed-inner").hover(function() {
                clearInterval(t);
            }, function() {
                t = setInterval(function() {
                    i++;
                    move();
                    //console.log(i);
                }, 3000)
            })
            var hand_l = $(".left"),
                hand_r = $(".right");
            hand_l.on("click", function() {
                if (t) {
                    clearInterval(t);
                }
                i--;
                move2();
                t = setInterval(function() {
                    i++;
                    move2();
                    //console.log(i);
                }, 3000)
            })
            hand_r.on("click", function() {
                if (t) {
                    clearInterval(t);
                }
                i++;
                move2();
                t = setInterval(function() {
                    i++;
                    move2();
                    //console.log(i);
                }, 3000)
            })

            function move2() {
                if (i == length) {
                    d_inner.css({
                        "margin-left": 0
                    })
                    i = 1;
                }
                if (i == -1) {
                    d_inner.css({
                        "margin-left": -(length - 1) * img_width + "px"
                    })
                    i = length - 2;
                }
                d_inner.stop().animate({
                    "margin-left": -i * img_width + "px"
                }, 500);
            }
            $(".close").on("click", function() {
                clearInterval(t);
            })
        })
    })
}
btnclick();
hover();
//changeBg();
showimg();
