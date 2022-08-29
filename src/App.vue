<template>
	<Nav />
	<router-view />
	<Footer />
</template>
<script>
	import Nav from "./components/nav.vue";
	import Footer from "./components/footer.vue";

	export default {
		components: { Nav, Footer },
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
