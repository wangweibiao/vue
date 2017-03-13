<style scoped="scoped" lang="sass">
	footer{
		height: 0.8rem;
		width: 100%;
		display: flex;
		border-top: 0.01rem solid #BBBBBB;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: 0.28rem;
		a{
			display:block; 
			&:nth-child(1){
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				i{
					font-size: 0.32rem;
				}
				.icon-xing{
					color: #FE9402;
				}
				div{
					font-size: 0.22rem;
				}
				
			}
			&:nth-child(2){
				flex: 3;
				text-align: center;
				color: #fff;
				background: #fe9402;
				line-height: 0.8rem;
				position: relative;
				div{
					width: 0.36rem;
					height: 0.36rem;
					border-radius: 50%;
					background: #B40000;
					position: absolute;
					top: 0.05rem;
					right: 0.02rem;
				}
			}
			&:nth-child(3){
				flex: 3;
				text-align: center;
				color: #fff;
				background: #ff5000;
				line-height: 0.8rem;
			}
		}
		
	}
</style>

<template>
	<footer>
		<a>
			<i class="iconfont" :class="icon_shoucang"  @click="show1(icon_shoucang)"  ></i>
		<!--	<i class="iconfont icon-xing" v-if="!show" @click="show1(1)"></i>-->
		<!--<i class="iconfont" :class=" icon_shoucang"  @click="icon_shoucang==('icon_shoucang')?'icon_shoucang':'icon-xing'"></i>-->
			
			<div>收藏</div>
		</a>
		
		<a @click="add" >
			加入购物车
			<!--<div class="name">{{number}}</div>-->
		</a>
		<a v-link="{name:'cart'}">
			立即购买
		</a>
		
	</footer>
</template>

<script>
	import store from '../../vuex/store.js';
	import Action from '../../vuex/action.js';
	export default {
		store:store,
		vuex:{
			getters:{
				result:function(state){	
					return  state._detail;
				},
				cart:function(state){
					console.log(state._cart);
					return state._cart[0];
				}
			},
			actions:{
				getDetail:Action.getDetail,
				upCart:Action.upCart,
				getcart:Action.getcart,
			}
		},
		
		data(){
			return{
				show:true,
				icon_shoucang:'icon-shoucang',
				number:1,
				userID:'',
				goodsID:'',
				sum:'',
				
			}
		},
		methods:{
			show1(name){
				console.log(name)
				if(name=='icon-shoucang'){
					this.icon_shoucang='icon-xing'
				}else{
					this.icon_shoucang='icon-shoucang'
				}
			},
			add(){
				var storage=window.localStorage;
				var userdata= JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				var goodsID = this.result.goodsID;
				

				this.upCart(1,userID,goodsID,function(){})
				this.number++;
				this.getcart(userID);
			}
			
		}
		
	}
</script>