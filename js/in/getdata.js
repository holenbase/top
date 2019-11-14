//读取成员列表

function doMove(e){
    var t=$(".history__bd"),
    n=t[0].children.length,
    i=null,
    a=parseInt(t[0].style.left?t[0].style.left:"0");
    a>=0&&e>0||a<=-400*(n-2)&&e<0||(10==times?(times=0,window.clearTimeout(i)):(times+=1,t[0].style.left=a+e+"px",i=window.setTimeout("doMove("+e+")",30)))
}
    
$(function(){
    bowser&&!bowser.mobile&&(
        $("#award").flexslider({
            animation:"silde",
            slideshow:!1,
            slideshowSpeed:6e3,
            controlsContainer:$(".custom-controls-container"),
            customDirectionNav:$(".custom-navigation a"),
            directionNav:!0,
            minItems:1,
            maxItems:5,
            prevText:"",
            nextText:"",
            manualControls:".slide_switch__item"
        }),
        $("#history").flexslider({
            animation:"silde",
            slideshow:!1,
            slideshowSpeed:6e3,
            controlsContainer:$(".custom-controls-container"),
            customDirectionNav:$(".custom-navigation a"),
            directionNav:!0,
            prevText:"",
            nextText:"",
            manualControls:".slide_switch__item"
        })
    ),
    $(".slide_action__btn--left").bind("click",function(){doMove(40)}),
    $(".slide_action__btn--right").bind("click",function(){doMove(-40)})
});

var times=0;

$(function(){
    for(var e="",t=members.length,n="",i="",a="",o="",s=window.location.href,l=0;l<t;l++){
        var _=members[l];
        n=_.id,
        i=_.img_sm,
        a=_.name_cn,
        o=_.position_cn,
        memberAlt=_.alt_cn,
        e=e+'<li class="management_list__item" id="'+n+'"><a href="javascript:;" class="management_list__media"><img src="'+i+'" class="management_list__media_img" alt="'+memberAlt+'"></a><a href="javascript:;"> <h3 class="management_list__name">'+a+'</h3></a><a href="javascript:;"><p class="management_list__txt">'+o+"</p></a></li>"}
    $(".management_list").html(e)
}),

$(function(){
    var e=window.location.href;
    $(".management_list__item").bind("click",function(){
        var t=this,
        n=($(t)[0],$(t)[0].id),
        i=members.filter(function(e){return e.id==n}),
        a="",
        o="",
        s="",
        l="";
        a=i[0].name_cn,
        o=i[0].position_cn,
        s=i[0].introdution_cn,
        alt=i[0].alt_cn,
        i[0].id,
        l=i[0].img_lg,
        $(".popup__management_tit").text(a),
        $(".popup__management_post").text(o),
        $(".popup__management_txt").html(s),
        $(".popup__management_img").attr("src",l),
        $(".popup__management_img").attr("alt",alt),
        $(".mod_popup").show().addClass("show"),
        $("body").css({overflow:"hidden",height:"100%"})
    }),
    $(".popup__close,.popup__mask").bind("click",function(){
        $(".popup__management_img").attr("src",""),
        $(".mod_popup").removeClass("show").hide(),
        $("body").css({overflow:"auto",height:"auto"})
    })
});