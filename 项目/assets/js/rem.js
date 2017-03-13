//使用js去控制rem的大小 核心思想 图片大小和屏幕宽度是同比例的
//动态设置rem值大小
document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
//在用户企图改变浏览器窗口大小的时候，动态计算rem值
window.addEventListener('resize',function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
})

