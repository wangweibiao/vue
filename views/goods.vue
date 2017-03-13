<style>
	
</style>
<template>
	<my-header></my-header>
	<my-banner></my-banner>
	<my-section></my-section>
	<my-footer></my-footer>
</template>
<script type="text/javascript">
	import Header from './goods/header.vue';
	import Banner from './goods/banner.vue';
	import Section from './goods/section.vue';
	import Footer from './goods/footer.vue';
	
	export default {
		components:{
			"my-header":Header,
			'my-banner':Banner,
			'my-section':Section,
			'my-footer':Footer
		}
	}
</script>