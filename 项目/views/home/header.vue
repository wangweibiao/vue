<style scoped="scoped" lang="sass">
	.header{
		width: 100%;
		background-color: #d9001d;
		height:0.7rem;overflow: hidden;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #fff;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		.logo{
			width: 1.3rem;
			height: 0.4rem;
			background: url(../../assets/src/logo.png)  no-repeat;
			background-size: cover;
		}
		.search{
			width: 4.38rem;
			height: 0.5rem;
			background-color: #b40000;
			font-size: 0.32rem;
			color: #fefefe;
			display: flex;
			justify-content: space-around;
			align-items: center;
			input{
				font-size:0.24rem;
				color: #fff;
				border: none;
				outline: none;
				width: 3.8rem;
				height: 0.5rem;
				line-height: 0.5rem;
				background-color: #b40000;
			}
			
		}
		.iconfont{
			font-size: 0.38rem;
		}
	}
</style>
<template>
   <div class="header">
        <a href="" class="logo"></a>
        <div class="search">
        	<div class="iconfont icon-sousuokuangsousuo" @click="updateMessage"></div>
        	<input type="text" v-model="inputValue"/>
        </div>
        <div class="iconfont icon-daipingjia"></div>
   </div>
</template>
<script type="text/javascript">
	import store from '../../vuex/store.js';
	import Action from '../../vuex/action.js';
	export default {
		store:store,
		vuex:{
			getters:{
				
			},
			actions:{
				updateMessage:Action.getSearch
			},
//			data(){
//				return{
//					inputValue:""
//				}
//			},
			ready(){
				Action.updateMessage();
			}
		}
		
	}
</script>