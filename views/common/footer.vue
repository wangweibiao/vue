<style scoped="scoped" lang="sass">
	footer{
		width: 100%;
		height: 0.84rem;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		padding: 0;
		justify-content: space-around;
		align-items: center;
		background: #eeeeee;
		a{
			display: flex;
			flex-direction:column;
			align-items: center;
			font-size: 0.2rem;
			color: #9a9a9a;
			i{
				display: block;
				width: 0.3rem;
				height: 0.3rem;
				font-size: 0.3rem;
			}
		}
		
	}
</style>
<template>
	<footer>
		<!--在事件触发的时候，进行配置，v-link-->
		<a v-link="{path:'/index'}">
			<i class="iconfont icon-shouye"></i>
			<span>首页</span>
		</a>
		<a v-link="{path:'/classify'}">
			<i class="iconfont icon-icon1"></i>
			<span>分类</span>
		</a>
		<a v-link="{path:'/shopcar'}">
			<i class="iconfont icon-waimai"></i>
			<span>购物车</span>
		</a>
		<a v-link="{path:'/my'}">
			<i class="iconfont icon-wode"></i>
			<span>我的</span>
		</a>
	</footer>
</template>