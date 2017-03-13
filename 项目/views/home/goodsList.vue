<style scoped="scoped" lang="sass">
	.goodsList{
		width: 100%;
		background: #f5f5f5;
		padding-bottom: 0.7rem;
		h3{
			font-size: 0.25rem;
			color: #a3a3a3;
			text-align: center;
			padding: 0.1rem;
		}
		.goodswarp{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
		}
		
		.goodsItem{
			width:3rem;
			height: 4.1rem;
			font-size: 0.22rem;
			background: #fff;
			margin: 0.1rem;
			img{
				width:3rem;
				height: 3rem;
				
			}
			.warp{
				width:100%;
				height: 1.05rem;
				.goodsName{
					color: #797979;
					line-height: 0.28rem;
					height: 0.5rem;
					display: block;
					padding: 0.1rem;
					overflow: hidden;
				}
				.price{
					color: #e60000;
					float: left;
					margin-left: 0.1rem;
				}
				.number{
					margin-right: 0.1rem;
					float: right;
					color: #f36f40;
					font-size: 0.16rem;
					span{
						color: #dedede;
					}
				}
			}
			
		}
	}
</style>

<template>
	<div class="goodsList">
		<h3>精品推荐</h3>
		<div class="goodswarp">
			<div class="goodsItem" :name="item.goodsID" v-for="item in result" @click.stop="getDetail(item.goodsID)" >
				<img :src="item.goodsListImg"/>
				<div class="warp">
					<div class="goodsName">{{item.goodsName}}</div>
					<span class="price">￥{{item.price}}.00</span>
					<span class="number">{{item.discount}}<span> 折起售<span></span>
					
				</div>
			</div>
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
				result:function(state){		
					return  state._query;
				},
			},
			actions:{
				getSearch:Action.getSearch,
				getDetail:Action.getDetail
			}
		},
		methods:{
			
		},
		ready(){
						
			this.getSearch();
		}
	}
</script>