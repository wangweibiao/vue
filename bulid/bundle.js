/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Index = __webpack_require__(1);

	var _Index2 = _interopRequireDefault(_Index);

	var _Shopcar = __webpack_require__(31);

	var _Shopcar2 = _interopRequireDefault(_Shopcar);

	var _My = __webpack_require__(36);

	var _My2 = _interopRequireDefault(_My);

	var _test = __webpack_require__(46);

	var _test2 = _interopRequireDefault(_test);

	var _Classify = __webpack_require__(50);

	var _Classify2 = _interopRequireDefault(_Classify);

	var _login = __webpack_require__(65);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(74);

	var _register2 = _interopRequireDefault(_register);

	var _goods = __webpack_require__(79);

	var _goods2 = _interopRequireDefault(_goods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	////消息提醒
	//import Toast from 'vue-toast-mobile'
	//window.Toast = Toast;

	//开启debug模式
	Vue.config.debug = true;

	//启动路由
	//1.声明一个空的对象
	var App = {};
	//2.初始化vue-router实例
	var router = new VueRouter({
		hashbang: true,
		linkActionveClass: "v-link-active"
	});
	//3.配置 map vue路由对外提供的一个方法  目的是可以让用户进行手动配置
	//参数选项 component:切换进来的组件名称


	////可以用来进行全局权限认证， 慎用   首次hash和map进行匹配的时候
	//router.beforeEach((transition)=>{
	//	return true;
	//});

	router.map({
		'/': {
			component: _Index2.default
		},
		'/index': {
			component: _Index2.default
		},
		'/shopcar': {
			name: 'cart',
			component: _Shopcar2.default,
			subRoutes: {
				'/detail': {
					component: _test2.default
				}
			}
		},
		'/my': { //我的页面
			component: _My2.default,
			subRoutes: {
				'/detail': {
					component: _test2.default
				}
			}
		},
		'/classify': { //分类页面
			component: _Classify2.default
		}, '/login': { //登录页面
			component: _login2.default
		},
		'/register': { //注册页面
			component: _register2.default
		},
		'/goods': { //商品详情页
			name: 'goods',
			component: _goods2.default
		}

	});

	router.start(App, '#app');

	router.redirect({ //定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
		'*': "/" //重定向任意未匹配路径到/index
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(3);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(16);

	var _footer2 = _interopRequireDefault(_footer);

	var _banner = __webpack_require__(20);

	var _banner2 = _interopRequireDefault(_banner);

	var _goodsList = __webpack_require__(25);

	var _goodsList2 = _interopRequireDefault(_goodsList);

	var _ajax = __webpack_require__(14);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//2.组件注册
	exports.default = {
		components: {
			'headers': _header2.default,
			'banner': _banner2.default,
			'goodlist': _goodsList2.default,
			'footers': _footer2.default
		},
		methods: {},
		data: function data() {
			var self = this;
			return {};
		},
		ready: function ready() {}
	};
	// </script>
	// <!--
	// 	初始化组件页面
	// 	目的是为了在这个组件容器里面
	// 	将其他的组件嵌套进来
	//
	// -->
	// <template>
	// 	<div id="">
	// 		<headers></headers>
	// 		<banner></banner>
	// 		<goodlist></goodlist>
	// 		<footers></footers>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	//实现组件嵌套  1.引入组件

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\home\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-72cac41e&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-72cac41e&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".header[_v-72cac41e] {\n  width: 100%;\n  background-color: #d9001d;\n  height: 0.7rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2; }\n  .header .logo[_v-72cac41e] {\n    width: 1.3rem;\n    height: 0.4rem;\n    background: url(" + __webpack_require__(7) + ") no-repeat;\n    background-size: cover; }\n  .header .search[_v-72cac41e] {\n    width: 4.38rem;\n    height: 0.5rem;\n    background-color: #b40000;\n    font-size: 0.32rem;\n    color: #fefefe;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .header .search input[_v-72cac41e] {\n      font-size: 0.24rem;\n      color: #fff;\n      border: none;\n      outline: none;\n      width: 3.8rem;\n      height: 0.5rem;\n      line-height: 0.5rem;\n      background-color: #b40000; }\n  .header .iconfont[_v-72cac41e] {\n    font-size: 0.38rem; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	.header{
	// 		width: 100%;
	// 		background-color: #d9001d;
	// 		height:0.7rem;overflow: hidden;
	// 		display: flex;
	// 		justify-content: space-around;
	// 		align-items: center;
	// 		color: #fff;
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 		z-index: 2;
	// 		.logo{
	// 			width: 1.3rem;
	// 			height: 0.4rem;
	// 			background: url(../../assets/src/logo.png)  no-repeat;
	// 			background-size: cover;
	// 		}
	// 		.search{
	// 			width: 4.38rem;
	// 			height: 0.5rem;
	// 			background-color: #b40000;
	// 			font-size: 0.32rem;
	// 			color: #fefefe;
	// 			display: flex;
	// 			justify-content: space-around;
	// 			align-items: center;
	// 			input{
	// 				font-size:0.24rem;
	// 				color: #fff;
	// 				border: none;
	// 				outline: none;
	// 				width: 3.8rem;
	// 				height: 0.5rem;
	// 				line-height: 0.5rem;
	// 				background-color: #b40000;
	// 			}
	//
	// 		}
	// 		.iconfont{
	// 			font-size: 0.38rem;
	// 		}
	// 	}
	// </style>
	// <template>
	//    <div class="header">
	//         <a href="" class="logo"></a>
	//         <div class="search">
	//         	<div class="iconfont icon-sousuokuangsousuo" @click="updateMessage"></div>
	//         	<input type="text" v-model="inputValue"/>
	//         </div>
	//         <div class="iconfont icon-daipingjia"></div>
	//    </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {},
			actions: {
				updateMessage: _action2.default.getSearch
			},
			//			data(){
			//				return{
			//					inputValue:""
			//				}
			//			},
			ready: function ready() {
				_action2.default.updateMessage();
			}
		}

	};
	// </script>

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vuex = __webpack_require__(11);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		_banner: null,
		_query: null,
		_classify: null,
		_user: null,
		_detail: null,
		_cart: null
	};
	//3.声明突变属性
	var mutations = {
		//对象类型的方法  将我们当前执行的action--->改变的值关联起来
		//里面写的方法目的就是改变state值

		GETBANNER: function GETBANNER(state, data) {
			//为了和页面事件函数区分开，函数有参数，就是state
			state._banner = data;
		},
		GETSEARCH: function GETSEARCH(state, data) {
			state._query = data;
		},
		GETCLASSIFY: function GETCLASSIFY(state, data) {
			console.log(data);
			state._classify = data;
		},
		LOGIN: function LOGIN(state, data) {
			state._user = data;
		},
		GETDETAIL: function GETDETAIL(state, data) {
			state._detail = data;
		},
		GETCART: function GETCART(state, data) {
			state._cart = data;
			console.log(data);
		}
	};
	//4.创建成store对象  外部通过api调用  都需要使用这个对象
	//store.dispatch('任务名称');
	var store = new _vuex2.default.Store({
		//传递对象  可以使用es6结构赋值方式进行传递进去
		state: state, mutations: mutations
	});

	exports.default = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Vuex v1.0.0-rc.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vuex = factory();
	})(undefined, function () {
	  'use strict';

	  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	  };

	  var classCallCheck = function classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var toConsumableArray = function toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            prev[key] = existing.concat(obj[key]);
	          } else {
	            prev[key] = [existing].concat(obj[key]);
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Check whether the given value is Object or not
	   *
	   * @param {*} obj
	   * @return {Boolean}
	   */

	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }

	  /**
	   * Get state sub tree by given keys.
	   *
	   * @param {Object} state
	   * @param {Array<String>} nestedKeys
	   * @return {Object}
	   */
	  function getNestedState(state, nestedKeys) {
	    return nestedKeys.reduce(function (state, key) {
	      return state[key];
	    }, state);
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  function devtoolPlugin(store) {
	    if (!hook) return;

	    hook.emit('vuex:init', store);

	    hook.on('vuex:travel-to-state', function (targetState) {
	      store.replaceState(targetState);
	    });

	    store.subscribe(function (mutation, state) {
	      hook.emit('vuex:mutation', mutation, state);
	    });
	  }

	  function override(Vue) {
	    var version = Number(Vue.version.split('.')[0]);

	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} plugins
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$plugins = _ref.plugins;
	      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      this._subscribers = [];
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	      // apply plugins
	      devtoolPlugin(this);
	      plugins.forEach(function (plugin) {
	        return plugin(_this);
	      });
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    createClass(Store, [{
	      key: 'replaceState',

	      /**
	       * Replace root state.
	       *
	       * @param {Object} state
	       */

	      value: function replaceState(state) {
	        this._dispatching = true;
	        this._vm.state = state;
	        this._dispatching = false;
	      }

	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	    }, {
	      key: 'dispatch',
	      value: function dispatch(type) {
	        var _this2 = this;

	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        var isObjectStyleDispatch = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          isObjectStyleDispatch = true;
	          payload = type;
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var handler = this._mutations[type];
	        var state = this.state;
	        if (handler) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(handler)) {
	            handler.forEach(function (h) {
	              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) {
	            (function () {
	              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
	              _this2._subscribers.forEach(function (sub) {
	                return sub(mutation, state);
	              });
	            })();
	          }
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this3 = this;

	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this3.state);
	        }, cb, options);
	      }

	      /**
	       * Subscribe to state changes. Fires after every mutation.
	       */

	    }, {
	      key: 'subscribe',
	      value: function subscribe(fn) {
	        var subs = this._subscribers;
	        if (subs.indexOf(fn) < 0) {
	          subs.push(fn);
	        }
	        return function () {
	          var i = subs.indexOf(fn);
	          if (i > -1) {
	            subs.splice(i, 1);
	          }
	        };
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        var _this4 = this;

	        if (!isObject(modules)) return;

	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];

	          // set this module's state
	          Vue.set(state, key, module.state || {});

	          // retrieve nested modules
	          _this4._setupModuleState(state[key], module.modules);
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        var updatedMutations = this._createModuleMutations(modules, []);
	        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
	      }

	      /**
	       * Helper method for _setupModuleMutations.
	       * The method retrieve nested sub modules and
	       * bind each mutations to its sub tree recursively.
	       *
	       * @param {Object} modules
	       * @param {Array<String>} nestedKeys
	       * @return {Array<Object>}
	       */

	    }, {
	      key: '_createModuleMutations',
	      value: function _createModuleMutations(modules, nestedKeys) {
	        var _this5 = this;

	        if (!isObject(modules)) return [];

	        return Object.keys(modules).map(function (key) {
	          var module = modules[key];
	          var newNestedKeys = nestedKeys.concat(key);

	          // retrieve nested modules
	          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

	          if (!module || !module.mutations) {
	            return mergeObjects(nestedMutations);
	          }

	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
	            };
	          });

	          // merge mutations of this module and nested modules
	          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
	        });
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this6 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this6._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  var index = {
	    Store: Store,
	    install: install
	  };

	  return index;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _toJson = __webpack_require__(13);

	var _toJson2 = _interopRequireDefault(_toJson);

	var _ajax = __webpack_require__(14);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//获取首页轮播图
	var getBanner = function getBanner() {
		var service = 'http://datainfo.duapp.com/shopdata/getBanner.php';
		var self = this;
		_ajax2.default.get(service, function (dataStr) {
			var data = (0, _toJson2.default)(dataStr);
			var _banner = [];
			var a = [];
			for (var i in data) {
				a[i] = data[i].goodsBenUrl[1];
				_banner[i] = eval('(' + data[i].goodsBenUrl + ')');
			}

			for (var i in _banner) {
				_banner[i] = _banner[i][0];
			}
			_store2.default.dispatch('GETBANNER', _banner);
		});
	};

	//搜索商品
	var getSearch = function getSearch(state, event) {
		var _text = encodeURI(this.inputValue) ? encodeURI(this.inputValue) : "";
		if (event) {
			var _value = event.target.getAttribute('name');
			_text = _value;
		}
		var _query = [];
		var service = "";
		if (_text == "undefined" || _text == null) {
			service = 'http://datainfo.duapp.com/shopdata/getGoods.php';
			console.log(service);
		} else {
			service = 'http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText=' + _text;
			console.log(service);
		}

		_ajax2.default.get(service, function (dataStr) {
			var data = (0, _toJson2.default)(dataStr);
			_query = data;
			_store2.default.dispatch('GETSEARCH', _query);
		});
	};

	var getClassify = function getClassify() {
		var service = 'http://datainfo.duapp.com/shopdata/getclass.php';
		_ajax2.default.get(service, function (data) {
			var _classify = JSON.parse(data);
			_store2.default.dispatch('GETCLASSIFY', _classify);
		});
	};
	//登录
	var login = function login() {
		var self = this;

		var service = 'http://datainfo.duapp.com/shopdata/userinfo.php';
		var sendMsg = 'status=login&userID=' + self.userID + "&password=" + self.password;
		console.log(service + "?" + sendMsg);
		fetch(service, {
			method: 'post',
			headers: { "Content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
			body: sendMsg }).then(function (response) {
			return response.json();
		}).then(function (res) {
			_store2.default.dispatch('LOGIN', res);
			loginCheck(res);
		});

		function loginCheck(res) {
			if (res) {
				if (res == 0) {
					alert('用户名不存在');
				} else if (res == 1) {
					alert('密码错误');
				} else {
					alert("登录成功");
					var storage = window.localStorage;
					//				storage.setItem('mlyc_userID',res.userID);
					//				storage.setItem('mlyc_password',res.password);
					//				storage.setItem('mlyc_userimg_url',res.userimg_url);
					storage.setItem('mlyc_user', JSON.stringify(res));
					self.$route.router.go({ path: "/my" });
				}
			}
		}
	};

	//注册
	var register = function register() {
		var self = this;
		console.log("aaa");
		if (this.password != this.password2) {
			alert('两次密码不一致');
		} else {
			getdata();
		}

		function registerCheck(res) {
			switch (res) {
				case 0:
					alert("用户已存在");
					break;
				case 1:
					alert("注册成功，返回登录");
					self.$route.router.go({ path: '/login' });
					break;
				case 2:
					alert('数据库报错');
					break;
				default:
					alert('未知错误');
			}
		}

		function getdata() {
			console.log(self);
			var service = 'http://datainfo.duapp.com/shopdata/userinfo.php';
			var sendMsg = 'status=register&userID=' + self.userID + "&password=" + self.password;
			console.log(service + "?" + sendMsg);
			fetch(service, {
				method: 'post',
				headers: { "Content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
				body: sendMsg }).then(function (response) {
				return response.json();
			}).then(function (res) {
				console.log(res);
				registerCheck(res);
			});
		}
	};

	var getDetail = function getDetail(state, goodsID) {
		var self = this;
		var service = 'http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=' + goodsID;
		console.log(service);

		_ajax2.default.get(service, function (dataStr) {
			var data = (0, _toJson2.default)(dataStr)[0];
			data.goodsBenUrl = JSON.parse(data.goodsBenUrl);
			data.imgsUrl = JSON.parse(data.imgsUrl);
			_store2.default.dispatch("GETDETAIL", data);
			self.$route.router.go({ name: 'goods', query: { goodsID: goodsID } });
		});
	};

	var upCart = function upCart(state, number, userID, goodsID, fn) {
		console.log(number);
		var service = 'http://datainfo.duapp.com/shopdata/updatecar.php?userID=' + userID + '&goodsID=' + goodsID + '&number=' + number;
		_ajax2.default.get(service, function (res) {
			fn();
		});
		console.log(service);
	};

	var getcart = function getcart(state, userID) {
		console.log();
		var service = 'http://datainfo.duapp.com/shopdata/getCar.php?userID=' + userID;
		console.log(service);
		_ajax2.default.get(service, function (dataStr) {
			var data = (0, _toJson2.default)(dataStr);
			console.log(data);

			state.dispatch('GETCART', data);
		});
	};

	exports.default = {
		getBanner: getBanner,
		getSearch: getSearch,
		getClassify: getClassify,
		login: login,
		register: register,
		getDetail: getDetail,
		upCart: upCart,
		getcart: getcart
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//将字符串转换成对象的api
	var formJson = function formJson(_string) {
		//_string = call_back([])
		var point = _string.indexOf("(");
		_string = _string.substring(point + 1, _string.length - 1);
		//	console.log(point);
		return JSON.parse(_string);
	};

	exports.default = formJson;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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

	var ajax = function () {
		//ajax get
		var get = function get(url, callback) {

			//1.创建xhr对象
			var xhr = new XMLHttpRequest();
			//2.xhr.open根据地址打开连接
			xhr.open('GET', url, true);
			//3.xhr.send('')
			xhr.send('');
			//4.onreadystatechange 判断得到数据获取出来
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
		};
		//ajax post
		var post = function post(url, param, callback) {};
		return {
			get: get,
			post: post
		};
	}();

	exports.default = ajax;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"header\" _v-72cac41e=\"\">\n     <a href=\"\" class=\"logo\" _v-72cac41e=\"\"></a>\n     <div class=\"search\" _v-72cac41e=\"\">\n     \t<div class=\"iconfont icon-sousuokuangsousuo\" @click=\"updateMessage\" _v-72cac41e=\"\"></div>\n     \t<input type=\"text\" v-model=\"inputValue\" _v-72cac41e=\"\">\n     </div>\n     <div class=\"iconfont icon-daipingjia\" _v-72cac41e=\"\"></div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-071aa4a0&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./footer.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-071aa4a0&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./footer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "footer[_v-071aa4a0] {\n  width: 100%;\n  height: 0.84rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #eeeeee; }\n  footer a[_v-071aa4a0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 0.2rem;\n    color: #9a9a9a; }\n    footer a i[_v-071aa4a0] {\n      display: block;\n      width: 0.3rem;\n      height: 0.3rem;\n      font-size: 0.3rem; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<footer _v-071aa4a0=\"\">\n\t<!--在事件触发的时候，进行配置，v-link-->\n\t<a v-link=\"{path:'/index'}\" _v-071aa4a0=\"\">\n\t\t<i class=\"iconfont icon-shouye\" _v-071aa4a0=\"\"></i>\n\t\t<span _v-071aa4a0=\"\">首页</span>\n\t</a>\n\t<a v-link=\"{path:'/classify'}\" _v-071aa4a0=\"\">\n\t\t<i class=\"iconfont icon-icon1\" _v-071aa4a0=\"\"></i>\n\t\t<span _v-071aa4a0=\"\">分类</span>\n\t</a>\n\t<a v-link=\"{path:'/shopcar'}\" _v-071aa4a0=\"\">\n\t\t<i class=\"iconfont icon-waimai\" _v-071aa4a0=\"\"></i>\n\t\t<span _v-071aa4a0=\"\">购物车</span>\n\t</a>\n\t<a v-link=\"{path:'/my'}\" _v-071aa4a0=\"\">\n\t\t<i class=\"iconfont icon-wode\" _v-071aa4a0=\"\"></i>\n\t\t<span _v-071aa4a0=\"\">我的</span>\n\t</a>\n</footer>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(21)
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\common\\banner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./banner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./banner.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./banner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "#banner {\n  margin-top: 0.7rem;\n  width: 100%;\n  height: 2.8rem;\n  overflow: hidden; }\n  #banner .swiper-wrapper {\n    width: 6.4rem;\n    height: 2.8rem; }\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang="sass">
	// 	#banner{
	// 		margin-top:0.7rem ;	
	// 		width: 100%;
	// 		height: 2.8rem;
	// 		overflow: hidden;
	// 		.swiper-wrapper{
	// 			width: 6.4rem;
	// 			height: 2.8rem;
	// 		}
	// 	}
	// </style>
	//
	// <template>
	// 	<div id="banner">
	// 		<div class="swiper-container">
	// 			<div class="swiper-wrapper">
	// 				<div v-for="item in result" class="swiper-slide">
	// 					<img :src='item' />
	// 				</div>
	// 			</div>
	// 			<div class="swiper-pagination"></div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._banner;
				}
			},
			actions: {
				getBanner: _action2.default.getBanner
			}
		},
		ready: function ready() {
			_action2.default.getBanner();
			setTimeout(function () {
				var myswiper = new Swiper('.swiper-container', {
					autoplay: 1500,
					loop: true,
					autoplayDisableOnInteraction: false,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}, 1000);
		}
	};
	// </script>

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"banner\">\n\t<div class=\"swiper-container\">\n\t\t<div class=\"swiper-wrapper\">\n\t\t\t<div v-for=\"item in result\" class=\"swiper-slide\">\n\t\t\t\t<img :src='item' />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"swiper-pagination\"></div>\n\t</div>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(26)
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\home\\goodsList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./goodsList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-4dae64da&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./goodsList.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-4dae64da&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./goodsList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".goodsList[_v-4dae64da] {\n  width: 100%;\n  background: #f5f5f5;\n  padding-bottom: 0.7rem; }\n  .goodsList h3[_v-4dae64da] {\n    font-size: 0.25rem;\n    color: #a3a3a3;\n    text-align: center;\n    padding: 0.1rem; }\n  .goodsList .goodswarp[_v-4dae64da] {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .goodsList .goodsItem[_v-4dae64da] {\n    width: 3rem;\n    height: 4.1rem;\n    font-size: 0.22rem;\n    background: #fff;\n    margin: 0.1rem; }\n    .goodsList .goodsItem img[_v-4dae64da] {\n      width: 3rem;\n      height: 3rem; }\n    .goodsList .goodsItem .warp[_v-4dae64da] {\n      width: 100%;\n      height: 1.05rem; }\n      .goodsList .goodsItem .warp .goodsName[_v-4dae64da] {\n        color: #797979;\n        line-height: 0.28rem;\n        height: 0.5rem;\n        display: block;\n        padding: 0.1rem;\n        overflow: hidden; }\n      .goodsList .goodsItem .warp .price[_v-4dae64da] {\n        color: #e60000;\n        float: left;\n        margin-left: 0.1rem; }\n      .goodsList .goodsItem .warp .number[_v-4dae64da] {\n        margin-right: 0.1rem;\n        float: right;\n        color: #f36f40;\n        font-size: 0.16rem; }\n        .goodsList .goodsItem .warp .number span[_v-4dae64da] {\n          color: #dedede; }\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	.goodsList{
	// 		width: 100%;
	// 		background: #f5f5f5;
	// 		padding-bottom: 0.7rem;
	// 		h3{
	// 			font-size: 0.25rem;
	// 			color: #a3a3a3;
	// 			text-align: center;
	// 			padding: 0.1rem;
	// 		}
	// 		.goodswarp{
	// 			width: 100%;
	// 			display: flex;
	// 			flex-wrap: wrap;
	// 			justify-content: space-between;
	//
	// 		}
	//
	// 		.goodsItem{
	// 			width:3rem;
	// 			height: 4.1rem;
	// 			font-size: 0.22rem;
	// 			background: #fff;
	// 			margin: 0.1rem;
	// 			img{
	// 				width:3rem;
	// 				height: 3rem;
	//
	// 			}
	// 			.warp{
	// 				width:100%;
	// 				height: 1.05rem;
	// 				.goodsName{
	// 					color: #797979;
	// 					line-height: 0.28rem;
	// 					height: 0.5rem;
	// 					display: block;
	// 					padding: 0.1rem;
	// 					overflow: hidden;
	// 				}
	// 				.price{
	// 					color: #e60000;
	// 					float: left;
	// 					margin-left: 0.1rem;
	// 				}
	// 				.number{
	// 					margin-right: 0.1rem;
	// 					float: right;
	// 					color: #f36f40;
	// 					font-size: 0.16rem;
	// 					span{
	// 						color: #dedede;
	// 					}
	// 				}
	// 			}
	//
	// 		}
	// 	}
	// </style>
	//
	// <template>
	// 	<div class="goodsList">
	// 		<h3>精品推荐</h3>
	// 		<div class="goodswarp">
	// 			<div class="goodsItem" :name="item.goodsID" v-for="item in result" @click.stop="getDetail(item.goodsID)" >
	// 				<img :src="item.goodsListImg"/>
	// 				<div class="warp">
	// 					<div class="goodsName">{{item.goodsName}}</div>
	// 					<span class="price">￥{{item.price}}.00</span>
	// 					<span class="number">{{item.discount}}<span> 折起售<span></span>
	//
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._query;
				}
			},
			actions: {
				getSearch: _action2.default.getSearch,
				getDetail: _action2.default.getDetail
			}
		},
		methods: {},
		ready: function ready() {

			this.getSearch();
		}
	};
	// </script>

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"goodsList\" _v-4dae64da=\"\">\n\t<h3 _v-4dae64da=\"\">精品推荐</h3>\n\t<div class=\"goodswarp\" _v-4dae64da=\"\">\n\t\t<div class=\"goodsItem\" :name=\"item.goodsID\" v-for=\"item in result\" @click.stop=\"getDetail(item.goodsID)\" _v-4dae64da=\"\">\n\t\t\t<img :src=\"item.goodsListImg\" _v-4dae64da=\"\">\n\t\t\t<div class=\"warp\" _v-4dae64da=\"\">\n\t\t\t\t<div class=\"goodsName\" _v-4dae64da=\"\">{{item.goodsName}}</div>\n\t\t\t\t<span class=\"price\" _v-4dae64da=\"\">￥{{item.price}}.00</span>\n\t\t\t\t<span class=\"number\" _v-4dae64da=\"\">{{item.discount}}<span _v-4dae64da=\"\"> 折起售<span _v-4dae64da=\"\"></span>\n\t\t\t\t\n\t\t\t</span></span></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n<div id=\"\">\n\t<headers></headers>\n\t<banner></banner>\n\t<goodlist></goodlist>\n\t<footers></footers>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(32)
	__vue_script__ = __webpack_require__(34)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\Shopcar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(35)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Shopcar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-77b5bb74&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./Shopcar.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-77b5bb74&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./Shopcar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "body[_v-77b5bb74] {\n  background: #f9f9f9; }\n\nheader[_v-77b5bb74] {\n  width: 100%;\n  height: 0.7rem;\n  text-align: center;\n  font-size: 0.32rem;\n  line-height: 0.7rem;\n  border-bottom: 0.02rem solid #929292;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: #f9f9f9;\n  color: #393e41;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  header span[_v-77b5bb74] {\n    padding-left: 0.8rem;\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4; }\n  header i[_v-77b5bb74] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-size: 0.32rem; }\n\nsection[_v-77b5bb74] {\n  width: 100%;\n  background: #f5f5f5;\n  margin-top: 0.7rem;\n  overflow: hidden;\n  margin-bottom: 1.7rem; }\n  section .items[_v-77b5bb74] {\n    width: 100%;\n    height: 2.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    border-bottom: 0.03rem solid #dddddd;\n    border-top: 0.02rem solid #dddddd;\n    background: #fafafa;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 0.2rem;\n    /*border-bottom:0.01rem solid #fafafa;\n\t\tborder-top:0.01rem solid #fafafa;*/ }\n    section .items .check[_v-77b5bb74] {\n      width: 0.3rem;\n      height: 0.3rem; }\n    section .items img[_v-77b5bb74] {\n      display: block;\n      width: 1.55rem;\n      height: 1.55rem;\n      border: 0.01rem solid #fafafa; }\n    section .items .concent[_v-77b5bb74] {\n      width: 3.6rem; }\n      section .items .concent .goodsName[_v-77b5bb74] {\n        font-size: 0.28rem;\n        margin-bottom: 0.2rem;\n        color: #333333; }\n      section .items .concent .bottom[_v-77b5bb74] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        font-size: 0.28rem; }\n        section .items .concent .bottom .price[_v-77b5bb74] {\n          color: #FF5053; }\n        section .items .concent .bottom .number[_v-77b5bb74] {\n          font-size: 0.24rem;\n          padding-right: 0.2rem;\n          color: #404040; }\n        section .items .concent .bottom .upnumber[_v-77b5bb74] {\n          width: 1.2rem;\n          height: 0.4rem;\n          border: 0.01rem solid #E92F33;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 0.3rem; }\n          section .items .concent .bottom .upnumber div[_v-77b5bb74] {\n            height: 0.4rem;\n            width: 0.4rem;\n            text-align: center;\n            line-height: 0.4rem; }\n\n.allchecked[_v-77b5bb74] {\n  width: 100%;\n  height: 0.8rem;\n  position: fixed;\n  left: 0;\n  bottom: 0.84rem;\n  border-bottom: 0.01rem solid #dddddd;\n  border-top: 0.02rem solid #dddddd;\n  background: #fff;\n  font-size: 0.3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .allchecked .warp1[_v-77b5bb74] {\n    margin-left: 0.15rem; }\n    .allchecked .warp1 input[_v-77b5bb74] {\n      width: 0.3rem;\n      height: 0.3rem; }\n  .allchecked .warp2[_v-77b5bb74] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 0.22rem; }\n    .allchecked .warp2 span[_v-77b5bb74] {\n      color: #fe5600; }\n    .allchecked .warp2 .clearimg[_v-77b5bb74] {\n      font-size: 0.28rem;\n      width: 1.75rem;\n      height: 100%;\n      color: #fff;\n      line-height: 0.8rem;\n      text-align: center;\n      background: #fe5600;\n      margin-left: 0.2rem; }\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	var _footer = __webpack_require__(16);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//2.组件注册
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._detail;
				},
				cart: function cart(state) {
					console.log(state._cart[0].goodsName);
					return state._cart;
				}
			},
			actions: {
				//				getDetail:Action.getDetail,
				upCart: _action2.default.upCart,
				getcart: _action2.default.getcart
			}
		},
		components: {
			'footers': _footer2.default
		},
		data: function data() {
			return {
				show: false
			};
		},

		methods: {
			setupdate: function setupdate() {
				this.show = this.show ? false : true;
			},
			add: function add(number, goodsID) {
				var self = this;
				number++;
				number = number < 1 ? 1 : number;
				console.log(number);
				var storage = window.localStorage;
				var userdata = JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				this.upCart(number, userID, goodsID, function () {

					self.getcart(userID);
				});
			},
			reduce: function reduce(number, goodsID) {
				var self = this;
				number--;
				number = number < 1 ? 1 : number;
				console.log(number);
				var storage = window.localStorage;
				var userdata = JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				this.upCart(number, userID, goodsID, function () {
					self.getcart(userID);
				});
			}
		},
		ready: function ready() {
			var storage = window.localStorage;
			var userdata = JSON.parse(storage.mlyc_user);
			console.log(userdata);
			var userID = userdata.userID;
			//			var goodsID = this.result.goodsID;
			this.getcart(userID);
		}
	};
	// </script>
	// <style scoped="scoped" lang="sass">
	// 	body{
	// 		background: #f9f9f9;
	// 	}
	// 	header{
	// 		width: 100%;
	// 		height: 0.7rem;
	// 		text-align: center;
	// 		font-size: 0.32rem;
	// 		line-height: 0.7rem;
	// 		border-bottom: 0.02rem solid #929292;
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 		background: #f9f9f9;
	// 		color:#393e41;
	// 		display: flex;
	// 		justify-content: space-around;
	// 		align-items: center;
	// 		span{
	// 		padding-left: 0.8rem;
	// 			flex: 4;
	// 		}
	// 		i{
	// 			flex: 1;
	// 			font-size: 0.32rem;
	// 		}
	//
	// 	}
	// 	section{
	// 		width: 100%;
	// 		background: #f5f5f5;
	// 		margin-top: 0.7rem;
	// 		overflow: hidden;
	// 		margin-bottom: 1.7rem;
	// 		.items{
	// 			width: 100%;
	// 			height: 2.5rem;
	// 			display: flex;
	// 			justify-content: space-around;
	// 			border-bottom: 0.03rem solid #dddddd;
	// 			border-top: 0.02rem solid #dddddd;
	// 			background: #fafafa;
	// 			align-items: center;
	// 			margin-bottom:0.2rem;
	// 			/*border-bottom:0.01rem solid #fafafa;
	// 			border-top:0.01rem solid #fafafa;*/
	//
	// 			.check{
	// 				width: 0.3rem;
	// 				height: 0.3rem;
	// 			}
	//
	// 			img{
	// 				display: block;
	// 				width: 1.55rem;
	// 				height: 1.55rem;
	// 				border:0.01rem solid #fafafa ;
	//
	// 			}
	// 			.concent{
	// 				width: 3.6rem;
	// 				.goodsName{
	// 					font-size: 0.28rem;
	// 					margin-bottom: 0.2rem;
	// 					color: #333333;
	// 				}
	// 				.bottom{
	//
	// 					display: flex;
	// 					justify-content: space-between;
	// 					align-items: center;
	// 					font-size: 0.28rem;
	// 					.price{
	// 						color: #FF5053;
	// 					}
	// 					.number{
	// 						font-size: 0.24rem;
	// 						padding-right: 0.2rem;
	// 						color: #404040;
	// 					}
	// 					.upnumber{
	// 						width: 1.2rem;
	// 						height: 0.4rem;
	// 						border: 0.01rem solid #E92F33;
	// 						display: flex;
	// 						justify-content: space-around;
	// 						align-items: center;
	// 						font-size: 0.3rem;
	// 						div{
	// 							height: 0.4rem;
	// 							width: 0.4rem;
	// 							text-align: center;
	// 							line-height: 0.4rem;
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	.allchecked{
	// 		width: 100%;
	// 		height: 0.8rem;
	// 		position: fixed;
	// 		left: 0;
	// 		bottom: 0.84rem;
	// 		border-bottom: 0.01rem solid #dddddd;
	// 		border-top: 0.02rem solid #dddddd;
	// 		background: #fff;
	// 		font-size: 0.3rem;
	// 		display: flex;
	// 		justify-content: space-between;
	// 		align-items: center;
	// 		.warp1{
	// 			margin-left: 0.15rem;
	// 			input{
	// 				width: 0.3rem;
	// 				height: 0.3rem;
	// 			}
	// 		}
	// 		.warp2{
	// 			display: flex;
	// 			justify-content: space-around;
	// 			align-items: center;
	// 			font-size: 0.22rem;
	// 			span{
	// 				color: #fe5600;
	// 			}
	// 			.clearimg{
	// 				font-size: 0.28rem;
	// 				width: 1.75rem;
	// 				height: 100%;
	// 				color: #fff;
	// 				line-height: 0.8rem;
	// 				text-align: center;
	// 				background: #fe5600;
	// 				margin-left: 0.2rem;
	// 			}
	// 		}
	// 	}
	// </style>
	// <template>
	// 	<header>
	// 		<span>购物车</span><i @click="setupdate();" class='iconfont icon-shezhi'></i>
	// 	</header>
	// 	<section>
	// 		<div class="items" v-for="item in cart">
	// 			<input class="check" type="checkbox"/></span>
	// 			<img :src="item.goodsListImg" />
	// 			<div class="concent">
	// 				<div class="goodsName">{{item.goodsName}}</div>
	// 				<div class="bottom">
	// 					<span class="price">￥{{Math.round((item.price*item.number)*100)/100}}</span><span v-if='show' class="number">&Chi; {{item.number}}</span>
	// 					<div v-if='!show' class="upnumber">
	// 						<div  @click="reduce(item.number,item.goodsID);">-</div>
	// 						<div>{{item.number}}</div>
	// 						<div  @click='add(item.number,item.goodsID);'>+</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</section>
	// 	<div class="allchecked">
	// 		<div class="warp1">
	// 			<input type="checkbox" name="" id="" value="" />
	// 			<span>全选</span>
	//
	// 		</div>
	// 		<div class="warp2">
	// 			<div>
	// 				合计：<span>￥123123</span>
	// 			</div>
	// 			<div class="clearimg">
	// 				结算()
	// 			</div>
	// 		</div>
	// 	</div>
	// 	<footers></footers>
	// </template>
	//
	// <script type="text/javascript">
	//实现组件嵌套  1.引入组件

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<header _v-77b5bb74=\"\">\n\t<span _v-77b5bb74=\"\">购物车</span><i @click=\"setupdate();\" class=\"iconfont icon-shezhi\" _v-77b5bb74=\"\"></i>\n</header>\n<section _v-77b5bb74=\"\">\n\t<div class=\"items\" v-for=\"item in cart\" _v-77b5bb74=\"\">\n\t\t<input class=\"check\" type=\"checkbox\" _v-77b5bb74=\"\">\n\t\t<img :src=\"item.goodsListImg\" _v-77b5bb74=\"\">\n\t\t<div class=\"concent\" _v-77b5bb74=\"\">\n\t\t\t<div class=\"goodsName\" _v-77b5bb74=\"\">{{item.goodsName}}</div>\n\t\t\t<div class=\"bottom\" _v-77b5bb74=\"\">\n\t\t\t\t<span class=\"price\" _v-77b5bb74=\"\">￥{{Math.round((item.price*item.number)*100)/100}}</span><span v-if=\"show\" class=\"number\" _v-77b5bb74=\"\">Χ {{item.number}}</span>\n\t\t\t\t<div v-if=\"!show\" class=\"upnumber\" _v-77b5bb74=\"\">\n\t\t\t\t\t<div @click=\"reduce(item.number,item.goodsID);\" _v-77b5bb74=\"\">-</div>\n\t\t\t\t\t<div _v-77b5bb74=\"\">{{item.number}}</div>\n\t\t\t\t\t<div @click=\"add(item.number,item.goodsID);\" _v-77b5bb74=\"\">+</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<div class=\"allchecked\" _v-77b5bb74=\"\">\n\t<div class=\"warp1\" _v-77b5bb74=\"\">\n\t\t<input type=\"checkbox\" name=\"\" id=\"\" value=\"\" _v-77b5bb74=\"\">\n\t\t<span _v-77b5bb74=\"\">全选</span>\n\t\t\n\t</div>\n\t<div class=\"warp2\" _v-77b5bb74=\"\">\n\t\t<div _v-77b5bb74=\"\">\n\t\t\t合计：<span _v-77b5bb74=\"\">￥123123</span>\n\t\t</div>\n\t\t<div class=\"clearimg\" _v-77b5bb74=\"\">\n\t\t\t结算()\n\t\t</div>\n\t</div>\n</div>\n<footers _v-77b5bb74=\"\"></footers>\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(37)
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\My.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./My.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./My.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./My.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.my{\n\twidth: 100%;\n\theight: 200px;\n\tline-height: 200px;\n\tfont-size: 28px;\n\tbackground-color: #FF0000;\n\tcolor: #FFFFFF;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(40);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(16);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//2.组件注册
	// <style>
	// 	.my{
	// 		width: 100%;
	// 		height: 200px;
	// 		line-height: 200px;
	// 		font-size: 28px;
	// 		background-color: #FF0000;
	// 		color: #FFFFFF;
	// 	}
	// </style>0
	// <template>
	// 	<my-headers></my-headers>
	// 	<footers></footers>
	// </template>
	//
	// <script type="text/javascript">
	//实现组件嵌套  1.引入组件
	exports.default = {
		components: {
			'my-headers': _header2.default,
			'footers': _footer2.default
		}
	};
	// </script>

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\my\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-167c0031&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-167c0031&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "header[_v-167c0031] {\n  width: 100%;\n  height: 2.5rem;\n  background: #F66993;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  header .img-warp[_v-167c0031] {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n    border: 1px solid #DD524D;\n    box-shadow: #EAFFEA;\n    overflow: hidden; }\n    header .img-warp img[_v-167c0031] {\n      width: 100%;\n      height: 100%; }\n  header .warp[_v-167c0031] {\n    width: 2.6rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 0.32rem;\n    color: #fff; }\n    header .warp a[_v-167c0031] {\n      display: block;\n      /*\t\t\t\tbackground: #E60000;*/\n      color: #fff;\n      border-radius: 0.05rem;\n      text-align: center;\n      line-height: 0.56rem;\n      height: 0.56rem;\n      width: 0.8rem;\n      font-size: 0.26rem;\n      /*border: 1px solid #E92F33;*/ }\n", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	header{
	// 		width: 100%;
	// 		height: 2.5rem;
	// 		background: #F66993;
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: space-around;
	// 		align-items: center;
	// 		.img-warp{
	// 			width: 1rem;
	// 			height: 1rem;
	// 			border-radius: 0.5rem;
	// 			border: 1px solid #DD524D;
	// 			box-shadow: #EAFFEA;
	// 			overflow:hidden;
	// 			img{
	// 				width: 100%;
	// 				height: 100%;
	//
	// 			}
	// 		}
	// 		.warp{
	// 			width: 2.6rem;
	//
	// 			display: flex;
	// 			justify-content: space-between;
	// 			font-size: 0.32rem;
	// 			color :#fff;
	// 			a{
	// 				display: block;
	// /*				background: #E60000;*/
	// 				color: #fff;
	// 				border-radius:0.05rem ;
	// 				text-align: center;
	// 				line-height: 0.56rem;
	// 				height: 0.56rem;
	// 				width: 0.8rem;
	// 				font-size: 0.26rem;
	// 				/*border: 1px solid #E92F33;*/
	// 			}
	// 		}
	// 	}
	// </style>
	// <template>
	// 	<header>
	// 		<div class="img-warp">
	// 			<img v-show="userimg_url" :src="userimg_url"/>{{user}}
	// 		</div>
	// 		<div class="warp" v-show="!userID">
	// 			<a v-link="{path:'/login'}">登录</a>
	// 			<a v-link="{path:'/register'}">注册</a>
	// 		</div>
	// 		<div class="warp" v-show="userID">
	// 			欢迎 :{{userID}} 
	// 		</div>
	//
	// 	</header>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {},
			actions: {}
		},
		data: function data() {
			return {
				userID: '',
				userimg_url: ''
			};
		},
		methods: function methods() {},
		ready: function ready() {
			var storage = window.localStorage;
			var data = JSON.parse(storage.mlyc_user);
			//			if(storage.mlyc_userID){
			//				this.userID = storage.mlyc_userID;
			//				this.userimg_url = storage.mlyc_userimg_url;
			//			}

			if (storage.mlyc_user) {
				this.userID = data.userID;
				this.userimg_url = data.userimg_url;
			}
		}
	};
	// </script>

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<header _v-167c0031=\"\">\n\t<div class=\"img-warp\" _v-167c0031=\"\">\n\t\t<img v-show=\"userimg_url\" :src=\"userimg_url\" _v-167c0031=\"\">{{user}}\n\t</div>\n\t<div class=\"warp\" v-show=\"!userID\" _v-167c0031=\"\">\n\t\t<a v-link=\"{path:'/login'}\" _v-167c0031=\"\">登录</a>\n\t\t<a v-link=\"{path:'/register'}\" _v-167c0031=\"\">注册</a>\n\t</div>\n\t<div class=\"warp\" v-show=\"userID\" _v-167c0031=\"\">\n\t\t欢迎 :{{userID}} \n\t</div>\n\t\n</header>\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<my-headers></my-headers>\n<footers></footers>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(47)
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./test.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./test.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./test.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.text{\n\twidth: 100%;\n\t\n}\n.text>div{\n\twidth: 100%;\n\theight: 50px;\n\toverflow:hidden;\n\tbackground-color:#f5f5f5;\n\ttext-align: center;\n\tline-height: 50px;\n\tborder-bottom:1px solid #acacac;\n}\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"text\">\n\tthis is child page of shop\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\Classify.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Classify.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./Classify.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./Classify.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.shop{\n\twidth: 100%;\n\theight: 200px;\n\tline-height: 200px;\n\tfont-size: 28px;\n\tbackground-color: #0087bc;\n\tcolor: #FFFFFF;\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(54);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(16);

	var _footer2 = _interopRequireDefault(_footer);

	var _classifyList = __webpack_require__(59);

	var _classifyList2 = _interopRequireDefault(_classifyList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//2.组件注册
	exports.default = {
		components: {
			'my-headers': _header2.default,
			'footers': _footer2.default,
			'classifylist': _classifyList2.default
		},
		data: function data() {
			return {
				message: ''
			};
		},
		ready: function ready() {}
	};
	// </script>
	// <style>
	// 	.shop{
	// 		width: 100%;
	// 		height: 200px;
	// 		line-height: 200px;
	// 		font-size: 28px;
	// 		background-color: #0087bc;
	// 		color: #FFFFFF;
	// 	}
	// </style>
	// <template>
	// 	<my-headers></my-headers>
	// 	<classifylist></classifylist>
	// 	<footers></footers>
	// </template>
	//
	// <script type="text/javascript">
	//实现组件嵌套  1.引入组件

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(55)
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\classify\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-2e91c759&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-2e91c759&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".header[_v-2e91c759] {\n  width: 100%;\n  background-color: #f6f5f3;\n  height: 0.7rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #f6f5f3;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  border-bottom: 2px solid #d8d7d2; }\n  .header .search[_v-2e91c759] {\n    width: 6.1rem;\n    height: 0.5rem;\n    background-color: #fff;\n    font-size: 0.32rem;\n    color: #fefefe;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 0.7rem;\n    border: 1px solid #e7e7e5; }\n    .header .search input[_v-2e91c759] {\n      font-size: 0.24rem;\n      color: #d9d9d9;\n      border: none;\n      outline: none;\n      width: 5rem;\n      height: 0.5rem;\n      line-height: 0.5rem;\n      background-color: #fff; }\n  .header .iconfont[_v-2e91c759] {\n    font-size: 0.38rem;\n    color: #f96593; }\n", ""]);

	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	.header{
	// 		width: 100%;
	// 		background-color: #f6f5f3;
	// 		height:0.7rem;overflow: hidden;
	// 		display: flex;
	// 		justify-content: space-around;
	// 		align-items: center;
	// 		color: #f6f5f3;
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 		z-index: 2;
	// 		border-bottom: 2px solid #d8d7d2;
	// 		.search{
	// 			width: 6.1rem;
	// 			height: 0.5rem;
	// 			background-color: #fff;
	// 			font-size: 0.32rem;
	// 			color: #fefefe;
	// 			display: flex;
	// 			justify-content: space-around;
	// 			align-items: center;
	// 			border-radius: 0.7rem;
	// 			border:1px solid #e7e7e5;
	//
	// 			input{
	// 				font-size:0.24rem;
	// 				color: #d9d9d9;
	// 				border: none;
	// 				outline: none;
	// 				width: 5rem;
	// 				height: 0.5rem;
	// 				line-height: 0.5rem;
	// 				background-color: #fff;
	// 			}
	//
	// 		}
	// 		.iconfont{
	// 			font-size: 0.38rem;
	// 			color: #f96593;
	// 		}
	// 	}
	// </style>
	// <template>
	//    <div class="header">
	//         <div class="search">
	//         	<div class="iconfont icon-sousuokuangsousuo" @click="updateMessage"></div>
	//         	<input type="text" v-model="inputValue" placeholder="搜索"/>
	//         </div>
	//    </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {},
			actions: {
				updateMessage: _action2.default.getSearch
			},
			data: function data() {
				return {
					inputValue: ""
				};
			},
			ready: function ready() {
				_action2.default.updateMessage();
			}
		}

	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"header\" _v-2e91c759=\"\">\n     <div class=\"search\" _v-2e91c759=\"\">\n     \t<div class=\"iconfont icon-sousuokuangsousuo\" @click=\"updateMessage\" _v-2e91c759=\"\"></div>\n     \t<input type=\"text\" v-model=\"inputValue\" placeholder=\"搜索\" _v-2e91c759=\"\">\n     </div>\n</div>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(60)
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\classify\\classifyList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-0eed6ee4&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./classifyList.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-0eed6ee4&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./classifyList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".classify[_v-0eed6ee4] {\n  width: 100%;\n  height: 100%;\n  margin-top: 0.7rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .classify nav[_v-0eed6ee4] {\n    height: 9.9rem;\n    width: 1.5rem;\n    position: fixed;\n    background-color: #f9f9f9;\n    border-right: 1px solid #e3e3e3; }\n    .classify nav ul[_v-0eed6ee4] {\n      width: 100%;\n      height: 100%; }\n      .classify nav ul li[_v-0eed6ee4] {\n        width: 100%;\n        height: 0.75rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .classify nav ul li div[_v-0eed6ee4] {\n          text-align: center;\n          box-sizing: border-box;\n          font-size: 0.26rem;\n          color: #6e6e6e;\n          width: 1.5rem;\n          height: 0.5rem;\n          line-height: 0.5rem; }\n        .classify nav ul li[_v-0eed6ee4]:hover {\n          border-left: 0.01rem solid #fff;\n          background: #fff; }\n          .classify nav ul li:hover div[_v-0eed6ee4] {\n            color: #e92f33;\n            border-left: 0.05rem solid #f66993; }\n  .classify section[_v-0eed6ee4] {\n    width: 4.89rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-left: 1.5rem;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    height: 3rem; }\n    .classify section .warp[_v-0eed6ee4] {\n      width: 1.32rem;\n      height: 2.1rem; }\n      .classify section .warp img[_v-0eed6ee4] {\n        border: 0.01rem solid #e3e3e3;\n        width: 1.3rem;\n        height: 1.5rem; }\n      .classify section .warp div[_v-0eed6ee4] {\n        overflow: hidden;\n        font-size: 0.22rem;\n        text-align: center;\n        white-space: nowrap; }\n", ""]);

	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	.classify{
	// 		width: 100%;
	// 		height: 100%;
	// 		margin-top: 0.7rem;
	// 		display: flex;
	// 		nav{
	// 			height: 9.9rem;
	// 			width: 1.5rem;
	// 			position:fixed;
	// 			background-color:#f9f9f9;
	// 			border-right: 1px solid #e3e3e3;
	// 			ul{
	// 				width: 100%;
	// 				height: 100%;
	// 				li{
	// 					width: 100%;
	// 					height: 0.75rem;
	// 					display: flex;
	// 					align-items: center;
	// 					div{
	// 						text-align: center;
	// 						box-sizing: border-box;
	// 						font-size: 0.26rem;
	// 						color: #6e6e6e;
	// 						width: 1.5rem;
	// 						height: 0.5rem;
	// 						line-height: 0.5rem;
	//
	// 					}
	// 					&:hover{
	// 						border-left: 0.01rem solid #fff;	
	// 						background: #fff;
	// 						div{
	// 							color: #e92f33;
	// 							border-left: 0.05rem solid #f66993;	
	// 						}					
	// 					}
	// 				}
	// 			}
	// 		}
	// 		section{
	// 			width: 4.89rem;
	// 			display: flex;
	// 			flex-wrap: wrap;
	// 			margin-left: 1.5rem;
	// 			justify-content: space-around;
	// 			height: 3rem;
	// 			.warp{
	// 				width: 1.32rem;
	// 				height: 2.1rem;
	// 				img{
	// 					border: 0.01rem solid #e3e3e3;
	// 					width: 1.3rem;
	// 					height: 1.5rem;
	// 				}
	// 				div{
	// 					overflow: hidden;
	// 					font-size: 0.22rem;
	// 					text-align: center;
	// 					white-space: nowrap;
	// 				}
	// 			}
	// 		} 
	// 	}
	// </style>
	//
	// <template>
	// 	<div class="classify">
	// 		<nav>
	// 			<ul>
	// 				<li v-bind:name="item.className"  @click.stop="selectClass($event)" v-for="item in result">
	// 					<div id="$index" v-bind:name="item.className">{{item.className}}</div>
	// 				</li>
	// 			</ul>
	// 		</nav>
	// 		<section>
	// 			<div class="warp" v-for="item in goodsList">
	// 				<img :src="item.goodsListImg" />
	// 				<div>{{item.goodsName}}</div>
	// 			</div>
	// 		</section>
	//
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._classify;
				},
				goodsList: function goodsList(state) {
					return state._query;
				}
			},
			actions: {
				getClassify: _action2.default.getClassify,
				selectClass: _action2.default.getSearch
			}
		},
		data: function data() {
			return {
				mes: ''
			};
		},

		//		methods:{
		//			selectClassName(event){ 
		//				var _div = event.target;
		//				var _text = event.target.getAttribute('name');
		//				console.log(event);
		//				console.log(_text)
		//				Action.getSearch(_text);
		//			}
		//		},
		ready: function ready() {
			this.getClassify();
		}
	};
	// </script>

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"classify\" _v-0eed6ee4=\"\">\n\t<nav _v-0eed6ee4=\"\">\n\t\t<ul _v-0eed6ee4=\"\">\n\t\t\t<li v-bind:name=\"item.className\" @click.stop=\"selectClass($event)\" v-for=\"item in result\" _v-0eed6ee4=\"\">\n\t\t\t\t<div id=\"$index\" v-bind:name=\"item.className\" _v-0eed6ee4=\"\">{{item.className}}</div>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n\t<section _v-0eed6ee4=\"\">\n\t\t<div class=\"warp\" v-for=\"item in goodsList\" _v-0eed6ee4=\"\">\n\t\t\t<img :src=\"item.goodsListImg\" _v-0eed6ee4=\"\">\n\t\t\t<div _v-0eed6ee4=\"\">{{item.goodsName}}</div>\n\t\t</div>\n\t</section>\n\t\n</div>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<my-headers></my-headers>\n<classifylist></classifylist>\n<footers></footers>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(68)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-78c720dd&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./login.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-78c720dd&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./login.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".bodyc[_v-78c720dd] {\n  width: 100%;\n  height: 11.35rem;\n  background: #f5f5f5; }\n\nheader[_v-78c720dd] {\n  width: 100%;\n  height: 0.65rem;\n  border-bottom: 0.01rem solid #dedede;\n  background: #f5f5f5;\n  text-align: center;\n  font-size: 0.38rem;\n  line-height: 0.65rem;\n  color: #747474; }\n\nsection[_v-78c720dd] {\n  padding-top: 0.3rem;\n  width: 100%;\n  font-size: 0.28rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #f5f5f5; }\n  section .input-warp[_v-78c720dd] {\n    width: 5.7rem;\n    height: 0.64rem;\n    border: 0.01rem solid #dfdfdf;\n    background: #f0f0f0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 0.3rem; }\n    section .input-warp i[_v-78c720dd] {\n      color: #F66993; }\n    section .input-warp input[_v-78c720dd] {\n      border: none;\n      outline: none;\n      width: 5rem;\n      background: #f0f0f0; }\n  section .loginBtn[_v-78c720dd] {\n    width: 5.7rem;\n    color: #fff;\n    background: #f10d0c;\n    border: 1px solid #f10d0c;\n    border-radius: 0.05rem;\n    text-align: center;\n    height: 0.6rem;\n    margin-bottom: 0.25rem; }\n  section .nuwUser[_v-78c720dd] {\n    width: 5.7rem;\n    color: #f10d0c;\n    background: #eeeeee;\n    border: 1px solid #d4d4d4;\n    border-radius: 0.05rem;\n    text-align: center;\n    height: 0.6rem;\n    outline: none; }\n  section .line-y[_v-78c720dd] {\n    border-left: 0.01rem dashed #6D6D72;\n    height: 0.32rem; }\n", ""]);

	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _back = __webpack_require__(69);

	var _back2 = _interopRequireDefault(_back);

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		store: _store2.default,
		components: {
			'my-back': _back2.default
		},
		vuex: {
			getters: {},
			actions: {
				login: _action2.default.login
			}
		},

		data: function data() {
			return {
				userID: '',
				password: ''
			};
		},

		methods: {
			register: function register() {
				this.$route.router.go({ path: '/register' });
			}
		}

	};
	// </script>
	// <style scoped="scoped" lang="sass">
	// 	.bodyc{
	// 		width: 100%;
	// 		height: 11.35rem;
	// 		background: #f5f5f5;
	//
	// 	}
	// 	header{
	// 		width: 100%;
	// 		height: 0.65rem;
	// 		border-bottom: 0.01rem solid #dedede;
	// 		background: #f5f5f5;
	// 		text-align: center;
	// 		font-size: 0.38rem;
	// 		line-height: 0.65rem;
	// 		color: #747474;
	//
	// 	}
	// 	section{
	// 		padding-top: 0.3rem;
	// 		width: 100%;
	// 		font-size: 0.28rem;
	// 		display: flex;
	// 		flex-direction: column;
	// 		align-items: center;
	// 		background: #f5f5f5;
	// 		.input-warp{
	// 			width: 5.7rem;
	// 			height: 0.64rem;
	// 			border: 0.01rem solid #dfdfdf;
	// 			background: #f0f0f0;
	// 			display: flex;
	// 			align-items: center;
	// 			justify-content: space-around;
	// 			margin-bottom: 0.3rem;
	// 			i{
	// 				color: #F66993;
	// 			}
	// 			input{
	// 				border: none;
	// 				outline: none;
	// 				width: 5rem;
	// 				background: #f0f0f0;
	//
	// 			}
	// 		}
	// 		.loginBtn{
	// 			width: 5.7rem;
	// 			color: #fff;
	// 			background: #f10d0c;
	// 			border: 1px solid #f10d0c;
	// 			border-radius: 0.05rem;
	// 			text-align: center;
	// 			height: 0.6rem;
	// 			margin-bottom: 0.25rem;
	// 		}
	// 		.nuwUser{
	// 			width: 5.7rem;
	// 			color: #f10d0c;
	// 			background: #eeeeee;
	// 			border: 1px solid #d4d4d4;
	// 			border-radius: 0.05rem;
	// 			text-align: center;
	// 			height: 0.6rem;
	// 			outline: none;
	// 		}
	// 		.line-y{
	// 			border-left: 0.01rem dashed #6D6D72;
	// 			height: 0.32rem;
	// 		}
	// 	}
	// </style>
	// <template>
	// 		<div class="bodyc">
	// 			<header>
	// 			<my-back></my-back>
	// 			登录
	//
	// 		</header>
	// 		<section>
	// 			<div class="input-warp">
	// 				<i class="iconfont icon-user"></i>
	// 				<div class="line-y"></div>
	// 				<input type="text" v-model="userID" placeholder="手机号"/>
	// 			</div>
	// 			<div class="input-warp">
	// 				<i class="iconfont icon-xianshimima"></i>
	// 				<div class="line-y"></div>
	// 				<input type="password" v-model="password" placeholder="密码"/>
	// 			</div>
	// 			<button class="loginBtn" @click="login">登录</button>
	// 			<button class="nuwUser" @click="register">新用户注册</button>
	// 		</section>
	// 	</div>
	//
	//
	// </template>
	// <script type="text/javascript">

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(70)
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./back.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./back.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./back.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n.backicon{\n\tposition: absolute;\n\tleft:0.3rem;\n\tfont-size: 0.38rem;\n\tcolor: #a7a8a3;\n}\n", ""]);

	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n<a class=\"backicon\" href=\"javascript:void(history.back());\">\n\t<i class=\"iconfont icon-jiantouyoujiantou1\"></i>\n</a>\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t<div class=\"bodyc\" _v-78c720dd=\"\">\n\t\t<header _v-78c720dd=\"\">\n\t\t<my-back _v-78c720dd=\"\"></my-back>\n\t\t登录\n\t\t\n\t</header>\n\t<section _v-78c720dd=\"\">\n\t\t<div class=\"input-warp\" _v-78c720dd=\"\">\n\t\t\t<i class=\"iconfont icon-user\" _v-78c720dd=\"\"></i>\n\t\t\t<div class=\"line-y\" _v-78c720dd=\"\"></div>\n\t\t\t<input type=\"text\" v-model=\"userID\" placeholder=\"手机号\" _v-78c720dd=\"\">\n\t\t</div>\n\t\t<div class=\"input-warp\" _v-78c720dd=\"\">\n\t\t\t<i class=\"iconfont icon-xianshimima\" _v-78c720dd=\"\"></i>\n\t\t\t<div class=\"line-y\" _v-78c720dd=\"\"></div>\n\t\t\t<input type=\"password\" v-model=\"password\" placeholder=\"密码\" _v-78c720dd=\"\">\n\t\t</div>\n\t\t<button class=\"loginBtn\" @click=\"login\" _v-78c720dd=\"\">登录</button>\n\t\t<button class=\"nuwUser\" @click=\"register\" _v-78c720dd=\"\">新用户注册</button>\n\t</section>\n</div>\n\n\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(75)
	__vue_script__ = __webpack_require__(77)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-69cb2242&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./register.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-69cb2242&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./register.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".bodyc[_v-69cb2242] {\n  width: 100%;\n  height: 11.35rem;\n  background: #f5f5f5; }\n\nheader[_v-69cb2242] {\n  width: 100%;\n  height: 0.65rem;\n  border-bottom: 0.01rem solid #dedede;\n  background: #f5f5f5;\n  text-align: center;\n  font-size: 0.38rem;\n  line-height: 0.65rem;\n  color: #747474; }\n\nsection[_v-69cb2242] {\n  padding-top: 0.3rem;\n  width: 100%;\n  font-size: 0.28rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #f5f5f5; }\n  section .input-warp[_v-69cb2242] {\n    width: 5.7rem;\n    height: 0.64rem;\n    border: 0.01rem solid #dfdfdf;\n    background: #f0f0f0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 0.3rem; }\n    section .input-warp i[_v-69cb2242] {\n      color: #F66993; }\n    section .input-warp input[_v-69cb2242] {\n      border: none;\n      outline: none;\n      width: 5rem;\n      background: #f0f0f0; }\n  section .loginBtn[_v-69cb2242] {\n    width: 5.7rem;\n    color: #fff;\n    background: #f10d0c;\n    border: 1px solid #f10d0c;\n    border-radius: 0.05rem;\n    text-align: center;\n    height: 0.6rem;\n    margin-bottom: 0.25rem; }\n  section .nuwUser[_v-69cb2242] {\n    width: 5.7rem;\n    color: #f10d0c;\n    background: #eeeeee;\n    border: 1px solid #d4d4d4;\n    border-radius: 0.05rem;\n    text-align: center;\n    height: 0.6rem;\n    outline: none; }\n  section .line-y[_v-69cb2242] {\n    border-left: 0.01rem dashed #6D6D72;\n    height: 0.32rem; }\n", ""]);

	// exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _back = __webpack_require__(69);

	var _back2 = _interopRequireDefault(_back);

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//	import Alert from '../vux/src/components/alert'
	exports.default = {
		store: _store2.default,
		components: {
			'my-back': _back2.default
		},
		vuex: {
			getters: {},
			actions: {
				register: _action2.default.register
			}
		},

		data: function data() {
			return {
				userID: '',
				password: '',
				password2: ''
			};
		}
	};
	// </script>
	// <style scoped="scoped" lang="sass">
	// 	.bodyc{
	// 		width: 100%;
	// 		height: 11.35rem;
	// 		background: #f5f5f5;
	//
	// 	}
	// 	header{
	// 		width: 100%;
	// 		height: 0.65rem;
	// 		border-bottom: 0.01rem solid #dedede;
	// 		background: #f5f5f5;
	// 		text-align: center;
	// 		font-size: 0.38rem;
	// 		line-height: 0.65rem;
	// 		color: #747474;
	//
	// 	}
	// 	section{
	// 		padding-top: 0.3rem;
	// 		width: 100%;
	// 		font-size: 0.28rem;
	// 		display: flex;
	// 		flex-direction: column;
	// 		align-items: center;
	// 		background: #f5f5f5;
	// 		.input-warp{
	// 			width: 5.7rem;
	// 			height: 0.64rem;
	// 			border: 0.01rem solid #dfdfdf;
	// 			background: #f0f0f0;
	// 			display: flex;
	// 			align-items: center;
	// 			justify-content: space-around;
	// 			margin-bottom: 0.3rem;
	// 			i{
	// 				color: #F66993;
	// 			}
	// 			input{
	// 				border: none;
	// 				outline: none;
	// 				width: 5rem;
	// 				background: #f0f0f0;
	//
	// 			}
	// 		}
	// 		.loginBtn{
	// 			width: 5.7rem;
	// 			color: #fff;
	// 			background: #f10d0c;
	// 			border: 1px solid #f10d0c;
	// 			border-radius: 0.05rem;
	// 			text-align: center;
	// 			height: 0.6rem;
	// 			margin-bottom: 0.25rem;
	// 		}
	// 		.nuwUser{
	// 			width: 5.7rem;
	// 			color: #f10d0c;
	// 			background: #eeeeee;
	// 			border: 1px solid #d4d4d4;
	// 			border-radius: 0.05rem;
	// 			text-align: center;
	// 			height: 0.6rem;
	// 			outline: none;
	// 		}
	// 		.line-y{
	// 			border-left: 0.01rem dashed #6D6D72;
	// 			height: 0.32rem;
	// 		}
	// 	}
	// </style>
	// <template>
	// 		<div class="bodyc">
	// 			<header>
	// 			<my-back></my-back>
	// 			注册
	//
	// 		</header>
	// 		<section>
	// 			<div class="input-warp">
	// 				<i class="iconfont icon-user"></i>
	// 				<div class="line-y"></div>
	// 				<input type="text" v-model="userID" placeholder="手机号"/>
	// 			</div>
	// 			<div class="input-warp">
	// 				<i class="iconfont icon-xianshimima"></i>
	// 				<div class="line-y"></div>
	// 				<input type="password" v-model="password" placeholder="密码"/>
	// 			</div>
	// 			<div class="input-warp">
	// 				<i class="iconfont icon-xianshimima"></i>
	// 				<div class="line-y"></div>
	// 				<input type="password" v-model="password2" placeholder="确认密码"/>
	// 			</div>
	// 			<button class="loginBtn" @click="register">注册</button>
	// 		</section>
	// 	</div>
	//
	//
	// </template>
	// <script type="text/javascript">

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t<div class=\"bodyc\" _v-69cb2242=\"\">\n\t\t<header _v-69cb2242=\"\">\n\t\t<my-back _v-69cb2242=\"\"></my-back>\n\t\t注册\n\t\t\n\t</header>\n\t<section _v-69cb2242=\"\">\n\t\t<div class=\"input-warp\" _v-69cb2242=\"\">\n\t\t\t<i class=\"iconfont icon-user\" _v-69cb2242=\"\"></i>\n\t\t\t<div class=\"line-y\" _v-69cb2242=\"\"></div>\n\t\t\t<input type=\"text\" v-model=\"userID\" placeholder=\"手机号\" _v-69cb2242=\"\">\n\t\t</div>\n\t\t<div class=\"input-warp\" _v-69cb2242=\"\">\n\t\t\t<i class=\"iconfont icon-xianshimima\" _v-69cb2242=\"\"></i>\n\t\t\t<div class=\"line-y\" _v-69cb2242=\"\"></div>\n\t\t\t<input type=\"password\" v-model=\"password\" placeholder=\"密码\" _v-69cb2242=\"\">\n\t\t</div>\n\t\t<div class=\"input-warp\" _v-69cb2242=\"\">\n\t\t\t<i class=\"iconfont icon-xianshimima\" _v-69cb2242=\"\"></i>\n\t\t\t<div class=\"line-y\" _v-69cb2242=\"\"></div>\n\t\t\t<input type=\"password\" v-model=\"password2\" placeholder=\"确认密码\" _v-69cb2242=\"\">\n\t\t</div>\n\t\t<button class=\"loginBtn\" @click=\"register\" _v-69cb2242=\"\">注册</button>\n\t</section>\n</div>\n\n\n";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(80)
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\goods.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(103)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./goods.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./goods.vue", function() {
				var newContent = require("!!./../node_modules/.0.26.0@css-loader/index.js!./../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./goods.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(83);

	var _header2 = _interopRequireDefault(_header);

	var _banner = __webpack_require__(88);

	var _banner2 = _interopRequireDefault(_banner);

	var _section = __webpack_require__(93);

	var _section2 = _interopRequireDefault(_section);

	var _footer = __webpack_require__(98);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style>
	//
	// </style>
	// <template>
	// 	<my-header></my-header>
	// 	<my-banner></my-banner>
	// 	<my-section></my-section>
	// 	<my-footer></my-footer>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		components: {
			"my-header": _header2.default,
			'my-banner': _banner2.default,
			'my-section': _section2.default,
			'my-footer': _footer2.default
		}
	};
	// </script>

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(84)
	__vue_script__ = __webpack_require__(86)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\goods\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(87)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-3f44c00f&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-3f44c00f&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nheader[_v-3f44c00f] {\n  background: #dd4506;\n  text-align: center;\n  height: 0.64rem;\n  width: 100%;\n  line-height: 0.64rem;\n  font-size: 0.32rem;\n  color: #F5F5F5;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  position: fixed;\n  left: 0;\n  top: 0; }\n", ""]);

	// exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _back = __webpack_require__(69);

	var _back2 = _interopRequireDefault(_back);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			"backicon": _back2.default
		}
	};
	// </script>
	// <style scoped="scoped" lang="sass">
	// 	header{
	// 		background: #dd4506;
	// 		text-align: center;
	// 		height: 0.64rem;
	// 		width: 100%;
	// 		line-height: 0.64rem;
	// 		font-size: 0.32rem;
	// 		color: #F5F5F5;
	// 		font-family: "微软雅黑";
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 	}
	// </style>
	// <template>
	// 	<header>
	// 		<backicon></backicon>
	// 		商品介绍
	// 	</header>
	//
	// </template>
	// <script type="text/javascript">

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<header _v-3f44c00f=\"\">\n\t<backicon _v-3f44c00f=\"\"></backicon>\n\t商品介绍\n</header>\n\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\goods\\banner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(92)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./banner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-e83015a4&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./banner.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-e83015a4&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./banner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "#banner[_v-e83015a4] {\n  margin-top: 0.64rem;\n  width: 100%;\n  height: 4.5rem;\n  overflow: hidden; }\n  #banner .swiper-wrapper[_v-e83015a4] {\n    width: 6.4rem;\n    height: 4.5rem; }\n", ""]);

	// exports


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang="sass" scoped="scoped">
	// 	#banner{
	// 		margin-top:0.64rem ;	
	// 		width: 100%;
	// 		height: 4.5rem;
	// 		overflow: hidden;
	// 		.swiper-wrapper{
	// 			width: 6.4rem;
	// 			height: 4.5rem;
	// 		}
	// 	}
	// </style>
	//
	// <template>
	// 	<div id="banner">
	// 		<div class="swiper-container">
	// 			<div class="swiper-wrapper">
	// 				<div v-for="item in result" class="swiper-slide">
	// 					<img :src='item' />
	// 				</div>
	// 			</div>
	// 			<div class="swiper-pagination"></div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._detail.goodsBenUrl;
				}
			},
			actions: {
				getDetail: _action2.default.getDetail
			}
		},
		ready: function ready() {
			this.getDetail(this.$route.query.goodsID);

			setTimeout(function () {
				var myswiper = new Swiper('.swiper-container', {
					autoplay: 1500,
					loop: true,
					autoplayDisableOnInteraction: false,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}, 1000);
		}
	};
	// </script>

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"banner\" _v-e83015a4=\"\">\n\t<div class=\"swiper-container\" _v-e83015a4=\"\">\n\t\t<div class=\"swiper-wrapper\" _v-e83015a4=\"\">\n\t\t\t<div v-for=\"item in result\" class=\"swiper-slide\" _v-e83015a4=\"\">\n\t\t\t\t<img :src=\"item\" _v-e83015a4=\"\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"swiper-pagination\" _v-e83015a4=\"\"></div>\n\t</div>\n</div>\n";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(96)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\goods\\section.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./section.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-f0bbaa5a&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./section.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-f0bbaa5a&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./section.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "section[_v-f0bbaa5a] {\n  width: 100%; }\n  section .goodsTop[_v-f0bbaa5a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 0.2rem; }\n    section .goodsTop .goodsName[_v-f0bbaa5a] {\n      font-size: 0.24rem;\n      width: 5.15rem; }\n    section .goodsTop .goodsShare[_v-f0bbaa5a] {\n      font-size: 0.22rem; }\n  section .priceWap[_v-f0bbaa5a] {\n    font-size: 0.2rem;\n    color: #ff4900;\n    padding: 0.2rem; }\n    section .priceWap .price[_v-f0bbaa5a] {\n      font-size: 0.3rem; }\n    section .priceWap .cuxiao[_v-f0bbaa5a] {\n      border: 0.01rem solid #ff4900;\n      border-bottom: 0.05rem;\n      font-size: 0.14rem;\n      padding: 0.01rem; }\n  section .kuaidi[_v-f0bbaa5a] {\n    padding: 0.2rem;\n    font-size: 0.20rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #9A9A9A;\n    border-bottom: 0.01rem solid #D9D9D9; }\n  section .detail[_v-f0bbaa5a] {\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0.2rem;\n    font-size: 0.2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    section .detail img[_v-f0bbaa5a] {\n      width: 1.2rem;\n      height: 1.6rem; }\n    section .detail details[_v-f0bbaa5a] {\n      width: 4.6rem;\n      outline: none; }\n", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang="sass" scoped="scoped">
	// 	section{
	// 		width: 100%;
	// 		.goodsTop{
	// 			display: flex;
	// 			justify-content: space-around;
	// 			padding: 0.2rem;
	// 			.goodsName{
	// 				font-size: 0.24rem;
	// 				width: 5.15rem;
	// 			}	
	// 			.goodsShare{
	// 				font-size: 0.22rem;
	// 			}
	// 		}
	// 		.priceWap{
	// 			font-size: 0.2rem;
	// 			color: #ff4900;
	// 			padding: 0.2rem;
	// 			.price{
	// 				font-size: 0.3rem;
	// 			}
	// 			.cuxiao{
	// 				border: 0.01rem solid #ff4900;
	// 				border-bottom: 0.05rem;
	// 				font-size: 0.14rem;
	// 				padding: 0.01rem;
	// 			}
	// 		}
	// 		.kuaidi{
	// 			padding: 0.2rem;
	// 			font-size: 0.20rem;
	// 			display: flex;
	// 			justify-content: space-between;
	// 			color: #9A9A9A;
	// 			border-bottom: 0.01rem solid #D9D9D9;
	// 		}
	// 		.detail{
	// 			box-sizing: border-box;
	// 			width: 100%;
	// 			padding: 0.2rem;
	// 			font-size: 0.2rem;
	// 			display: flex;
	// 			justify-content: space-between;
	// 			img{
	// 				width: 1.2rem;
	// 				height: 1.6rem;
	// 			}
	// 			details{
	// 				width: 4.6rem;
	// 				outline: none;
	//
	// 			}
	// 		}
	// 	}
	// </style>
	//
	// <template>
	// 	<section>
	// 		<div class="goodsTop">
	// 			<div class="goodsName">{{result.goodsName}}</div>
	// 			<div class="goodsShare">
	// 				<i class="iconfont icon-fenxiang"></i>
	// 				<div>分享</div>
	// 			</div>
	// 		</div>
	// 		<div class="priceWap">
	// 			￥ <span class="price">{{result.price}} </span><span class="cuxiao"> 优惠促销 </span>
	// 		</div>
	// 		<div class="kuaidi">
	// 			<span>快递：免运费</span>
	// 			<span>月销{{result.buynumber}}笔</span>
	// 			<span>浙江杭州</span>
	// 		</div>
	// 		<div class="detail">
	// 			<img :src="result.goodsListImg"/>
	// 			<div>
	// 				<span>商品描述:</span>
	// 				<details>
	// 					{{result.detail}}
	// 				</details>
	// 			</div>
	// 		</div>
	// 	</section>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					console.log(state._detail);
					return state._detail;
				}
			},
			actions: {
				getDetail: _action2.default.getDetail
			}
		},
		ready: function ready() {}
	};
	// </script>

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<section _v-f0bbaa5a=\"\">\n\t<div class=\"goodsTop\" _v-f0bbaa5a=\"\">\n\t\t<div class=\"goodsName\" _v-f0bbaa5a=\"\">{{result.goodsName}}</div>\n\t\t<div class=\"goodsShare\" _v-f0bbaa5a=\"\">\n\t\t\t<i class=\"iconfont icon-fenxiang\" _v-f0bbaa5a=\"\"></i>\n\t\t\t<div _v-f0bbaa5a=\"\">分享</div>\n\t\t</div>\n\t</div>\n\t<div class=\"priceWap\" _v-f0bbaa5a=\"\">\n\t\t￥ <span class=\"price\" _v-f0bbaa5a=\"\">{{result.price}} </span><span class=\"cuxiao\" _v-f0bbaa5a=\"\"> 优惠促销 </span>\n\t</div>\n\t<div class=\"kuaidi\" _v-f0bbaa5a=\"\">\n\t\t<span _v-f0bbaa5a=\"\">快递：免运费</span>\n\t\t<span _v-f0bbaa5a=\"\">月销{{result.buynumber}}笔</span>\n\t\t<span _v-f0bbaa5a=\"\">浙江杭州</span>\n\t</div>\n\t<div class=\"detail\" _v-f0bbaa5a=\"\">\n\t\t<img :src=\"result.goodsListImg\" _v-f0bbaa5a=\"\">\n\t\t<div _v-f0bbaa5a=\"\">\n\t\t\t<span _v-f0bbaa5a=\"\">商品描述:</span>\n\t\t\t<details _v-f0bbaa5a=\"\">\n\t\t\t\t{{result.detail}}\n\t\t\t</details>\n\t\t</div>\n\t</div>\n</section>\n";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(99)
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] views\\goods\\footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-1e125c1d&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./footer.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.0@css-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/style-rewriter.js?id=_v-1e125c1d&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.2@vue-loader/lib/selector.js?type=style&index=0!./footer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "footer[_v-1e125c1d] {\n  height: 0.8rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 0.01rem solid #BBBBBB;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  font-size: 0.28rem; }\n  footer a[_v-1e125c1d] {\n    display: block; }\n    footer a[_v-1e125c1d]:nth-child(1) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      footer a:nth-child(1) i[_v-1e125c1d] {\n        font-size: 0.32rem; }\n      footer a:nth-child(1) .icon-xing[_v-1e125c1d] {\n        color: #FE9402; }\n      footer a:nth-child(1) div[_v-1e125c1d] {\n        font-size: 0.22rem; }\n    footer a[_v-1e125c1d]:nth-child(2) {\n      -webkit-box-flex: 3;\n          -ms-flex: 3;\n              flex: 3;\n      text-align: center;\n      color: #fff;\n      background: #fe9402;\n      line-height: 0.8rem;\n      position: relative; }\n      footer a:nth-child(2) div[_v-1e125c1d] {\n        width: 0.36rem;\n        height: 0.36rem;\n        border-radius: 50%;\n        background: #B40000;\n        position: absolute;\n        top: 0.05rem;\n        right: 0.02rem; }\n    footer a[_v-1e125c1d]:nth-child(3) {\n      -webkit-box-flex: 3;\n          -ms-flex: 3;\n              flex: 3;\n      text-align: center;\n      color: #fff;\n      background: #ff5000;\n      line-height: 0.8rem; }\n", ""]);

	// exports


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(10);

	var _store2 = _interopRequireDefault(_store);

	var _action = __webpack_require__(12);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped="scoped" lang="sass">
	// 	footer{
	// 		height: 0.8rem;
	// 		width: 100%;
	// 		display: flex;
	// 		border-top: 0.01rem solid #BBBBBB;
	// 		position: fixed;
	// 		left: 0;
	// 		bottom: 0;
	// 		font-size: 0.28rem;
	// 		a{
	// 			display:block; 
	// 			&:nth-child(1){
	// 				flex: 1;
	// 				display: flex;
	// 				flex-direction: column;
	// 				justify-content: center;
	// 				align-items: center;
	// 				i{
	// 					font-size: 0.32rem;
	// 				}
	// 				.icon-xing{
	// 					color: #FE9402;
	// 				}
	// 				div{
	// 					font-size: 0.22rem;
	// 				}
	//
	// 			}
	// 			&:nth-child(2){
	// 				flex: 3;
	// 				text-align: center;
	// 				color: #fff;
	// 				background: #fe9402;
	// 				line-height: 0.8rem;
	// 				position: relative;
	// 				div{
	// 					width: 0.36rem;
	// 					height: 0.36rem;
	// 					border-radius: 50%;
	// 					background: #B40000;
	// 					position: absolute;
	// 					top: 0.05rem;
	// 					right: 0.02rem;
	// 				}
	// 			}
	// 			&:nth-child(3){
	// 				flex: 3;
	// 				text-align: center;
	// 				color: #fff;
	// 				background: #ff5000;
	// 				line-height: 0.8rem;
	// 			}
	// 		}
	//
	// 	}
	// </style>
	//
	// <template>
	// 	<footer>
	// 		<a>
	// 			<i class="iconfont" :class="icon_shoucang"  @click="show1(icon_shoucang)"  ></i>
	// 		<!--	<i class="iconfont icon-xing" v-if="!show" @click="show1(1)"></i>-->
	// 		<!--<i class="iconfont" :class=" icon_shoucang"  @click="icon_shoucang==('icon_shoucang')?'icon_shoucang':'icon-xing'"></i>-->
	//
	// 			<div>收藏</div>
	// 		</a>
	//
	// 		<a @click="add" >
	// 			加入购物车
	// 			<!--<div class="name">{{number}}</div>-->
	// 		</a>
	// 		<a v-link="{name:'cart'}">
	// 			立即购买
	// 		</a>
	//
	// 	</footer>
	// </template>
	//
	// <script>
	exports.default = {
		store: _store2.default,
		vuex: {
			getters: {
				result: function result(state) {
					return state._detail;
				},
				cart: function cart(state) {
					console.log(state._cart);
					return state._cart[0];
				}
			},
			actions: {
				getDetail: _action2.default.getDetail,
				upCart: _action2.default.upCart,
				getcart: _action2.default.getcart
			}
		},

		data: function data() {
			return {
				show: true,
				icon_shoucang: 'icon-shoucang',
				number: 1,
				userID: '',
				goodsID: '',
				sum: ''

			};
		},

		methods: {
			show1: function show1(name) {
				console.log(name);
				if (name == 'icon-shoucang') {
					this.icon_shoucang = 'icon-xing';
				} else {
					this.icon_shoucang = 'icon-shoucang';
				}
			},
			add: function add() {
				var storage = window.localStorage;
				var userdata = JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				var goodsID = this.result.goodsID;

				this.upCart(1, userID, goodsID, function () {});
				this.number++;
				this.getcart(userID);
			}
		}

	};
	// </script>

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<footer _v-1e125c1d=\"\">\n\t<a _v-1e125c1d=\"\">\n\t\t<i class=\"iconfont\" :class=\"icon_shoucang\" @click=\"show1(icon_shoucang)\" _v-1e125c1d=\"\"></i>\n\t<!--\t<i class=\"iconfont icon-xing\" v-if=\"!show\" @click=\"show1(1)\"></i>-->\n\t<!--<i class=\"iconfont\" :class=\" icon_shoucang\"  @click=\"icon_shoucang==('icon_shoucang')?'icon_shoucang':'icon-xing'\"></i>-->\n\t\t\n\t\t<div _v-1e125c1d=\"\">收藏</div>\n\t</a>\n\t\n\t<a @click=\"add\" _v-1e125c1d=\"\">\n\t\t加入购物车\n\t\t<!--<div class=\"name\">{{number}}</div>-->\n\t</a>\n\t<a v-link=\"{name:'cart'}\" _v-1e125c1d=\"\">\n\t\t立即购买\n\t</a>\n\t\n</footer>\n";

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<my-header></my-header>\n<my-banner></my-banner>\n<my-section></my-section>\n<my-footer></my-footer>\n";

/***/ }
/******/ ]);