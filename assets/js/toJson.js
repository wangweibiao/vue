//将字符串转换成对象的api
var formJson = function(_string){
	//_string = call_back([])
	var point= _string.indexOf("(");
	_string = _string.substring(point+1,_string.length-1);
//	console.log(point);
	return JSON.parse(_string);
}

export default formJson;