<template>
	<section id="about">
		<div id="card">
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
				data-bs-ride="true"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src="https://i.postimg.cc/d0bPKskL/97-975401-jet-png.png"
							class="d-block w-100"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://picsum.photos/200/100"
							class="d-block w-100 h-100"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://picsum.photos/200/100"
							class="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>

		<div
			class="boarding-pass"
			v-for="flight in flight"
			:key="flight.flight_id"
			:flight="flight"
		>
			<header>
				<div class="flight">
					<small>flight</small>
					<strong>{{ flight.flight_id }}</strong>
				</div>
			</header>
			<section class="cities">
				<div class="city">
					<small>{{ flight.from_destination }}</small>

					<strong>{{ flight.fda }}</strong>
				</div>
				<div class="city">
					<small>{{ flight.to_destination }}</small>

					<strong>{{ flight.tda }}</strong>
				</div>
				<svg class="airplane">
					<use xlink:href="#airplane"></use>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="0"
					height="0"
					display="none"
				>
					<symbol id="airplane" viewBox="243.5 245.183 25 21.633">
						<g>
							<path
								fill="#d9b44a"
								d="M251.966,266.816h1.242l6.11-8.784l5.711,0.2c2.995-0.102,3.472-2.027,3.472-2.308
                              c0-0.281-0.63-2.184-3.472-2.157l-5.711,0.2l-6.11-8.785h-1.242l1.67,8.983l-6.535,0.229l-2.281-3.28h-0.561v3.566
                              c-0.437,0.257-0.738,0.724-0.757,1.266c-0.02,0.583,0.288,1.101,0.757,1.376v3.563h0.561l2.281-3.279l6.535,0.229L251.966,266.816z
                              "
							/>
						</g>
					</symbol>
				</svg>
			</section>
			<div class="body">
				<p>{{ flight.info }}</p>
				<h5><span> DURATION:</span> {{ flight.duration }}</h5>
				<h5><span>BOARDING:</span> {{ flight.boarding }}</h5>
				<h5><span>DEPARTURE:</span> {{ flight.departure }}</h5>
			</div>
			<div id="btn">
				<router-link to="/singleview"
					><button class="btn">ADD TO CART</button></router-link
				>
				<router-link to="/cart"
					><button class="btn">CHECK OUT</button></router-link
				>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		props: ["id"],
		// components: {},
		computed: {
			flight() {
				return this.$store.state.flight;
				//Returning the current state of the store
				//Must have when looping through properties
			},
		},
		mounted() {
			this.$store.dispatch("getFlight", this.id);
			// fetch("https://joint-ecom.herokuapp.com/products")
			//   .then((res) => res.json())
			//   .then((data) => (this.products = data));
		},
	};
</script>
<style scoped>
	#about {
		background-color: #222222;
		padding: 50px;
		height: 85vh;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
	}
	span {
		color: #d9b44a;
		text-shadow: 1px 1px 2px black;
	}
	#card {
		background: #222c1d;
		width: 60%;
		height: 98%;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}
	.body p {
		margin-top: 9px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		text-align: center;
		margin-bottom: 40px;
		font-size: 14px;
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		color: rgba(255, 255, 255, 0.507);
		text-shadow: 1px 1px 2px black;
	}
	.body h5 {
		font-size: 14px;
		text-align: start;
		padding-left: 20px;
	}
	.btn {
		background: #d9b44a;
		box-shadow: 1px 1px 2px black;
		transition: 0.3s ease-in;
	}
	.btn:hover {
		border: none;
		color: black;
		transition: 0.3s ease-in;
	}
	#btn {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		align-content: center;
	}
	.carousel {
		height: 100%;
		width: 100%;
	}
	.carousel-inner {
		border-top-left-radius: 12px;
	}
	.fa-plane-up {
		color: #d9b44a;
	}

	/* #card {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-content: center;
			width: 250px;
			height: 200px;
			border-bottom-right-radius: 10%;
			border-bottom-left-radius: 10%;
		} */
	.boarding-pass {
		width: 350px;
		min-height: 382px;
		background: #d2cabe;
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		/* overflow: hidden; */
		text-transform: uppercase;
		transition: 0.2s;
		/*--------------------
	  Header
	  --------------------*/
		/*--------------------
	  Cities
	  --------------------*/
		/*--------------------
	  Infos
	  --------------------*/
		/*--------------------
	  Strap
	  --------------------*/
	}
	.boarding-pass small {
		display: block;
		font-size: 11px;
		color: #a2a9b3;
		margin-bottom: 2px;
	}
	.boarding-pass strong {
		font-size: 15px;
		display: block;
	}
	.boarding-pass header {
		background: #222c1d;
		padding: 12px 20px;
		height: 53px;
		border-top-right-radius: 12px;
		border-left: 1px solid #d9b44a;
		border-bottom: 1px solid #d9b44a;
	}
	.boarding-pass header .logo {
		float: left;
		width: 106px;
		height: 41px;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		font-size: 20px;
		color: white;
		letter-spacing: 1px;
	}
	.boarding-pass header .flight {
		float: right;
		color: #fff;
		text-align: right;
	}
	.boarding-pass header .flight small {
		font-size: 8px;
		margin-bottom: 2px;
		opacity: 0.8;
	}
	.boarding-pass header .flight strong {
		font-size: 18px;
	}
	.boarding-pass .cities {
		position: relative;
	}
	.boarding-pass .cities::after {
		content: "";
		display: table;
		clear: both;
	}
	.boarding-pass .cities .city {
		padding: 20px 18px;
		float: left;
	}
	.boarding-pass .cities .city:nth-child(2) {
		float: right;
	}
	.boarding-pass .cities .city strong {
		font-size: 40px;
		font-weight: 300;
		line-height: 1;
	}
	.boarding-pass .cities .city small {
		margin-bottom: 0px;
		margin-left: 3px;
	}
	.boarding-pass .cities .airplane {
		position: absolute;
		width: 30px;
		height: 25px;
		top: 57%;
		left: 30%;
		opacity: 0;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		-webkit-animation: move 4s infinite;
		animation: move 4s infinite;
	}

	@-webkit-keyframes move {
		40% {
			left: 50%;
			opacity: 1;
		}
		100% {
			left: 70%;
			opacity: 0;
		}
	}
	@keyframes move {
		40% {
			left: 50%;
			opacity: 1;
		}
		100% {
			left: 70%;
			opacity: 0;
		}
	}
</style>
