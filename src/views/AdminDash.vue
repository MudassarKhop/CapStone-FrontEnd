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
				<div id="sidedetails2"></div>
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
							<h1><i class="fa-solid fa-laptop"></i> WEBSITE</h1>
							<p>go back to the live site</p></button
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
									<i class="fa-solid fa-arrow-pointer"></i> WEB - INTERACTION
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
								<h5>
									<i class="fa-solid fa-chart-simple"></i> INCREASE IN WEBSITE
									VISITS
								</h5>
							</div>
						</div>
					</div>
					<div id="middle2">
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
					</div>
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
									<h1><i class="fa-solid fa-user"></i> <span></span>M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-twitter"></i>
									<h1><i class="fa-solid fa-user"></i> <span></span>M</h1>
								</div>
								<div id="social">
									<i class="fa-brands fa-tiktok"></i>
									<h1><i class="fa-solid fa-user"></i> <span></span>M</h1>
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
									<th scope="col">Account</th>
									<th scope="col">Due Date</th>
									<th scope="col">Amount</th>
									<th scope="col">Period</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td data-label="Account">Visa - 3412</td>
									<td data-label="Due Date">04/01/2016</td>
									<td data-label="Amount">$1,190</td>
									<td data-label="Period">03/01/2016 - 03/31/2016</td>
								</tr>
								<tr>
									<td scope="row" data-label="Account">Visa - 6076</td>
									<td data-label="Due Date">03/01/2016</td>
									<td data-label="Amount">$2,443</td>
									<td data-label="Period">02/01/2016 - 02/29/2016</td>
								</tr>
								<tr>
									<td scope="row" data-label="Account">Corporate AMEX</td>
									<td data-label="Due Date">03/01/2016</td>
									<td data-label="Amount">$1,181</td>
									<td data-label="Period">02/01/2016 - 02/29/2016</td>
								</tr>
								<tr>
									<td scope="row" data-label="Acount">Visa - 3412</td>
									<td data-label="Due Date">02/01/2016</td>
									<td data-label="Amount">$842</td>
									<td data-label="Period">01/01/2016 - 01/31/2016</td>
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
	export default {};
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
		gap: 10px;
	}
	#middle1 {
		width: 458px;
		height: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#middle2 {
		width: 220px;
		height: 100%;
		background-color: #2b2c4b;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#middle3 {
		width: 458px;
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
		text-align: start;
		display: flex;
		flex-direction: column;
		padding: 10px;
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
		border-bottom: 1px solid #d9b44a;
	}
	#heading h1 {
		color: white;
		font-size: 15px;
		letter-spacing: 1px;
	}
	.fa-arrow-pointer {
		font-size: 25px;
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
	}
	.fa-plane-up {
		animation: rotation 8s infinite linear;
	}
	span::after {
		content: counter(count);
		animation: counter 2s linear infinite alternate;
		counter-reset: count 1;
	}

	@keyframes counter {
		10% {
			counter-increment: count 1;
		}
		20% {
			counter-increment: count 2;
		}
		30% {
			counter-increment: count 3;
		}
		40% {
			counter-increment: count 4;
		}
		50% {
			counter-increment: count 5;
		}
		60% {
			counter-increment: count 6;
		}
		70% {
			counter-increment: count 7;
		}
		80% {
			counter-increment: count 8;
		}
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
	#flightno h1 {
		color: white;
		font-size: 15px;
		letter-spacing: 1px;
		margin-top: 10px;
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
		align-content: center;
		height: 160px;
		/* border: 1px solid red; */
	}
	#bargraph h5 {
		margin-top: 5px;
		font-size: 15px;
		color: white;
	}
	.bar-graph {
		margin-left: 20px;
	}
	.bar-graph .year {
		-webkit-animation: fade-in-text 2.2s 0.1s forwards;
		-moz-animation: fade-in-text 2.2s 0.1s forwards;
		animation: fade-in-text 2.2s 0.1s forwards;
		opacity: 0;
		color: white;
	}

	.bar-graph-horizontal {
		max-width: 380px;
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
		color: #fff;
		content: attr(data-percentage);
		text-align: center;
	}

	.bar-graph-one .bar-one .bar {
		background-color: #4b1875c8;
		-webkit-animation: show-bar-one 1.2s 0.1s forwards;
		-moz-animation: show-bar-one 1.2s 0.1s forwards;
		animation: show-bar-one 1.2s 0.1s forwards;
	}

	.bar-graph-one .bar-two .bar {
		background-color: #7532ac;
		-webkit-animation: show-bar-two 1.2s 0.2s forwards;
		-moz-animation: show-bar-two 1.2s 0.2s forwards;
		animation: show-bar-two 1.2s 0.2s forwards;
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
		border-bottom: 1px solid #d9b44a;
	}
	#heading2 h1 {
		text-align: start;
		font-size: 18px;
		letter-spacing: 1px;
		color: white;
	}
	.fa-database {
		font-size: 25px;
		color: #d9b44a;
	}
	#tabledet {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-items: center;
		align-content: center;
		height: 280px;
		width: 100%;
		padding: 10px;
		/* border: 1px solid red; */
	}
	table {
		margin-top: 10px;

		/* border: 1px solid #d9b44a; */
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		table-layout: fixed;
	}

	tr {
		background-color: transparent;
		border-radius: 12px;
		/* border: 1px solid #ddd; */
		padding: 0.35em;
	}

	table th,
	table td {
		color: white;
		/* border-radius: 12px; */

		padding: 0.625em;
		text-align: center;
	}

	table th {
		font-size: 0.85em;
		letter-spacing: 0.1em;
		text-transform: uppercase;
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
</style>
