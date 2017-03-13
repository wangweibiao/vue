<style>
	.shop{
		width: 100%;
		height: 200px;
		line-height: 200px;
		font-size: 28px;
		background-color: #0087bc;
		color: #FFFFFF;
	}
</style>
<template>
	<my-headers></my-headers>
	<classifylist></classifylist>
	<footers></footers>
</template>

<script type="text/javascript">
	//实现组件嵌套  1.引入组件
	import Headers from '../views/classify/header.vue';
	import Footers from '../views/common/footer.vue';
	import ClassifyList from '../views/classify/classifyList.vue' 
	//2.组件注册
	export default{
		components:{
			'my-headers':Headers,
			'footers':Footers,
			'classifylist':ClassifyList,
		},
		data(){
			return{
				message:''
			}
		},
		ready(){
			
		}
	}
</script>