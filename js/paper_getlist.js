// list页面获取文章列表的脚本
$(function(){
    for(var l="",_=newsData.length,a="",s=0;s<_;s++){
        var i=newsData[s];
        i.title&&(i.img_src&&(a=i.img_src),l=l+'<li class="equal_col_list__item"><div class="equal_col_list__box"><a href="./p/'+i.name+'.html" class="equal_col_list__media" target="_blank"><img src="'+a+'" class="equal_col_list__media_img" alt=""> </a><div class="equal_col_list__cont"><a href="./p/'+i.name+'.html" target="_blank"><h3 class="equal_col_list__tit equal_col_list__tit--s">'+i.title+'</h3></a><p class="equal_col_list__date">'+i.news_date+'</p><a href="./p/'+i.name+'.html" class="equal_col_list__more" title="more" target="_blank">MORE</a></div></div></li>')
    }
    $(".equal_col_list").html(l)
});