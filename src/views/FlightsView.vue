<template>
	<section id="about">
		<div class="display-Flights">
			<flightcards
				v-for="flight in flights"
				:key="flight.id"
				:flight="flight"
			/>
		</div>
	</section>
</template>
<script>
	import flightcards from "@/components/flightcard.vue";
	export default {
		components: { flightcards },
		mounted() {
			this.$store.dispatch("getFlights");
			// fetch("https://joint-ecom.herokuapp.com/products")
			//   .then((res) => res.json())
			//   .then((data) => (this.products = data));
		},
		computed: {
			flights() {
				return this.$store.state.flights;
				//Returning the current state of the store
				//Must have when looping through properties
			},
		},
	};
</script>
<style scoped>
	#about {
		background-color: #222222;
		min-height: 100vh;
	}
	.display-Flights {
		gap: 90px;
		padding: 50px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		width: 100%;
	}
</style>
