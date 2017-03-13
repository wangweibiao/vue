<style scoped="scoped" lang="sass">
	.classify{
		width: 100%;
		height: 100%;
		margin-top: 0.7rem;
		display: flex;
		nav{
			height: 9.9rem;
			width: 1.5rem;
			position:fixed;
			background-color:#f9f9f9;
			border-right: 1px solid #e3e3e3;
			ul{
				width: 100%;
				height: 100%;
				li{
					width: 100%;
					height: 0.75rem;
					display: flex;
					align-items: center;
					div{
						text-align: center;
						box-sizing: border-box;
						font-size: 0.26rem;
						color: #6e6e6e;
						width: 1.5rem;
						height: 0.5rem;
						line-height: 0.5rem;
						
					}
					&:hover{
						border-left: 0.01rem solid #fff;	
						background: #fff;
						div{
							color: #e92f33;
							border-left: 0.05rem solid #f66993;	
						}					
					}
				}
			}
		}
		section{
			width: 4.89rem;
			display: flex;
			flex-wrap: wrap;
			margin-left: 1.5rem;
			justify-content: space-around;
			height: 3rem;
			.warp{
				width: 1.32rem;
				height: 2.1rem;
				img{
					border: 0.01rem solid #e3e3e3;
					width: 1.3rem;
					height: 1.5rem;
				}
				div{
					overflow: hidden;
					font-size: 0.22rem;
					text-align: center;
					white-space: nowrap;
				}
			}
		} 
	}
</style>

<template>
	<div class="classify">
		<nav>
			<ul>
				<li v-bind:name="item.className"  @click.stop="selectClass($event)" v-for="item in result">
					<div id="$index" v-bind:name="item.className">{{item.className}}</div>
				</li>
			</ul>
		</nav>
		<section>
			<div class="warp" v-for="item in goodsList">
				<img :src="item.goodsListImg" />
				<div>{{item.goodsName}}</div>
			</div>
		</section>
		
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
					return state._classify;
				},
				goodsList:function(state){
					return state._query;
				}
			},
			actions:{
				getClassify:Action.getClassify,
				selectClass:Action.getSearch,
			}	
		},
		data(){
			return{
				mes:''
			}
		},
//		methods:{
//			selectClassName(event){ 
//				var _div = event.target;
//				var _text = event.target.getAttribute('name');
//				console.log(event);
//				console.log(_text)
//				Action.getSearch(_text);
//			}
//		},
		ready(){			
			this.getClassify();			
		}
	}
</script>