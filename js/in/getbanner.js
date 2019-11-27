//获取banner图片的JS代码，随机获取1-4的.css文件
var cssurlarr = ["1.css", "2.css", "3.css", "4.css"];
//css url arr,cssurlarr[0]=1.css;cssurlarr[1]=2.css;cssurlarr[2]=3.css;cssurlarr[3]=4.css。
var cssurl = cssurlarr[Math.floor(Math.random()*cssurlarr.length)];
document.write('<link href="./css/'+cssurl+'" rel="stylesheet" type="text/css">');
//output:<link href="?.css" rel="stylesheet" type="text/css">
