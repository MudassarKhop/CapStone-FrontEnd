<template>
	<section id="footer">
		<!-- <div id="footer1">
			<div class="follow">
				<h1>Follow Us</h1>
				<div class="icons">
					<a href="https://instagram.com" target="_blank"
						><i class="fa-brands fa-instagram"></i
					></a>
					<a href="https://whatsapp.com" target="_blank"
						><i class="fa-brands fa-whatsapp"></i
					></a>
					<a href="https://facebook.com" target="_blank"
						><i class="fa-brands fa-facebook"></i
					></a>
					<a href="https://gmail.com" target="_blank"
						><i class="fa-solid fa-at"></i
					></a>
					<a href="https://linkedin.com" target="_blank"
						><i class="fa-brands fa-linkedin"></i
					></a>
				</div>
			</div>
		</div> -->
		<div id="footer2">
			<div id="boxes1">
				<h1><i class="fa-solid fa-plane-up"></i> OXFORD-AIRLINES</h1>
				<div class="paragraph1">
					<p>Coming soon to Google Playstore and App store.</p>
					<div id="img">
						<a href="https://play.google.com" target="_blank">
							<img
								height="40"
								width="120"
								src="https://i.postimg.cc/0NwDcrD6/png-monster-28111.png"
								alt=""
							/>
						</a>
						<a href="https://apple.com/app-store/" target="_blank">
							<img
								height="40"
								width="120"
								src="https://i.postimg.cc/fRFYcYtn/png-monster-281111.png"
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="gap"></div>
			<div id="boxes">
				<div class="h1box">
					<h1>Our Locations</h1>
				</div>
				<div class="content">
					<div class="paragraph">
						<p>
							Come meet us at one of our luxurious offices around the world.
						</p>
					</div>
					<div style="margin-top: 10px" id="ul">
						<ul>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/offices"> Cape Town</router-link>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/offices"> Milan</router-link>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/offices"> London</router-link>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/offices"> Paris</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div id="boxes">
				<div class="h1box">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<div class="paragraph">
						<p>Learn more about us through what others have to say.</p>
					</div>
					<div style="margin-top: 10px" id="ul">
						<ul>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to=""> Certification</router-link>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to=""> FAQs</router-link>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/about/#testimonials">
									Testimonials</router-link
								>
							</li>
							<li>
								<i class="fa-solid fa-chevron-right"></i>
								<router-link to="/about/#pilots"> Pilots</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div id="boxes">
				<div class="h1box">
					<h1>Development</h1>
				</div>
				<div class="content">
					<div class="paragraph">
						<p>Contact our admin to start working on our website.</p>
					</div>
					<div style="margin-top: 10px" id="ul">
						<ul>
							<li>
								<router-link to="/admin"
									><button id="admin" class="btn">
										Admin Login
									</button></router-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="line"></div>
		</div>
		<div id="footer3">
			<div class="copyright">
				<h1>
					ALL RIGHTS RESERVED/ <i class="fa-solid fa-plane-up"></i>
					OXFORD-AIRLINES © 2022
				</h1>
			</div>
		</div>
	</section>
</template>
<script>
	export default {};
