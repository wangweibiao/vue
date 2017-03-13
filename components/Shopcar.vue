<style scoped="scoped" lang="sass">
	body{
		background: #f9f9f9;
	}
	header{
		width: 100%;
		height: 0.7rem;
		text-align: center;
		font-size: 0.32rem;
		line-height: 0.7rem;
		border-bottom: 0.02rem solid #929292;
		position: fixed;
		left: 0;
		top: 0;
		background: #f9f9f9;
		color:#393e41;
		display: flex;
		justify-content: space-around;
		align-items: center;
		span{
		padding-left: 0.8rem;
			flex: 4;
		}
		i{
			flex: 1;
			font-size: 0.32rem;
		}
		
	}
	section{
		width: 100%;
		background: #f5f5f5;
		margin-top: 0.7rem;
		overflow: hidden;
		margin-bottom: 1.7rem;
		.items{
			width: 100%;
			height: 2.5rem;
			display: flex;
			justify-content: space-around;
			border-bottom: 0.03rem solid #dddddd;
			border-top: 0.02rem solid #dddddd;
			background: #fafafa;
			align-items: center;
			margin-bottom:0.2rem;
			/*border-bottom:0.01rem solid #fafafa;
			border-top:0.01rem solid #fafafa;*/
			
			.check{
				width: 0.3rem;
				height: 0.3rem;
			}
			
			img{
				display: block;
				width: 1.55rem;
				height: 1.55rem;
				border:0.01rem solid #fafafa ;
				
			}
			.concent{
				width: 3.6rem;
				.goodsName{
					font-size: 0.28rem;
					margin-bottom: 0.2rem;
					color: #333333;
				}
				.bottom{
					
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 0.28rem;
					.price{
						color: #FF5053;
					}
					.number{
						font-size: 0.24rem;
						padding-right: 0.2rem;
						color: #404040;
					}
					.upnumber{
						width: 1.2rem;
						height: 0.4rem;
						border: 0.01rem solid #E92F33;
						display: flex;
						justify-content: space-around;
						align-items: center;
						font-size: 0.3rem;
						div{
							height: 0.4rem;
							width: 0.4rem;
							text-align: center;
							line-height: 0.4rem;
						}
					}
				}
			}
		}
	}
	.allchecked{
		width: 100%;
		height: 0.8rem;
		position: fixed;
		left: 0;
		bottom: 0.84rem;
		border-bottom: 0.01rem solid #dddddd;
		border-top: 0.02rem solid #dddddd;
		background: #fff;
		font-size: 0.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.warp1{
			margin-left: 0.15rem;
			input{
				width: 0.3rem;
				height: 0.3rem;
			}
		}
		.warp2{
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 0.22rem;
			span{
				color: #fe5600;
			}
			.clearimg{
				font-size: 0.28rem;
				width: 1.75rem;
				height: 100%;
				color: #fff;
				line-height: 0.8rem;
				text-align: center;
				background: #fe5600;
				margin-left: 0.2rem;
			}
		}
	}
</style>
<template>
	<header>
		<span>购物车</span><i @click="setupdate();" class='iconfont icon-shezhi'></i>
	</header>
	<section>
		<div class="items" v-for="item in cart">
			<input class="check" type="checkbox"/></span>
			<img :src="item.goodsListImg" />
			<div class="concent">
				<div class="goodsName">{{item.goodsName}}</div>
				<div class="bottom">
					<span class="price">￥{{Math.round((item.price*item.number)*100)/100}}</span><span v-if='show' class="number">&Chi; {{item.number}}</span>
					<div v-if='!show' class="upnumber">
						<div  @click="reduce(item.number,item.goodsID);">-</div>
						<div>{{item.number}}</div>
						<div  @click='add(item.number,item.goodsID);'>+</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="allchecked">
		<div class="warp1">
			<input type="checkbox" name="" id="" value="" />
			<span>全选</span>
			
		</div>
		<div class="warp2">
			<div>
				合计：<span>￥123123</span>
			</div>
			<div class="clearimg">
				结算()
			</div>
		</div>
	</div>
	<footers></footers>
</template>

<script type="text/javascript">
	//实现组件嵌套  1.引入组件
	import store from '../vuex/store.js';
	import Action from '../vuex/action.js';
	import Footers from '../views/common/footer.vue';
	
	//2.组件注册
	export default{
		store:store,
		vuex:{
			getters:{
				result:function(state){	
					return  state._detail;
				},
				cart:function(state){
					console.log(state._cart[0].goodsName);
					return state._cart;
				}
			},
			actions:{
//				getDetail:Action.getDetail,
				upCart:Action.upCart,
				getcart:Action.getcart,
			}
		},
		components:{
			'footers':Footers
		},
		data(){
			return{
				show:false,
			}
		},
		methods:{
			setupdate(){				
				this.show = this.show?false:true; 
			},
			add(number,goodsID){
				var self = this;
				number++;
				number=number<1?1:number;
				console.log(number);
				var storage=window.localStorage;
				var userdata= JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				this.upCart(number,userID,goodsID,function(){
					
					self.getcart(userID);
				})
			},
			reduce(number,goodsID){
				var self = this;
				number--;
				number=number<1?1:number;
				console.log(number);
				var storage=window.localStorage;
				var userdata= JSON.parse(storage.mlyc_user);
				var userID = userdata.userID;
				this.upCart(number,userID,goodsID,function(){
					self.getcart(userID);
					
				});
			}
			

		},
		ready(){
			var storage=window.localStorage;
			var userdata= JSON.parse(storage.mlyc_user);
			console.log(userdata);
			var userID = userdata.userID;
//			var goodsID = this.result.goodsID;
			this.getcart(userID);
		}
	}
</script>