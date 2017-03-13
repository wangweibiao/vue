<style>
	.my{
		width: 100%;
		height: 200px;
		line-height: 200px;
		font-size: 28px;
		background-color: #FF0000;
		color: #FFFFFF;
	}
</style>0
<template>
	<my-headers></my-headers>
	<footers></footers>
</template>

<script type="text/javascript">
	//实现组件嵌套  1.引入组件
	import Header from '../views/my/header.vue'
	import Footers from '../views/common/footer.vue';
	
	//2.组件注册
	export default{
		components:{
			'my-headers':Header,
			'footers':Footers
		}
	}
</script>