<template>
	<section id="footer">
		<div class="footer1"></div>
		<div class="footer2">
			<div class="boxes">
				<h1>things</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa,
					i
				</p>
				<ul>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
				</ul>
			</div>
			<div class="boxes">
				<h1>things</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa,
					i
				</p>
				<ul>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
					<li><i class="fa-solid fa-chevron-right"></i> 1</li>
				</ul>
			</div>
			<div class="boxes">
				<h1>things</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa,
					i
				</p>
				<img
					width="140"
					height="90"
					src="https://i.postimg.cc/fWFn8r7P/kindpng-4937901.png"
					alt=""
				/>
			</div>
			<div class="boxes">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.7406258557!2d-1.3911115949449724!3d51.75032890320518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C%20UK!5e0!3m2!1sen!2sza!4v1661776624736!5m2!1sen!2sza"
					width="100%"
					height="100%"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
		<div class="footer3">
			<a href="#"
				><i class="fa-solid fa-plane-up"></i> OXFORD-AIRLINES/ ALL RIGHTS
				RESERVED</a
			>
		</div>
	</section>
</template>
<script>
	export default {};
</script>
<style scoped>
	#footer {
		min-height: 45vh;
		background-color: red;
	}
	.footer1 {
		min-height: 5vh;
		background-color: #16253d;
		border-top: 1px solid #d9b44a;
	}
	.footer2 {
		min-height: 35vh;
		background-color: #263b5c;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		gap: 10px;
	}
	.boxes {
		width: 22%;
		height: 220px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		/* border: 1px solid red; */
		color: white;
	}
	.boxes h1 {
		text-align: center;
		color: #d9b44a;
		text-shadow: 2px 2px solid black;
	}
	ul {
		list-style-type: none;
		line-height: 30px;
	}
	.footer3 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		min-height: 5vh;
		background-color: #16253d;
		text-align: center;
		color: white;
		border-top: 1px solid #d9b44a;
	}
	.fa-chevron-right {
		color: #d9b44a;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: 10px;
	}
	.fa-plane-up {
		color: #d9b44a;
	}
	@media only screen and (max-width: 996px) {
		.boxes {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-content: center;
			width: 80%;
		}
		.footer2 {
			padding: 10px;
			gap: 20px;
		}
	}
</style>
