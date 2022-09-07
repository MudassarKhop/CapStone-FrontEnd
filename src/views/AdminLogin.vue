<template>
	<Nav />
	<section id="login">
		<div class="mother">
			<div class="child1">
				<div class="heading">
					<h1><i class="fa-solid fa-plane-up"></i> Login</h1>
				</div>
			</div>
			<div class="child2">
				<div class="icons">
					<a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
					<a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
					<a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import Nav from "@/components/nav.vue";
	export default {
		components: { Nav },
	};
</script>
<style scoped>
	#login {
		height: 85vh;
		background-color: #222222;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		padding: 20px;
	}
	.mother {
		min-width: 60%;
		height: 80vh;
		background-color: #223655;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	.child1 {
		width: 50%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.312);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	.heading {
		height: 20%;
		width: 100%;
		color: white;
	}
	.child2 {
		width: 50%;
		height: 100%;
	}
	.fa-plane-up {
		color: #d9b44a;
	}
	.fa-linkedin {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
	.fa-whatsapp {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
	.fa-instagram {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
</style>
