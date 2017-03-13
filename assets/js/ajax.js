/***
 * restful 标准
 * json
 * xml
 * restful 标准是主张前后端完全分离，rest休闲
 * 前端不需要后端硬件性支持，没有后端的前提下，也能进行工作（mock 数据）
 * 后端在没有前端的基础上也能进行独立测试和运行
 * 
 */

/**闭包封装函数的思想
 * 1.闭包是一个自行运行的函数，在内部嵌套了很多子函数
 * 2.外部不能直接调用内部子函数，只要闭包对return的函数才能被调用
 * 		闭包如何启动
 */

//lib : 凡是第三方引入的包都放劲lib文件夹里

var ajax =(function(){
	//ajax get
	var get = function(url,callback){
		
		//1.创建xhr对象
		var xhr = new XMLHttpRequest();
		//2.xhr.open根据地址打开连接
		xhr.open('GET',url,true);
		//3.xhr.send('')
		xhr.send('');
		//4.onreadystatechange 判断得到数据获取出来
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4&&xhr.status==200){
				callback(xhr.responseText); 
			}
		}
	}
	//ajax post
	var post = function(url,param,callback){
		
	}
	return{
		get:get,
		post:post
	}
})();

export default ajax;

