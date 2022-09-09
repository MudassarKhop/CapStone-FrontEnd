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
		addFlight: async (context, payload) => {
			await fetch("https://capstone-api-mudassar.herokuapp.com/flights/", {
				// await fetch("http://localhost:3000/cars", {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					"x-auth-jwt": context.state.jwt,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					context.state.msg = data.msg;
					context.dispatch("getFlights");
				});
		},
		// login: async (context, payload) => {
		// 	await fetch(heroku + "/users", {
		// 		// await fetch("http://localhost:3000/users", {
		// 		method: "PATCH",
		// 		body: JSON.stringify(payload),
		// 		headers: {
		// 			"Content-type": "application/json; charset=UTF-8",
		// 			"x-auth-jwt": context.state.jwt,
		// 		},
		// 	})
		// 		.then((res) => res.json())
		// 		.then((data) => {
		// 			// console.log(data);
		// 			if (data.msg === "Login Successful") {
		// 				context.state.msg = data.msg;
		// 				context.commit("setUser", data.user);
		// 				context.commit("setjwt", data.jwt);
		// 				context.dispatch("setAdmin");
		// 			} else {
		// 				context.state.msg = data.msg;
		// 				setTimeout(() => {
		// 					context.state.msg = null;
		// 				}, 3000);
		// 			}
		// 		});
		// },
		login: async (context, payload) => {
			let res = await fetch(
				`https://capstone-api-mudassar.herokuapp.com/passengers/login`,
				{
					method: "POST",
					mode: "no-cors",
					body: JSON.stringify({
						pemail: payload.pemail,
						password: payload.password,
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			let data = await res.json();
			console.log(data);
			if (data.jwt) {
				context.commit("setJwt", data.jwt);
				// Verify jwt
				fetch("https://capstone-api-mudassar.herokuapp.com/passengers/verify", {
					headers: {
						"Content-Type": "application/json",
						"x-auth-token": data.jwt,
					},
				})
					.then((res) => res.json())
					.then((user) => {
						context.commit("setUser", user);
						console.log(user);
						context.dispatch("getPost", user);
					});
			} else {
				alert("User not found");
			}
		},
	},
	modules: {},
});
