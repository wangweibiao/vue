<style lang="sass" scoped="scoped">
	section{
		width: 100%;
		.goodsTop{
			display: flex;
			justify-content: space-around;
			padding: 0.2rem;
			.goodsName{
				font-size: 0.24rem;
				width: 5.15rem;
			}	
			.goodsShare{
				font-size: 0.22rem;
			}
		}
		.priceWap{
			font-size: 0.2rem;
			color: #ff4900;
			padding: 0.2rem;
			.price{
				font-size: 0.3rem;
			}
			.cuxiao{
				border: 0.01rem solid #ff4900;
				border-bottom: 0.05rem;
				font-size: 0.14rem;
				padding: 0.01rem;
			}
		}
		.kuaidi{
			padding: 0.2rem;
			font-size: 0.20rem;
			display: flex;
			justify-content: space-between;
			color: #9A9A9A;
			border-bottom: 0.01rem solid #D9D9D9;
		}
		.detail{
			box-sizing: border-box;
			width: 100%;
			padding: 0.2rem;
			font-size: 0.2rem;
			display: flex;
			justify-content: space-between;
			img{
				width: 1.2rem;
				height: 1.6rem;
			}
			details{
				width: 4.6rem;
				outline: none;
				
			}
		}
	}
</style>

<template>
	<section>
		<div class="goodsTop">
			<div class="goodsName">{{result.goodsName}}</div>
			<div class="goodsShare">
				<i class="iconfont icon-fenxiang"></i>
				<div>分享</div>
			</div>
		</div>
		<div class="priceWap">
			￥ <span class="price">{{result.price}} </span><span class="cuxiao"> 优惠促销 </span>
		</div>
		<div class="kuaidi">
			<span>快递：免运费</span>
			<span>月销{{result.buynumber}}笔</span>
			<span>浙江杭州</span>
		</div>
		<div class="detail">
			<img :src="result.goodsListImg"/>
			<div>
				<span>商品描述:</span>
				<details>
					{{result.detail}}
				</details>
			</div>
		</div>
	</section>
</template>
<script type="text/javascript">
	import store from '../../vuex/store.js';
	import Action from '../../vuex/action.js';
	export default {
		store:store,
		vuex:{
			getters:{
				result:function(state){	
					console.log(state._detail)
					return  state._detail;
				},
			},
			actions:{
				getDetail:Action.getDetail,
			}
		},
		ready(){
						
		}
	}
</script>