//控制顶部按钮下划线，以及返回顶部按钮，两个功能

function line_current_position(){}
    
function line_position(){
    $(".header__nav_box").mouseenter(function(){var e=$(this).position().left,t=$(this).width();$(".header__nav_line").css({left:e+10,width:t})}),$(".header__nav").mouseleave(function(){line_current_position()})
    }
    
function dynamicLoadJs(e,t){
    var n=document.getElementsByTagName("head")[0],
    o=document.createElement("script");
    o.type="text/javascript",
    o.src=e,
    "function"==typeof t&&(o.onload=o.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(t(),o.onload=o.onreadystatechange=null)}),
    n.appendChild(o)
    }
    
$(".btn_bottom_top").on("click",function(){$("html,body").animate({scrollTop:"0px"},200)}),
    
$(".header__lines").bind(
        "click",function(){
            var e=$(".mod_header").attr("class");
            "mod_header"==e?($(".mod_header").addClass("mod_header--menu"),$("body").css({overflow:"hidden",height:"100%"})):($(".mod_header").removeClass("mod_header--menu"),$("body").css({overflow:"auto",height:"auto"}))
        }
    ),
    
bowser&&!bowser.mobile&&$(".header__nav_box").hover(function(){$(this).find("div").show()},function(){$(this).find("div").hide()}),
    
$(".header__nav_box_menu").bind("click",function(){
        var e=this,t=$(e).attr("href");window.location.href=t
    }),
    
$(function(){
        var e=$(".header__nav_box").hasClass("header__nav_box--current");
        e?(line_position(),line_current_position()):line_position()
    }),
    
$(window).resize(function(){line_current_position()}),
    
$(window).scroll(
        function(){
            var e=document.body.scrollTop||document.documentElement.scrollTop;
            e>0&&!bowser.mobile?$(".btn_bottom_top").css({display:"block"}):$(".btn_bottom_top").css({display:"none"})
        }
    );