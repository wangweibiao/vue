<!--
	初始化组件页面
	目的是为了在这个组件容器里面
	将其他的组件嵌套进来
	
-->
<template>
	<div id="">
		<headers></headers>
		<banner></banner>
		<goodlist></goodlist>
		<footers></footers>
	</div>
</template>
<script type="text/javascript">
	//实现组件嵌套  1.引入组件
	import Headers from '../views/home/header.vue';
	import Footers from '../views/common/footer.vue';
	import Banner from '../views/common/banner.vue';
	import GoodsList from '../views/home/goodsList.vue';
	import ajax from '../assets/js/ajax.js';
	
		
	//2.组件注册
	export default{		
		components:{
			'headers':Headers,
			'banner':Banner,
			'goodlist':GoodsList,
			'footers':Footers
		},
		methods:{
			
		},
		data(){
			var self = this;
			return {
				
			}
			
		},
		ready(){	
			
		}
	}
</script>