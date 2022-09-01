<template>
	<section id="about">
		<div
			id="card"
			class="card"
			v-for="flight in flight"
			:key="flight.flight_id"
			:flight="flight"
		>
			<!-- <img :src="item.image" class="car-img mb-2" alt="Picture of item" /> -->
			<p>{{ flight.flight_id }}</p>
			<h5 class="text-black">{{ flight.flight_date }}</h5>
			<p class="text-secondary">
				{{ flight.from_destination }}
			</p>
			<p>{{ flight.to_destination }}</p>
			<h5>{{ flight.duration }}</h5>
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
		height: 100vh;
	}
	#card {
		width: 300px;
		height: 400px;
	}
</style>
