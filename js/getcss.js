// JavaScript Document
//获取背景图片的JS代码，随机获取1-4的.css文件，每个css中有不同的body背景图片和颜色的代码，css文件放置于主目录下
var cssurlarr = ["1.css", "2.css", "3.css"];
//var cssurlarr = ["1.css", "2.css", "3.css", "4.css"];
//新建数组设置变量css（样式表）url（用户需求语言）arr（抵达）——css url arr,cssurlarr[0]=1.css;cssurlarr[1]=2.css;cssurlarr[2]=3.css;cssurlarr[3]=4.css。
var cssurl = cssurlarr[Math.floor(Math.random()*cssurlarr.length)];
/*
设置变量css url，
代码floor()方法能对数进行下舍入即取比该值小的最接近的整数。
代码cssurlarr.length表示数组cssurlarr的长度：值为4。
代码Math.floor(Math.random()*4)可以获取一个介于0和3之间的随机数。
结果为“cssurlarr[?]”。
*/
document.write('<link href="'+cssurl+'" rel="stylesheet" type="text/css">');
//document.write()语句输出结果

//此JS代码会在此处输出：<link href="?.css" rel="stylesheet" type="text/css">
