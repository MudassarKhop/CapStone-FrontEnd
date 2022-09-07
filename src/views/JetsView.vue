<template>
	<Nav />
	<section id="about"></section>
</template>
<script>
	import Nav from "@/components/nav.vue";

	export default {
		components: { Nav },
	};
</script>
<style scoped>
	#about {
		background-color: #222222;
		height: 100vh;
	}
</style>
