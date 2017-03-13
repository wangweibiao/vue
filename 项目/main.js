import Index from './components/Index.vue';
import Shopcar from './components/Shopcar.vue';
import My from './components/My.vue';
import detail from './components/test.vue';
import Classify from './components/Classify.vue';
import Login from './views/login.vue';
import Register from './views/register.vue';
import Goods from './views/goods.vue';
////消息提醒
//import Toast from 'vue-toast-mobile'
//window.Toast = Toast;

//开启debug模式
Vue.config.debug = true;

//启动路由
//1.声明一个空的对象
var App ={};
//2.初始化vue-router实例
var router = new VueRouter({
	hashbang :true,
	linkActionveClass:"v-link-active"
});
//3.配置 map vue路由对外提供的一个方法  目的是可以让用户进行手动配置
//参数选项 component:切换进来的组件名称


////可以用来进行全局权限认证， 慎用   首次hash和map进行匹配的时候
//router.beforeEach((transition)=>{
//	return true;
//});

router.map({
	'/':{
		component:Index
	},
	'/index':{
		component:Index		
	},
	'/shopcar':{
		name:'cart',
		component:Shopcar,
		subRoutes:{
			'/detail':{
				component:detail
			}
		}
	},
	'/my':{//我的页面
		component:My,
		subRoutes:{
			'/detail':{
				component:detail
			}
		}
	},
	'/classify':{//分类页面
		component:Classify
	},'/login':{//登录页面
		component:Login
	},
	'/register':{//注册页面
		component:Register
	},
	'/goods':{//商品详情页
		name:'goods',
		component:Goods
	}
	
});


router.start(App,'#app');

router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/"//重定向任意未匹配路径到/index
});

//局部，map执行完毕以后，完全匹配上以后
//router.afterEach((transition)=>{
//	//回调函数里面是个对象 api
//	//transition.from获取上一次请求地址
//	console.log(transition.from);
//	//获取当前请求路径
//	console.log(transition.to);
//	
//	var _name = transition.from.path;
//	console.log(_name);
//	if(_name=="/my"){
//		window.location.href = "index.html";
//		//重定向
//		/**
//		 * router.redirect({
//		 * 		'委托给哪个请求':'当前请求'
//		 * })；
//		 */
//		router.redirect({
//			'/my':'/index'
//		});
//	}
//});