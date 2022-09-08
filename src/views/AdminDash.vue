<template>
	<section id="dashboard">
		<div id="container">
			<div id="sidebar">
				<div id="sidedetails1">
					<div id="img">
						<img
							src="https://i.postimg.cc/764d2NQp/IMG-20220807-134503-177.jpg"
							alt=""
						/>
					</div>
					<div id="name">
						<h1>Mudassar</h1>
						<h5>admin</h5>
					</div>
				</div>
				<div id="sidedetails2">
					<div id="sideitem">
						<div id="sideitems1">
							<div id="heading" style="text-align: start">
								<h1><i class="fa-solid fa-gear"></i> DASHBOARD</h1>
							</div>
							<br />
							<div id="stock">
								<div id="stock1">
									<div style="width: 65%">
										<p
											style="
												text-align: start;
												margin-left: 8px;
												margin-top: 10px;
												color: white;
												letter-spacing: 1px;
											"
										>
											Royale Watches™
										</p>
									</div>
									<div style="width: 30%; text-align: end; margin-top: 10px">
										<p style="color: green">+ 45%</p>
									</div>
								</div>
								<div id="stock2">
									<div style="width: 65%">
										<p
											style="
												text-align: start;
												margin-left: 8px;
												margin-top: 10px;
												color: white;
												letter-spacing: 1px;
											"
										>
											Oxford-Airlines™
										</p>
									</div>
									<div style="width: 30%; text-align: end; margin-top: 10px">
										<p style="color: green">+ 87%</p>
									</div>
								</div>
								<p style="color: #8c9399">powered by the JSE</p>
							</div>
						</div>
						<div id="sideitems2">
							<div id="update">
								<div id="mac">
									<img
										id="macbook"
										src="https://i.postimg.cc/yYBpbLsW/Mac-PNG-Photo-1.png"
										alt=""
									/>
								</div>
								<div id="updatetext">
									<p
										style="color: #8c9399; margin-bottom: 0; text-align: start"
									>
										Project: Cap-Stone
									</p>
									<p
										style="color: #8c9399; margin-bottom: 0; text-align: start"
									>
										Duration: 3 Weeks
									</p>
									<p style="color: #8c9399; text-align: start">
										Owner: Life Choices
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="mainpanel">
				<div id="top">
					<div id="buttons">
						<button id="btn" class="btn">
							<h1><i class="fa-solid fa-pencil"></i> EDIT</h1>
							<p>make changes to a flight</p></button
						><button id="btn" class="btn">
							<h1><i class="fa-solid fa-plus"></i> ADD</h1>
							<p>add a flight</p></button
						><button id="btn" class="btn">
							<h1><i class="fa-solid fa-trash"></i> DELETE</h1>
							<p>delete a flight</p></button
						><button id="btn" class="btn">
							<h1><i class="fa-solid fa-user"></i> ADD USER</h1>
							<p>grant access to someone else</p>
						</button>
					</div>
				</div>
				<div id="holder">
					<div id="middle1">
						<div id="cards">
							<div id="heading" style="text-align: start">
								<h1>
									<i class="fa-solid fa-arrow-pointer"></i>
									WEB - INTERACTION
								</h1>
							</div>
							<div id="bargraph">
								<section class="bar-graph bar-graph-horizontal bar-graph-one">
									<div class="bar-one">
										<div class="year">2021</div>
										<div class="bar" data-percentage="49.6%"></div>
									</div>
									<div class="bar-two">
										<div class="year">2022</div>
										<div class="bar" data-percentage="71%"></div>
									</div>
								</section>
								<h5 style="text-shadow: 1px 1px 2px black">
									<i class="fa-solid fa-chart-line"></i> INCREASE IN WEBSITE
									VISITS
								</h5>
							</div>
						</div>
					</div>
					<!-- <div id="middle2">
						<div id="cards">
							<div id="heading" style="text-align: start">
								<h1>
									<i class="fa-sharp fa-solid fa-plane-departure"></i> TOTAL
									FLIGHTS
								</h1>
							</div>
							<div id="flightno">
								<i class="fa-solid fa-plane-up"></i>
								<h1>21 TOTAL FLIGHTS</h1>
							</div>
						</div>
					</div> -->
					<div id="middle3">
						<div id="cards">
							<div id="heading" style="text-align: start">
								<h1>
									<i class="fa-solid fa-mobile-screen"></i> SOCIAL - MEDIA
									FOLLOWERS
								</h1>
							</div>
							<div id="sociali">
								<div id="social">
									<i class="fa-brands fa-instagram"></i>
									<h1><i class="fa-solid fa-user"></i> 2.7M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-twitter"></i>
									<h1><i class="fa-solid fa-user"></i> 1M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-tiktok"></i>
									<h1><i class="fa-solid fa-user"></i> 8.5M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-facebook"></i>
									<h1><i class="fa-solid fa-user"></i> 3.2M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-linkedin"></i>
									<h1><i class="fa-solid fa-user"></i> 200K</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="table">
					<div id="heading2">
						<h1><i class="fa-solid fa-database"></i> DATABASE</h1>
					</div>
					<div id="tabledet">
						<table>
							<thead>
								<tr>
									<th scope="col"><u>Flight ID</u></th>
									<th scope="col"><u>Flight Date</u></th>
									<th scope="col"><u>From Destination</u></th>
									<th scope="col"><u>FDA</u></th>
									<th scope="col"><u>To Destination</u></th>
									<th scope="col"><u>TDA</u></th>
									<th scope="col"><u>Jet ID</u></th>
									<th scope="col"><u>Duration</u></th>
									<th scope="col"><u>Img1</u></th>
									<th scope="col"><u>Img2</u></th>
									<th scope="col"><u>Img3</u></th>
									<th scope="col"><u>Img4</u></th>
									<th scope="col"><u>Boarding</u></th>
									<th scope="col"><u>Departure</u></th>
									<th scope="col"><u>QR</u></th>
									<th scope="col"><u>Information</u></th>
								</tr>
							</thead>
							<tbody
								v-for="flight in flights"
								:key="flight.id"
								:flight="flight"
							>
								<tr>
									<td data-label="Flight ID">{{ flight.flight_id }}</td>
									<td data-label="Flight Date">{{ flight.flight_date }}</td>
									<td data-label="From Destination">
										{{ flight.from_destination }}
									</td>
									<td data-label="FDA">{{ flight.fda }}</td>
									<td data-label="To Destination">
										{{ flight.to_destination }}
									</td>
									<td data-label="TDA">{{ flight.tda }}</td>
									<td data-label="Jet ID">{{ flight.jet_id }}</td>
									<td data-label="Duration">{{ flight.duration }}</td>
									<td data-label="Img1">{{ flight.img1 }}</td>
									<td data-label="Img2">{{ flight.img2 }}</td>
									<td data-label="Img3">{{ flight.img3 }}</td>
									<td data-label="Img4">{{ flight.img4 }}</td>
									<td data-label="Boarding">{{ flight.boarding }}</td>
									<td data-label="Departure">{{ flight.departure }}</td>
									<td data-label="QR">{{ flight.qr }}</td>
									<td data-label="Information">{{ flight.info }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
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
	#dashboard {
		background-color: #621e9b;
		height: 100vh;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		padding: 20px;
	}
	#container {
		height: 100%;
		width: 100%;
		/* border: 1px solid #2b2c4b; */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 10px;
		background-color: #020233;
		border: 1px solid #d9b44a;
		padding: 10px;
		border-radius: 12px;
	}
	#sidebar {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		width: 20%;
		/* background-color: white; */
		gap: 10px;
	}
	#sidedetails1 {
		height: 20%;
		width: 100%;
		background-color: #2b2c4b;
		display: flex;
		flex-direction: row;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#sidedetails2 {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-items: center;
		align-content: center;
		height: 79%;
		width: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#mainpanel {
		/* background-color: white; */
		height: 100%;
		width: 80%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 10px;
	}
	#top {
		width: 100%;
		height: 20%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#holder {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 23px;
	}
	#middle1 {
		width: 49%;
		height: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	/* #middle2 {
		width: 220px;
		height: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	} */
	#middle3 {
		width: 49%;
		height: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#table {
		width: 100%;
		height: 47%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	/* text styling */
	#img {
		height: 100%;
		width: 50%;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-items: center;
		align-items: center;
	}
	#img img {
		border: 5px solid #621e9b;
		border-radius: 50%;
		height: 75%;
		width: 75%;
		margin: auto;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#name {
		height: 100%;
		width: 50%;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: flex-start;
	}
	#name h1 {
		font-size: 25px;
		letter-spacing: 1px;
		color: white;
		margin-bottom: 0 !important;
		text-align: start;
		text-shadow: 1px 1px 2px black;
	}
	#name h5 {
		text-align: start;
		color: #8c939f;
	}
	#buttons {
		height: 100%;
		width: 100%;
		gap: 10px;
		padding-left: 10px;
		padding-right: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#btn {
		height: 50%;
		width: 23%;
		border-radius: 12px;
		background-color: #02022e;
		border: 3px solid #621e9b;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		text-align: start;
		display: flex;
		flex-direction: column;
		padding: 10px;
		transition: 0.4s ease;
	}
	#btn:hover {
		transition: 0.4s ease;
		background-color: #02022e98;
	}

	#btn h1 {
		color: white;
		font-size: 20px;
		letter-spacing: 1px;
		margin-bottom: 0;
	}
	#btn p {
		letter-spacing: 1pxs;
		color: #8c9399;
	}
	.fa-pencil {
		color: #d9b44a;
	}
	.fa-plus {
		color: #d9b44a;
	}
	.fa-laptop {
		color: #d9b44a;
	}
	.fa-user {
		color: #d9b44a;
	}
	#heading {
		height: 5%;
		width: 100%;
		/* border: 1px solid red; */
		padding-top: 10px;
		padding-left: 15px;
		/* border-bottom: 1px solid #d9b44a; */
	}
	#heading h1 {
		color: white;
		font-size: 15px;
		letter-spacing: 1px;
		text-shadow: 1px 1px 2px black;
	}
	.fa-arrow-pointer {
		font-size: 25px;
		color: #d9b44a;
	}
	.fa-gear {
		font-size: 25px;
		color: #d9b44a;
	}
	.fa-trash {
		color: #d9b44a;
	}
	.fa-chart-line {
		color: #d9b44a;
	}
	.fa-plane-departure {
		font-size: 25px;
		color: #d9b44a;
	}
	.fa-mobile-screen {
		font-size: 25px;
		color: #d9b44a;
	}
	#sociali {
		height: 160px;
		width: 100%;
		/* border: 1px solid red; */
		gap: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}

	#social {
		height: 100%;
		width: 30%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#social h1 {
		margin-top: 10px;
		color: white;
		font-size: 15px;
		letter-spacing: 1px;
		text-align: center;
		text-shadow: 1px 1px 2px black;
	}
	.fa-instagram {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 15px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.fa-twitter {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 15px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.fa-tiktok {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 15px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.fa-linkedin {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 15px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.fa-facebook {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 15px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#flightno {
		height: 160px;
		width: 100%;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.fa-plane-up {
		border-radius: 50%;
		font-size: 40px;
		display: inline-block;
		background: #02022e;
		color: white;
		line-height: 1;
		padding: 13px 0;
		text-align: center;
		height: 80px;
		width: 80px;
		transition: 0.3s;
		border: 5px solid #621e9b;
		transition: 1s;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.fa-plane-up {
		animation: rotation 8s infinite linear;
	}
	#flightno h1 {
		color: white;
		font-size: 15px;
		letter-spacing: 1px;
		margin-top: 10px;
		text-shadow: 1px 1px 2px black;
	}
	/*  text styling*/
	/* test */
	.fa-chart-simple {
		color: #d9b44a;
	}
	#bargraph {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		width: 70%;
		height: 160px;
		margin: auto;
		/* border: 1px solid red; */
	}
	#bargraph h5 {
		margin-top: 5px;
		font-size: 15px;
		color: white;
	}
	.bar-graph {
	}
	.bar-graph .year {
		-webkit-animation: fade-in-text 2.2s 0.1s forwards;
		-moz-animation: fade-in-text 2.2s 0.1s forwards;
		animation: fade-in-text 2.2s 0.1s forwards;
		opacity: 0;
		color: white;
		text-shadow: 1px 1px 2px black;
	}

	.bar-graph-horizontal {
		min-width: 500px;
	}

	.bar-graph-horizontal > div {
		float: left;
		margin-bottom: 8px;
		width: 100%;
	}

	.bar-graph-horizontal .year {
		float: left;
		margin-top: 8px;
		width: 50px;
	}

	.bar-graph-horizontal .bar {
		border-radius: 3px;
		height: 30px;
		float: left;
		overflow: hidden;
		position: relative;
		width: 0;
	}

	.bar-graph-one .bar::after {
		-webkit-animation: fade-in-text 2.2s 0.1s forwards;
		-moz-animation: fade-in-text 2.2s 0.1s forwards;
		animation: fade-in-text 2.2s 0.1s forwards;
		color: white;
		content: attr(data-percentage);
		text-align: center;
		text-shadow: 1px 1px 2px black;
	}

	.bar-graph-one .bar-one .bar {
		background-color: #4b1875c8;
		-webkit-animation: show-bar-one 1.2s 0.1s forwards;
		-moz-animation: show-bar-one 1.2s 0.1s forwards;
		animation: show-bar-one 1.2s 0.1s forwards;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	.bar-graph-one .bar-two .bar {
		background-color: #7532ac;
		-webkit-animation: show-bar-two 1.2s 0.2s forwards;
		-moz-animation: show-bar-two 1.2s 0.2s forwards;
		animation: show-bar-two 1.2s 0.2s forwards;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	/* Bar Graph Horizontal Animations */
	@-webkit-keyframes show-bar-one {
		0% {
			width: 0;
		}
		100% {
			width: 49.6%;
		}
	}

	@-webkit-keyframes show-bar-two {
		0% {
			width: 0;
		}
		100% {
			width: 71%;
		}
	}

	@-webkit-keyframes fade-in-text {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	/*  */
	/* table */
	#heading2 {
		height: 14%;
		width: 100%;
		padding-top: 10px;
		padding-left: 15px;
		/* border: 1px solid red; */
		/* border-bottom: 1px solid #d9b44a; */
	}
	#heading2 h1 {
		text-align: start;
		font-size: 18px;
		letter-spacing: 1px;
		color: white;
		text-shadow: 1px 1px 2px black;
	}
	.fa-database {
		font-size: 25px;
		color: #d9b44a;
	}
	#tabledet {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		height: 280px;
		width: 100%;
		padding: 10px;
		/* border: 1px solid red; */
	}
	table {
		/* margin-top: 5px; */

		/* border: 1px solid #d9b44a; */
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		height: 89%;
		width: 99%;
		border-radius: 12px;
		display: block;
		overflow-x: auto;
		white-space: nowrap;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	/* width */
	::-webkit-scrollbar {
		width: 10px;
		height: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #621e9b;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	tr {
		background-color: #21223a;
		color: white;
		/* border: 1px solid #ddd; */
		padding: 0.35em;
	}
	::-webkit-scrollbar {
		display: none;
		height: 4px;
		width: 4px;
		background: gray;
	}
	::-webkit-scrollbar-thumb:horizontal {
		display: none;
		background: #621e9b;
		border-radius: 10px;
	}
	table th {
		color: white;
		/* border-bottom: 1px solid #0f0f1f; */
	}
	tbody {
		/* border-left: 1px solid grey; */
		/* border-right: 1px solid grey; */
		/* border-bottom: 1px solid #2b2c4b; */
	}
	table th {
		color: white;
		padding: 0.625em;
		text-align: center;
		text-shadow: 1px 1px 2px black;
		letter-spacing: 1px;
	}

	table td {
		color: #8c8e8f;
		/* border-radius: 12px; */
		/* border: 1px solid #d9b44a; */
		padding: 0.625em;
		text-align: center;
		/* border-bottom: 1px solid #2b2c4b; */
	}

	table th {
		font-size: 0.85em;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		overflow: hidden;
	}

	@media screen and (max-width: 600px) {
		table {
			border: 0;
		}

		table caption {
			font-size: 1.3em;
		}

		table thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		table tr {
			/* border-bottom: 3px solid #ddd; */
			display: block;
			margin-bottom: 0.625em;
		}

		table td {
			/* border-bottom: 1px solid #ddd; */
			display: block;
			font-size: 0.8em;
			text-align: right;
		}

		table td::before {
			/*
	   * aria-label has no advantage, it won't be read inside a table
	   content: attr(aria-label);
	   */
			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		}

		table td:last-child {
			border-bottom: 0;
		}
	}

	/* general styling */
	body {
		font-family: "Open Sans", sans-serif;
		line-height: 1.25;
	}
	/* table */
	#sideitem {
		height: 100%;
		width: 100%;
		/* border: 1px solid red; */
	}
	#sideitems1 {
		height: 40%;
		width: 100%;
		display: flex;
		flex-direction: column;
		/* border: 1px solid green; */
		margin-bottom: 10px;
	}
	#sideitems2 {
		height: 60%;
		width: 100%start;
		/* border: 1px solid green; */
	}
	#stock {
		height: 80%;
		width: 90%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		/* border: 1px solid purple; */
		gap: 10px;
		margin: auto;
		margin-top: 20px;
	}
	#stock1 {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		border-radius: 12px;
		background-color: #020233;
		border: 3px solid #621e9b;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#stock2 {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		border-radius: 12px;
		background-color: #020233;
		border: 3px solid #621e9b;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#update {
		border-radius: 12px;
		height: 90%;
		width: 90%;
		/* border: 1px solid red; */
		margin: auto;
		background-color: #21223a;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#mac {
		height: 60%;
		width: 100%;
		/* border: 1px solid red; */
	}
	#macbook {
		height: 100%;
		width: 90%;
	}
	#updatetext {
		height: 30%;
		margin: auto;
		width: 58%;
		/* border: 1px solid red; */
	}
</style>
