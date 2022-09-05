<template>
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
						<div id="title2"><p><i class="fa-solid fa-chart-simple"></i> Top 10 Most Visited Cities</p></div>
						<div id="title1"><h1>Travel In Style</h1></div>
						<div id="title2"><p><i class="fa-sharp fa-solid fa-plane-departure"></i>  200+ Flights Per Year</p></div>
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
</template>

<script></script>
<style scoped>
	* {
		letter-spacing: 1px;
		padding: 0;
		margin: 0;
	}
	#home {
		background-color: rgb(56, 53, 53);
		height: 92vh;
		/* information section */
	}
	#testimonialsec {
		background-color: rgb(229, 218, 218);
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
		width: 55%;
		background-color: #16253d;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;	}
	#card2 {
		height: 100%;
		width: 20%;
		background-color: #16253d;
		position: relative;
       text-align: center;
       color: white;
       text-shadow: 3px 3px black;
	   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;	}

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
.centered h1{
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
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#card22 {
		height: 100%;
		width: 55%;
		background-color: #000;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
	#title2{
		height: 20%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	#title2 p{
color: white;
letter-spacing: 1px;
	}
	.fa-chart-simple{
		color: #d9b44a;
	}
	.fa-plane-departure{
		color: #d9b44a;
	}
	#title1 h1 {
		font-size: 30px;
		color: white;
	}
	/* information section */
</style>
