<template>
	<section id="home"></section>
	<section id="pilots">
		<div class="title">
			<h1>something</h1>
			<h3>something more</h3>
		</div>
		<div id="cards"></div>
	</section>
	<section id="quick-sale"></section>
</template>

<script></script>
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	#home {
		background-color: rgb(200, 200, 200);
		height: 92vh;
		border-bottom: 1px solid #d9b44a;
	}
	#pilots {
		background-color: black;
		min-height: 82vh;
		border-bottom: 1px solid #d9b44a;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	#quick-sale {
		background-color: rgb(200, 200, 200);
		height: 50vh;
	}
	.title {
		width: 100%;
		height: 20%;
		border: 1px solid red;
	}
	.title h1,
	h3 {
		color: #000;
	}
	#cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		width: 80%;
		height: 80%;
		border: 1px solid green;
		padding: 30px;
		gap: 20px;
	}
	#cardss {
		width: 250px;
		height: 300px;
		background-color: white;
		box-shadow: 4px 4px 3px #403f3f, -4px -4px 3px #949494;
		border-radius: 5%;
	}
</style>
