<style scoped="scoped" lang="sass">
	header{
		background: #dd4506;
		text-align: center;
		height: 0.64rem;
		width: 100%;
		line-height: 0.64rem;
		font-size: 0.32rem;
		color: #F5F5F5;
		font-family: "微软雅黑";
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
<template>
	<header>
		<backicon></backicon>
		商品介绍
	</header>

</template>
<script type="text/javascript">
	import backicon from '../common/back.vue';
	
	export default {
		components:{
			"backicon":backicon,
		}
	}
</script>