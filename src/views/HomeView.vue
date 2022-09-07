<template>
	<Nav />
	<section id="home"></section>
	<section id="testimonialsec">
		<div id="stuuf">
			<div class="stuff1">
				<div id="card1">
					<div id="divide1">
						<h1>The Parisian Dream</h1>
						<h2>France, Paris</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
							voluptate tempora, ipsum officiis placeat explicabo consequatur.
							Veritatis voluptatibus voluptatem, pariatur ullam, optio harum sit
							dolorem ab doloribus atque minima dolorum!
						</p>
					</div>
					<div id="divide2">
						<img
							style="
								width: 100%;
								height: 100%;
								object-fit: cover;
								aspect-ratio: 1;
							"
							class="img img-fluid"
							src="https://i.postimg.cc/fRZVBqsr/paris-night-1.jpg"
							alt=""
						/>
					</div>
				</div>
				<div id="card2">
					<img
						id="img1"
						class="img img-fluid"
						src="https://i.postimg.cc/bvhsVCj5/paris-night.jpg"
						alt=""
					/>
					<div class="centered"><h1>Night-Life</h1></div>
				</div>
			</div>
			<div class="stuff2">
				<div id="card11">
					<div id="divide3">
						<img
							class="img img-fluid"
							style="
								width: 100%;
								height: 100%;
								object-fit: cover;
								aspect-ratio: 1;
							"
							src="https://i.postimg.cc/NftGcyny/Paris-at-night-time-arc-de-triomphe-at-night-time-jpg.webp"
							alt=""
						/>
					</div>
					<div id="divide4">
						<div id="title2">
							<p>
								<i class="fa-solid fa-chart-simple"></i> Top 10 Most Visited
								Cities
							</p>
						</div>
						<div id="title1"><h1>Travel In Style</h1></div>
						<div id="title2">
							<p>
								<i class="fa-sharp fa-solid fa-plane-departure"></i> 200+
								Flights Per Year
							</p>
						</div>
					</div>
				</div>
				<div id="card22">
					<img
						style="width: 100%; height: 100%"
						class="img img-fluid"
						src="https://i.postimg.cc/wv2CHPJ2/3043929.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
	<section id="slides">
		<div class="container2">
			<div class="box">
				<div class="imgBx">
					<img src="https://i.postimg.cc/tCrQqqCt/1431931.jpg" />
				</div>
				<router-link to="/flights">
					<div class="content">
						<div>
							<h2>Indonesia, Bali</h2>
							<p>
								Bali has the world's most expensive coffee. The most expensive
								coffee in the world comes from poop.
							</p>
						</div>
					</div>
				</router-link>
			</div>
			<div class="box">
				<div class="imgBx">
					<img
						src="https://i.postimg.cc/2j2XvHRC/eiffel-tower-paris-4k-wide-1536x864.jpg"
					/>
				</div>
				<router-link to="/flights">
					<div class="content">
						<div>
							<h2>France, Paris</h2>
							<p>Paris was originally a Roman City called “Lutetia.”</p>
						</div>
					</div>
				</router-link>
			</div>
			<div class="box">
				<div class="imgBx">
					<img src="https://i.postimg.cc/DZm4NyZj/2338846.jpg" />
				</div>
				<router-link to="/flights">
					<div class="content">
						<div>
							<h2>Monaco</h2>
							<p>
								Monaco is the 2nd smallest country in the world, a “microstate”
								(or city-state) of only 2 sq km.
							</p>
						</div>
					</div>
				</router-link>
			</div>
			<div class="box">
				<div class="imgBx">
					<img
						src="https://i.postimg.cc/9FyJmVPg/wallpaperflare-com-wallpaper.jpg"
					/>
				</div>
				<router-link to="/flights">
					<div class="content">
						<div>
							<h2>Qatar, Doha</h2>
							<p>Qatar is the second flattest country in the world.</p>
						</div>
					</div>
				</router-link>
			</div>
			<div class="box">
				<div class="imgBx">
					<img
						src="https://i.postimg.cc/3Nb2rQmL/shutterstock-363803066.webp"
					/>
				</div>
				<router-link to="/flights">
					<div class="content">
						<div>
							<h2>Beijing, China</h2>
							<p>
								The Great Wall of China is a series of fortifications that were
								built across the historical northern borders of ancient China.
							</p>
						</div>
					</div>
				</router-link>
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
	* {
		letter-spacing: 1px;
		padding: 0;
		margin: 0;
	}
	#home {
		background-color: #222222;
		height: 92vh;
		/* information section */
	}
	#testimonialsec {
		background-color: #222222;
		height: 100vh;
		border-bottom: 1px solid #d9b44a;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		padding-top: 40px;
		padding-bottom: 50px;
	}
	#stuuf {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
		gap: 15px;
	}
	.stuff1 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		height: 40%;
		gap: 15px;
		width: 100%;
		/* background-color: green; */
	}
	#card1 {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		height: 100%;
		width: 70%;
		background-color: #16253d;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#card2 {
		height: 100%;
		width: 20%;
		background-color: #16253d;
		position: relative;
		text-align: center;
		color: white;
		text-shadow: 3px 3px black;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	#divide1 {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		padding-right: 10px;
		padding-left: 10px;
	}
	#divide1 h1 {
		color: white;
		font-size: 30px;
		text-align: center;
	}
	#divide1 h2 {
		color: #d9b44a;
		font-size: 20px;
		text-align: center;
	}
	#divide1 p {
		color: #84939f;
		text-align: center;
		letter-spacing: 1px;
	}
	#divide2 {
		width: 50%;
		height: 100%;
	}
	#img1 {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		transition: 0.3s ease;
	}
	.centered {
		border-top: 3px solid #d9b44a;
		border-bottom: 3px solid #d9b44a;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 40%;
		width: 80%;
	}
	.centered h1 {
		letter-spacing: 2px;
	}
	#img1:hover {
		filter: blur(0px);
		-webkit-filter: blur(0px);
		transition: 0.3s;
	}
	.stuff2 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		height: 60%;
		width: 100%;
		gap: 15px;
		/* background-color: blue; */
	}
	#card11 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		height: 100%;
		width: 20%;
		background-color: #16253d;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#card22 {
		height: 100%;
		width: 70%;
		background-color: #000;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#divide3 {
		width: 100%;
		height: 50%;
	}
	#divide4 {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#title1 {
		border-top: 1px solid #d9b44a;
		height: 40%;
		border-bottom: 1px solid #d9b44a;
		width: 80%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	#title2 {
		height: 20%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	#title2 p {
		color: white;
		letter-spacing: 1px;
	}
	.fa-chart-simple {
		color: #d9b44a;
	}
	.fa-plane-departure {
		color: #d9b44a;
	}
	#title1 h1 {
		font-size: 30px;
		color: white;
	}
	/* information section */
	/* informations cards */
	#slides {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
		background-color: #222222;
	}
	.container2 {
		position: relative;
		margin-left: 20px;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		transform-style: preserve-3d;
		perspective: 500px;
		padding: 2%;
	}
	.container2 .box {
		/* position: relative; */
		width: 255px;
		height: 255px;
		background: #000;
		transition: 0.5s;
		transform-style: preserve-3d;
		overflow: hidden;
		margin-right: 20px;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	.container2:hover .box {
		transform: rotateY(25deg);
	}
	.container2 .box:hover ~ .box {
		transform: rotateY(-25deg);
	}
	.container2 .box:hover {
		transform: rotateY(0deg) scale(1.25);
		z-index: 1;
		box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
	}
	.container2 .box .imgBx {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.container2 .box .imgBx:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #16253d, #000);
		z-index: 1;
		opacity: 0;
		transition: 0.5s;
		mix-blend-mode: multiply;
	}
	.container2 .box:hover .imgBx:before {
		opacity: 1;
	}
	.container2 .box .imgBx img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.container2 .box .content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		padding: 20px;
		align-items: flex-end;
		box-sizing: border-box;
	}
	.container2 .box .content h2 {
		color: #fff;
		transition: 0.5s;
		text-transform: uppercase;
		margin-bottom: 5px;
		font-size: 20px;
		transform: translateY(200px);
		transition-delay: 0.3s;
	}
	.container2 .box:hover .content h2 {
		transform: translateY(0px);
	}
	.container2 .box .content p {
		color: #fff;
		transition: 0.5s;
		font-size: 14px;
		transform: translateY(200px);
		transition-delay: 0.4s;
	}
	.container2 .box:hover .content p {
		transform: translateY(0px);
	}
	/* informations cards */
</style>