</script>
<style scoped>
	#footer {
		min-height: 40vh;
		background-color: #16253d;
		width: 100%;
	}
	#footer2 {
		border-top: 1px solid #d9b44a;
		min-height: 40vh;
		background-color: #16253d;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		gap: 20px;
	}
	#footer3 {
		min-height: 5vh;
		width: 100%;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-items: center;
		align-items: center;
	}
	.gap {
		width: 60px;
	}
	.follow {
		width: 300px;
		height: 130px;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-items: center;
		align-items: center;
		padding: 10px;
		color: white;
	}
	.follow h1 {
		font-size: 25px;
		margin-bottom: 0;
	}
	.follow1 h1 {
		font-size: 25px;
		margin-bottom: 0;
	}

	.follow1 {
		width: 500px;
		height: 130px;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-items: center;
		align-items: center;
		padding: 10px;
		color: white;
		border-bottom: 1px solid #d9b44a;
	}
	.icons {
		height: 80%;
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
	}
	.fa-linkedin {
		font-size: 25px;
		display: inline-block;
		background: #2c3e50;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		/* border-radius: 50%; */
		text-align: center;
		width: 40px;
		height: 40px;
		transition: 0.3s;
		/* border: 1px solid #b1b942; */
		transition: 1s;
	}
	.fa-whatsapp {
		font-size: 25px;
		display: inline-block;
		background: #2c3e50;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		/* border-radius: 50%; */
		text-align: center;
		width: 40px;
		height: 40px;
		transition: 0.3s;
		/* border: 1px solid #b1b942; */
		transition: 1s;
	}
	.fa-instagram {
		font-size: 25px;
		display: inline-block;
		background: #2c3e50;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		/* border-radius: 50%; */
		text-align: center;
		width: 40px;
		height: 40px;
		transition: 0.3s;
		/* border: 1px solid #b1b942; */
		transition: 1s;
	}
	.fa-facebook {
		font-size: 25px;
		display: inline-block;
		background: #2c3e50;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		/* border-radius: 50%; */
		text-align: center;
		width: 40px;
		height: 40px;
		/* border: 1px solid #b1b942; */
		transition: 1s;
	}
	.fa-at {
		font-size: 25px;
		display: inline-block;
		background: #2c3e50;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		/* border-radius: 50%; */
		text-align: center;
		width: 40px;
		height: 40px;
		/* border: 1px solid #b1b942; */
		transition: 1s;
	}
	.fa-at:hover {
		color: #8a0606;
		background-color: white;
		transition: 1s;
	}
	.fa-linkedin:hover {
		color: #0077b5;
		background-color: white;
		transition: 1s;
	}
	.fa-whatsapp:hover {
		background-color: #28d347;
		color: white;
		transition: 1s;
	}
	.fa-facebook:hover {
		background-color: white;
		color: #4867aa;
		transition: 1s;
	}
	.fa-twitter:hover {
		background-color: white;
		color: #1da1f2;
		transition: 1s;
	}
	.fa-whatsapp:hover {
		background-color: #28d347;
		color: white;
		transition: 1s;
	}
	.fa-instagram:hover {
		background: radial-gradient(
			circle at 33% 100%,
			#fed373 4%,
			#f15245 30%,
			#d92e7f 62%,
			#9b36b7 85%,
			#515ecf
		);
		color: white;
		transition: 1s;
	}
	.fa-plane-up {
		color: #d9b44a;
	}
	.fa-chevron-right {
		color: #d9b44a;
	}
	#boxes {
		min-height: 60%;
		width: 20%;
		/* border: 1px solid red; */
		padding: 10px;
	}
	#img {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	#boxes1 {
		min-height: 60%;
		width: 20%;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	#boxes1 h1 {
		font-size: 25px;
		color: white;
		text-align: center;
		margin-bottom: 10px;
	}
	.h1box {
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: start;
		align-content: flex-start;
	}
	.h1box h1 {
		font-size: 25px;
		color: white;
		margin-bottom: 0;
	}
	.content {
		height: 80%;
		width: 100%;
	}

	.paragraph {
		height: 40%;
		text-align: start;
		color: rgba(255, 255, 255, 0.507);
		margin-bottom: -10px;
	}
	.paragraph1 {
		font-size: 14px;
		height: 40%;
		text-align: center;
		color: rgba(255, 255, 255, 0.507);
	}
	ul {
		height: 40%;
		color: rgba(255, 255, 255, 0.752);
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-items: start;
		align-items: flex-start;
		margin: 0;
		padding: 0;
	}
	ul a {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.752);
		transition: 0.3s ease-in;
	}
	ul a:hover {
		text-decoration: none;
		color: #d9b44a;
		transition: 0.3s ease-in;
	}
	#footer3 {
		height: 5vh;
		background-color: #223655;
		padding: 10px;
	}
	.copyright {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	.copyright h1 {
		letter-spacing: 1px;
		font-size: 10px;
		color: white;
		margin: 0;
	}
	.line {
		height: 80%;
		width: 2px;
		background-color: #d9b44a;
	}
	#admin {
		border: 1px solid #d9b44a;
		background-color: #c69c29;
		color: white;
		text-shadow: 1px 1px black;
		letter-spacing: 1px;
		transition: 0.2s ease;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#admin:hover {
		background-color: #d9b34acc;
		transition: 0.2s ease;
	}
	@media only screen and (max-width: 1330px) {
		#footer {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-items: center;
			align-items: center;
		}
		#footer2 {
			margin-top: 20px;
			gap: 20px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-items: center;
			align-items: center;
		}
		#footer3 {
			width: 100%;
		}
		.gap {
			display: none;
		}
		#boxes {
			width: 80%;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-content: center;
		}
		#boxes1 {
			width: 80%;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-items: center;
			align-items: center;
		}
		.h1box {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-items: start;
			align-items: flex-start;
		}
		.paragraph {
			text-align: start;
		}
		ul {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-items: start;
			align-items: flex-start;
			/* display: inline-block;
			text-align: left; */
		}
	}
</style>
