import store from './store';
import toJson from '../assets/js/toJson.js';
import ajax from '../assets/js/ajax.js';

//获取首页轮播图
const getBanner =  function(){
	const service = 'http://datainfo.duapp.com/shopdata/getBanner.php';
	var self = this;
	ajax.get(service,function(dataStr){
		var data = toJson(dataStr);
		var _banner =[];
		var a=[];
		for(var i in data){
			a[i] = data[i].goodsBenUrl[1];
			_banner[i] = eval('('+data[i].goodsBenUrl+')');
		}
		
		for(var i in _banner){
			_banner[i] =  _banner[i][0];
		}
		store.dispatch('GETBANNER',_banner);
		
	});	
}

//搜索商品
const getSearch = function(state,event){
	var _text = encodeURI(this.inputValue)?encodeURI(this.inputValue):"";
	if(event){
		var _value = event.target.getAttribute('name');
		_text = _value;
	}
	var _query =[];
	var service ="";
	if(_text=="undefined" ||_text==null){
		service = 'http://datainfo.duapp.com/shopdata/getGoods.php';		
		console.log(service);
	}else{
		service = 'http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText='+_text;
		console.log(service);
	}
	
	ajax.get(service,function(dataStr){
		var data = toJson(dataStr);
		_query = data;
		store.dispatch('GETSEARCH',_query);
	})
}


const getClassify = function(){
	const service = 'http://datainfo.duapp.com/shopdata/getclass.php';
	ajax.get(service,function(data){
		var _classify = JSON.parse(data);
		store.dispatch('GETCLASSIFY',_classify);
	})
}
//登录
const login = function(){
	let self = this;
	
	const service = 'http://datainfo.duapp.com/shopdata/userinfo.php';
	var sendMsg = 'status=login&userID='+self.userID +"&password="+self.password;
	console.log(service+"?"+sendMsg)
	fetch(service,{
		method:'post',
		headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},
		body:sendMsg,//发送的数据
	})
	.then(response=>response.json())
	.then(res=>{		
		store.dispatch('LOGIN',res);
		loginCheck(res);
	}) 
	
	function loginCheck(res){
		if(res){
			if(res==0){
				alert('用户名不存在');
				
			}else if(res==1){
				alert('密码错误');	
			}else{
				alert("登录成功");
				var storage = window.localStorage;
//				storage.setItem('mlyc_userID',res.userID);
//				storage.setItem('mlyc_password',res.password);
//				storage.setItem('mlyc_userimg_url',res.userimg_url);
				storage.setItem('mlyc_user',JSON.stringify(res));
				self.$route.router.go({path:"/my"});
			}
		}
	}
}

//注册
const register = function(){
	let self = this;
	console.log("aaa");
	if(this.password!=this.password2){
		alert('两次密码不一致')
		
	}else{
		getdata();
	}
	
	function registerCheck(res){
		switch(res){
			case 0: 
			alert ("用户已存在") ;
			break;
			case 1: 
			alert ("注册成功，返回登录");
			self.$route.router.go({path:'/login'});
			break;
			case 2:
			alert('数据库报错');
			break;
			default:
			alert('未知错误')
		}
	}
	
	function getdata(){
		console.log(self);
		const service = 'http://datainfo.duapp.com/shopdata/userinfo.php';
		var sendMsg = 'status=register&userID='+self.userID +"&password="+self.password;
		console.log(service+"?"+sendMsg)
		fetch(service,{
			method:'post',
			headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},
			body:sendMsg,//发送的数据
		})
		.then(response=>response.json())
		.then(res=>{
			console.log(res);
			registerCheck(res);
		})
	}
	
}

const getDetail=function(state,goodsID){
	let self = this
	const service = 'http://datainfo.duapp.com/shopdata/getGoods.php?goodsID='+goodsID;
	console.log(service);
	
	ajax.get(service,function(dataStr){
		var data = toJson(dataStr)[0];
		data.goodsBenUrl = JSON.parse(data.goodsBenUrl);
		data.imgsUrl = JSON.parse(data.imgsUrl);		
		store.dispatch("GETDETAIL",data);
		self.$route.router.go({name:'goods',query:{goodsID:goodsID}});
	})
}

const upCart = function(state,number,userID,goodsID,fn){
	console.log(number)
	const service = 'http://datainfo.duapp.com/shopdata/updatecar.php?userID='+userID+'&goodsID='+goodsID+'&number='+number;
	ajax.get(service,function(res){
		fn();
	})
	console.log(service);
}

const getcart = function(state,userID){
	console.log()
	const service = 'http://datainfo.duapp.com/shopdata/getCar.php?userID='+userID;
	console.log(service)
	ajax.get(service,function(dataStr){
		var data = toJson(dataStr);
		console.log(data);
		
		state.dispatch('GETCART',data);
	})
}

export default{
	getBanner,
	getSearch,
	getClassify,
	login,
	register,
	getDetail,
	upCart,
	getcart,
};


