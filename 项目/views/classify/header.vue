<style scoped="scoped" lang="sass">
	.header{
		width: 100%;
		background-color: #f6f5f3;
		height:0.7rem;overflow: hidden;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #f6f5f3;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		border-bottom: 2px solid #d8d7d2;
		.search{
			width: 6.1rem;
			height: 0.5rem;
			background-color: #fff;
			font-size: 0.32rem;
			color: #fefefe;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-radius: 0.7rem;
			border:1px solid #e7e7e5;
			
			input{
				font-size:0.24rem;
				color: #d9d9d9;
				border: none;
				outline: none;
				width: 5rem;
				height: 0.5rem;
				line-height: 0.5rem;
				background-color: #fff;
			}
			
		}
		.iconfont{
			font-size: 0.38rem;
			color: #f96593;
		}
	}
</style>
<template>
   <div class="header">
        <div class="search">
        	<div class="iconfont icon-sousuokuangsousuo" @click="updateMessage"></div>
        	<input type="text" v-model="inputValue" placeholder="搜索"/>
        </div>
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
			data(){
				return{
					inputValue:""
				}
			},
			
			ready(){
				Action.updateMessage();
			}
		}
		
	}
</script>