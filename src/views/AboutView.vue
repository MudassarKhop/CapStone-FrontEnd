<template>
	<section id="about"> 
		<div class="mother">
			<div id="child1">
				<div class="heading">
					<h1>Our Vision</h1>
				</div>
				<div class="info">
					<p> <span>“</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus amet nesciunt aspernatur nostrum officia a repudiandae, obcaecati alias optio. Et enim culpa id suscipit. Temporibus autem doloremque exercitationem qui distinctio!</p>
					<br>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam iusto quasi alias reprehenderit vel earum ipsa! Veritatis iure perferendis cumque! Distinctio debitis hic odio deleniti voluptas error eaque deserunt sit!</p>
					<br>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse earum ad illo sint quo modi repudiandae amet vel consequuntur reprehenderit ratione numquam repellendus aspernatur eos sapiente unde, consequatur blanditiis.</p>
					<br>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, laudantium corporis dicta iste exercitationem ullam consectetur quisquam nostrum, harum amet ab optio. Modi accusamus ipsum illum voluptate quae distinctio voluptates? <span>”</span></p>
				</div>
			</div>
			<div id="child2">
				<div class="heading2">
					<h1>Pilot's Log</h1>
				</div>
				<div id="info2">
					<p> <span>“</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus amet nesciunt aspernatur nostrum officia a repudiandae, obcaecati alias optio. Et enim culpa id suscipit. Temporibus autem doloremque exercitationem qui distinctio!</p>
					<br>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam iusto quasi alias reprehenderit vel earum ipsa! Veritatis iure perferendis cumque! Distinctio debitis hic odio deleniti voluptas error eaque deserunt sit!</p>
					<br>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse earum ad illo sint quo modi repudiandae amet vel consequuntur reprehenderit ratione numquam repellendus aspernatur eos sapiente unde, consequatur blanditiis.</p>
					<br>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, laudantium corporis dicta iste exercitationem ullam consectetur quisquam nostrum, harum amet ab optio. Modi accusamus ipsum illum voluptate quae distinctio voluptates? <span>”</span></p>
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
		</div>
	</section>
</template>
<style scoped>
	* {
		letter-spacing: 1px;
		padding: 0;
		margin: 0;
	}
	#about {
		background-color: #222222;
		height: 90vh;
		display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;	}
	.mother{
		width: 90%;
		height: 80%;
		/* border: 1px solid red; */
		display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
	}
	#child1{
     width: 50%;
	 height: 100%;
	 /* border:1px solid green */
	}
	.heading{
		height:15%;
		width: 90%;
		/* border: 1px solid yellow; */
		display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: end;
align-content: center;
color: white;

	}
	.heading2{
		margin-left:10% ;
		height:15%;
		width: 90%;
		/* border: 1px solid yellow; */
		display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: start;
align-content: center;
color: white;

	}
.info{
	height: 85%;
	display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
width: 90%;
}
#info2{
	margin-left: 10%;
	height: 85%;
	display:flex;
	flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
width: 90%;
/* border: 1px solid purple; */
}
span{
	font-size: 40px;
	font-family:cursive;
	color: #d9b44a;
}
.info p{
	font-size: 20px;
	text-align: end;
	color: #84939f;
}
#info2 p{
	font-size: 20px;
	text-align: start;
	color: #84939f;
}
	#child2{
width: 50%;
height: 100%;
/* border:1px solid green; */
	}
	/* informations cards */
	#slides {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 50vh;
		background-color: rgb(200, 200, 200);
	}
	.container2 {
		position: relative;
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
		width: 280px;
		height: 275px;
		background: #000;
		transition: 0.5s;
		transform-style: preserve-3d;
		overflow: hidden;
		margin-right: 20px;
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
