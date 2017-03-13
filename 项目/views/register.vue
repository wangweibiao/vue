<style scoped="scoped" lang="sass">
	.bodyc{
		width: 100%;
		height: 11.35rem;
		background: #f5f5f5;
	
	}
	header{
		width: 100%;
		height: 0.65rem;
		border-bottom: 0.01rem solid #dedede;
		background: #f5f5f5;
		text-align: center;
		font-size: 0.38rem;
		line-height: 0.65rem;
		color: #747474;
		
	}
	section{
		padding-top: 0.3rem;
		width: 100%;
		font-size: 0.28rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f5f5f5;
		.input-warp{
			width: 5.7rem;
			height: 0.64rem;
			border: 0.01rem solid #dfdfdf;
			background: #f0f0f0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-bottom: 0.3rem;
			i{
				color: #F66993;
			}
			input{
				border: none;
				outline: none;
				width: 5rem;
				background: #f0f0f0;
				
			}
		}
		.loginBtn{
			width: 5.7rem;
			color: #fff;
			background: #f10d0c;
			border: 1px solid #f10d0c;
			border-radius: 0.05rem;
			text-align: center;
			height: 0.6rem;
			margin-bottom: 0.25rem;
		}
		.nuwUser{
			width: 5.7rem;
			color: #f10d0c;
			background: #eeeeee;
			border: 1px solid #d4d4d4;
			border-radius: 0.05rem;
			text-align: center;
			height: 0.6rem;
			outline: none;
		}
		.line-y{
			border-left: 0.01rem dashed #6D6D72;
			height: 0.32rem;
		}
	}
</style>
<template>
		<div class="bodyc">
			<header>
			<my-back></my-back>
			注册
			
		</header>
		<section>
			<div class="input-warp">
				<i class="iconfont icon-user"></i>
				<div class="line-y"></div>
				<input type="text" v-model="userID" placeholder="手机号"/>
			</div>
			<div class="input-warp">
				<i class="iconfont icon-xianshimima"></i>
				<div class="line-y"></div>
				<input type="password" v-model="password" placeholder="密码"/>
			</div>
			<div class="input-warp">
				<i class="iconfont icon-xianshimima"></i>
				<div class="line-y"></div>
				<input type="password" v-model="password2" placeholder="确认密码"/>
			</div>
			<button class="loginBtn" @click="register">注册</button>
		</section>
	</div>
	
	
</template>
<script type="text/javascript">
	import backicon from './common/back.vue';
	import store from '../vuex/store.js';
	import Action from '../vuex/action.js';
//	import Alert from '../vux/src/components/alert'
	export default{
		store,
		components:{
			'my-back':backicon,
		},
		vuex:{
			getters:{
				
			},
			actions:{
				register:Action.register
			}
		},

		data(){
			return{
				userID:'',
				password:'',
				password2:''
			}
		},
		
		
	}
</script>