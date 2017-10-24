/**
 * Created by Administrator on 2017/10/21.
 */
    $(function(){
        var timer;
        var a=0,b=0,c=true;
        var text="Hello！尊敬的HR及面试官:我叫梅立，2014年毕业于江汉大学，是一名非科班的web前端开发爱好者，几个月之前，出于对IT技术的好奇，并且结合自身的实际情况，开始了自学前端的旅程，目前已经掌握一些实用的技术，希望能进入互联网公司学习并提升技术实力，成为一名职业前端开发者。";
        // $("#mainBox").height(window.screen.height);
        // $(".profile").width($(".skill-show>li").width()-121);
        // alert($(".skill-show>li").width());//js或jq获取到的width或height都会四舍五入
        $("#projects-box li img").hover(function(){
            if(c==true){
                $(this).css({
                    "width":400,
                    "height":200,
                });
                c=false;
            }else{
                $(this).css({
                    "width":200,
                    "height":100,
                });
                c=true;
            }
        });

        /*头像动画开始*/

        timer=setInterval(function(){
            a+=3;
            $("#cir-L").css({
                "transform":"rotate("+a+"deg)",
                "-webkit-transform":"rotate("+a+"deg)",
                "-ms-transform":"rotate("+a+"deg)",
                "-moz-transform":"rotate("+a+"deg)",
                "-o-transform":"rotate("+a+"deg)"
            });//jq实现transform样式修改，及后缀添加
            if(a==180){
                clearInterval(timer);
                $("#cir-R").css("display","block");
                a=0;
                timer=setInterval(function(){
                    a+=3;
                    $("#cir-R")[0].style.transform="rotate("+a+"deg)";
                    $("#cir-R")[0].style.webkitTransform="rotate("+a+"deg)";
                    $("#cir-R")[0].style.msTransform="rotate("+a+"deg)";
                    $("#cir-R")[0].style.mozTransform="rotate("+a+"deg)";
                    $("#cir-R")[0].style.oTransform="rotate("+a+"deg)";
                    //原生js实现transform样式修改，及后缀添加
                    if(a==180){
                        a=1;
                        clearInterval(timer);
                        timer=setInterval(function(){
                            a-=0.005;
                            $("#head-box").css({
                                "transform":"scale("+a+")",
                                "-ms-transform": "scale("+a+")",	/* IE 9 */
                                "-webkit-transform": "scale("+a+")",	/* Safari 和 Chrome */
                                "-o-transform": "scale("+a+")",	/* Opera */
                                "-moz-transform": "scale("+a+")"	/* Firefox */
                            });
                            if(a<=0.7){
                                clearInterval(timer);

                                /*头像动画结束 文本框动画开始*/

                                $("#led-box").stop().animate({"left":"3%"},600, "linear",function(){
                                    $("#lev-line").css({
                                        top : "50%",
                                        left : "50%"
                                    })
                                        .css("display","block")
                                        .stop().animate({
                                        "width":"120px"
                                    },800,function(){
                                        $(".add-height").stop().animate({
                                            "height":"150px"
                                        },800,function(){
                                            $(".add-width").stop().animate({
                                                "width":"500px"
                                            },1200,function(){
                                                $(".add-width").stop();
                                                //连续的animate要记得加stop()确保动画终止，本质上是确保animate内部定时器终止，以免对后续animate或者定时器产生影响，切记切记
                                                $("#e-line").css({
                                                    "top": "50%",
                                                    "display":"block"
                                                });
                                                a=0;
//                                                    var timer;
                                                timer=setInterval(function(){
                                                    a+=2;
                                                    b+=9;
                                                    $("#e-line").css({
                                                        "left": b
                                                    });
                                                    rotation($("#e-line"),a);
                                                    if(b>=782){
                                                        clearInterval(timer);
                                                        rotation($("#e-line"),0);

                                                        /*文本框动画结束 字幕下拉动画开始*/
                                                        $("#top-text").animate({
                                                            "top": 0
                                                        },2000,function(){
                                                            $("#top-text").stop();

                                                            /*字幕下拉结束，开始文字录入*/
                                                            a=0;
                                                            timer=setInterval(function(){
                                                                var char=text.charAt(a);
                                                                a++;
                                                                if(a<=16){$("#top-text h1").text(function(index,value){
                                                                    return value+char;
                                                                });}else{
                                                                    $("#top-text p").text(function(index,value){
                                                                        return value+char;
                                                                    });
                                                                }
                                                                if(a==text.length){
                                                                    clearInterval(timer);


                                                                    /*文字录入结束，开始旋转靠边*/
                                                                    a=0;
                                                                    timer=setInterval(function(){
                                                                        a+=3;
                                                                        rotation($("#led-box"),a);
                                                                        if(a>=90){
                                                                            clearInterval(timer);
                                                                            $("#lev-line,.end-line").fadeOut(function(){
                                                                                a=90;
                                                                                // 混合多层嵌套定时器和jq动画时（jq动画结束后开启定时器），很容易造成清除定时器失效，停不下来的情况，这时可以在开启定时器前再清除一次定时器即可
                                                                                clearInterval(timer);
                                                                                timer=setInterval(function(){
                                                                                    a-=3;
                                                                                    rotation($("#led-box"),a);
                                                                                    if(a<=0){
                                                                                        clearInterval(timer);
                                                                                        $("#led-box").stop().animate({
                                                                                            "top": "25%"
                                                                                        },1000);
                                                                                        $("#my-info").fadeIn(1000);
                                                                                        $("#show-box").stop().animate({
                                                                                            "right": 0
                                                                                        },2000);
                                                                                    }
                                                                                },50)
                                                                            });
                                                                        }
                                                                    },50);
                                                                }
                                                            },150)
                                                        })
                                                    }
                                                },15)
                                            })
                                        })
                                    });
                                });
                            }
                        },15)
                    }
                },15);
            }
        },15)
    });
function rotation($Obj,a){
    $Obj.css({
        "transform":"rotate("+a+"deg)",
        "-webkit-transform":"rotate("+a+"deg)",
        "-moz-transform":"rotate("+a+"deg)",
        "-ms-transform":"rotate("+a+"deg)",
        "-o-transform":"rotate("+a+"deg)",
    });
}