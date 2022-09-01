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
	},
	modules: {},
});
