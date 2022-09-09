import { createStore } from "vuex";

export default createStore({
	state: {
		flight: null,
		flights: null,
		jet: null,
		jets: null,
		asc: true,
		jwt: null,
	},
	getters: {},
	mutations: {
		setJwt: (state, jwt) => {
			state.jwt = jwt;
		},
		setFlight: (state, flight) => {
			state.flight = flight;
		},
		setFlights: (state, flights) => {
			state.flights = flights;
		},
		setJet: (state, jet) => {
			state.jet = jet;
		},
		setJets: (state, jets) => {
			state.jets = jets;
		},
	},
	actions: {
		getFlight: async (context, id) => {
			fetch("https://capstone-api-mudassar.herokuapp.com/flights/" + id, {
				// mode: "no-cors",
			})
				.then((res) => res.json())
				.then((json) => context.commit("setFlight", json))
				.catch((err) => console.log(err.message));
		},
		getFlights: async (context) => {
			fetch(
				"https://capstone-api-mudassar.herokuapp.com/flights"
				// , {
				// 	mode: "no-cors",
				// }
			)
				.then((response) => response.json())
				.then((json) => context.commit("setFlights", json));
		},
		deleteFlight: async (context, id) => {
			await fetch("https://capstone-api-mudassar.herokuapp.com/flights/" + id, {
				// await fetch("http://localhost:3000/cars/" + id, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					context.dispatch("getFlights");
				});
		},
		editFlight: async (context, flight) => {
			console.log(flight);
			await fetch(
				"https://capstone-api-mudassar.herokuapp.com/flights/" +
					flight.flight_id,
				{
					method: "PATCH",
					body: JSON.stringify(flight),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					context.state.msg = data.msg;
					context.dispatch("getFlights", flight.flight_id);
				});
		},
	},
	modules: {},
});
