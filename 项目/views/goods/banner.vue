<style lang="sass" scoped="scoped">
	#banner{
		margin-top:0.64rem ;	
		width: 100%;
		height: 4.5rem;
		overflow: hidden;
		.swiper-wrapper{
			width: 6.4rem;
			height: 4.5rem;
		}
	}
</style>

<template>
	<div id="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="item in result" class="swiper-slide">
					<img :src='item' />
				</div>
			</div>
			<div class="swiper-pagination"></div>
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
					return  state._detail.goodsBenUrl;
				},
			},
			actions:{
				getDetail:Action.getDetail,
			}
		},
		ready(){
			this.getDetail(this.$route.query.goodsID);
			
			setTimeout(function(){
				var myswiper = new Swiper('.swiper-container',{
					autoplay:1500,
					loop:true,			
					autoplayDisableOnInteraction : false,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
    				pagination : '.swiper-pagination',
					paginationClickable :true,
				});
			},1000)
		}
	}
</script>