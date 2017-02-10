/**
 * Created by 天尊 on 2016/10/7.
 */

//TODO 手写一段js 模拟实现手风琴效果
$("h2 a").on("click",function(e){
    e.preventDefault();
    $(this).parent().parent().parent().next().toggleClass("active");
    var cls=$(this).find("span:last-child").attr("class");
    if(cls.indexOf("down")!=-1){
        $(this).find("span:last-child").attr("class","glyphicon glyphicon-chevron-up pull-right");
    }else{
        $(this).find("span:last-child").attr("class","glyphicon glyphicon-chevron-down pull-right");
    }
});
//TODO 控制图片的标题的显示和隐藏
$(".thumbnail").on("mouseenter",function(){
    var top=parseInt(window.getComputedStyle($(this).find("img")[0]).marginTop);
    var timer=setInterval(function(){
        $(this).find("img").css("margin-top",top);
        if(top>-36){
            top-=3;
        }else{
            clearInterval(timer);
        }
    }.bind(this),30);
});
$(".thumbnail").on("mouseleave",function(){
    var top=parseInt(window.getComputedStyle($(this).find("img")[0]).marginTop);
    var timer=setInterval(function(){
        $(this).find("img").css("margin-top",top);
        if(top<0){
            top+=3;
        }else{
            clearInterval(timer);
        }
    }.bind(this),30);
});
$(".box").siblings().css("display","none");
