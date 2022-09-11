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
						<div
							class="modal fade"
							id="exampleModalToggle2"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel2"
							tabindex="-1"
						>
							<div class="modal-dialog modal-dialog-centered modal-xl">
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title text-light"
											id="exampleModalToggleLabel2"
										>
											<i class="fa-solid fa-pencil"></i> EDIT
										</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div class="modal-body">
                                        <table>
							<thead>
								<tr>
                                    <th scope="col">SAVE CHANGES</th>
									<th scope="col">Passenger ID</th>
									<th scope="col">Passenger Name</th>
									<th scope="col">Passenger Surname</th>
									<th scope="col">Passenger Email</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Role</th>
								</tr>
							</thead>
							<tbody
								v-for="passenger in passengers"
								:key="passenger.id"
								:passenger="passenger"
							>
								<tr>
                                    <td data-label="Edit">
														<button class="btn">
															<a
																@click="
																	this.$store.dispatch('editPassenger', passenger)
																"
																><i class="fa-solid fa-pencil"></i
															></a>
														</button>
													</td>
									<td data-label="Passenger ID"><input
															v-model="passenger.passenger_id"
															type="text"
															class="form-control"
															required
														/></td>
									<td data-label="Passenger Name"><input
															v-model="passenger.pname"
															type="text"
															class="form-control"
															required
														/></td>
									<td data-label="Passenger Surname">
										<input
															v-model="passenger.psurname"
															type="text"
															class="form-control"
															required
														/>
									</td>
									<td data-label="Passenger Email"><input
															v-model="passenger.pemail"
															type="text"
															class="form-control"
															required
														/></td>
									<td data-label="Passenger Password">
										<input
															v-model="passenger.password"
															type="text"
															class="form-control"
															required
														/>
									</td>
									<td data-label="Phone Number"><input
															v-model="passenger.pcell"
															type="text"
															class="form-control"
															required
														/></td>
									<td data-label="Passenger Role"><input
															v-model="passenger.prole"
															type="text"
															class="form-control"
															required
														/></td>
								</tr>
							</tbody>
						</table>
									</div>
									<div class="modal-footer"></div>
								</div>
							</div>
						</div>
						<button
							id="btn"
							class="btn"
							data-bs-target="#exampleModalToggle2"
							data-bs-toggle="modal"
						>
							<h1><i class="fa-solid fa-pencil"></i> EDIT</h1>
							<p>make changes to a user</p>
						</button>
						<div
							class="modal fade"
							id="exampleModalToggle"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel"
							tabindex="-1"
						>
							<div class="modal-dialog modal-dialog-centered modal-md">
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title text-light"
											id="exampleModalToggleLabel"
										>
											<i class="fa-solid fa-plus"></i> ADD
										</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div class="modal-body">
										<div id="adduser">
											<div id="adduser1">
												<label
													style="text-align: start"
													class="form-label text-light"
													>Flight ID :</label
												>
												<input
													id="adduseri"
													v-model="flight_id"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Flight Date :</label
												>
												<input
													id="adduseri"
													v-model="flight_date"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>From Destination :</label
												>
												<input
													id="adduseri"
													v-model="from_destination"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>FDA :</label
												>
												<input
													id="adduseri"
													v-model="fda"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>To Destination :</label
												>
												<input
													id="adduseri"
													v-model="to_destination"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>TDA :</label
												>
												<input
													id="adduseri"
													v-model="tda"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Jet ID :</label
												>
												<input
													id="adduseri"
													v-model="jet_id"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Duration :</label
												>
												<input
													id="adduseri"
													v-model="duration"
													type="text"
													class="form-control"
												/>
											</div>
											<div id="adduser2">
												<label
													style="text-align: start"
													class="form-label text-light"
													>IMG 1 :</label
												>
												<input
													id="adduseri"
													v-model="img1"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>IMG 2 :</label
												>
												<input
													id="adduseri"
													v-model="img2"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>IMG 3 :</label
												>
												<input
													id="adduseri"
													v-model="img3"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>IMG 4 :</label
												>
												<input
													id="adduseri"
													v-model="img4"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Boarding :</label
												>
												<input
													id="adduseri"
													v-model="boarding"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Departure :</label
												>
												<input
													id="adduseri"
													v-model="departure"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>QR :</label
												>
												<input
													id="adduseri"
													v-model="qr"
													type="text"
													class="form-control"
												/>
												<label
													style="text-align: start"
													class="form-label text-light"
													>Information :</label
												>
												<input
													id="adduseri"
													v-model="info"
													type="text"
													class="form-control"
												/>
											</div>
											<div id="addbtn">
												<button
													type="button"
													@click="addProd"
													class="btn"
													data-bs-dismiss="modal"
												>
													ADD PRODUCT
												</button>
											</div>
										</div>
									</div>
									<div class="modal-footer"></div>
								</div>
							</div>
						</div>
						<div
							class="modal fade"
							id="exampleModalToggle2"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel2"
							tabindex="-1"
						></div>
						<button
							id="btn"
							class="btn"
							data-bs-toggle="modal"
							href="#exampleModalToggle"
							role="button"
						>
							<h1><i class="fa-solid fa-plus"></i> Register</h1>
							<p>register a user</p>
						</button>
						<div
							class="modal fade"
							id="exampleModalToggle3"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel"
							tabindex="-1"
						>
							<div class="modal-dialog modal-dialog-centered modal-xl">
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title text-light"
											id="exampleModalToggleLabel"
										>
											<i class="fa-solid fa-trash"></i> DELETE
										</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div class="modal-body">
                                        <table>
							<thead>
								<tr>
                                    <th scope="col"><u>Delete</u></th>
									<th scope="col">Passenger ID</th>
									<th scope="col">Passenger Name</th>
									<th scope="col">Passenger Surname</th>
									<th scope="col">Passenger Email</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Role</th>
								</tr>
							</thead>
							<tbody
								v-for="passenger in passengers"
								:key="passenger.id"
								:passenger="passenger"
							>
								<tr>
                                    <td data-label="Delete">
														<a
															class="btn"
															@click="
																this.$store.dispatch(
																	'deletePassenger',
																	passenger.passenger_id
																)
															"
														>
															<i class="fa-solid fa-trash"></i>
														</a>
													</td>
									<td data-label="Passenger ID">{{ passenger.passenger_id }}</td>
									<td data-label="Passenger Name">{{ passenger.pname }}</td>
									<td data-label="Passenger Surname">
										{{ passenger.psurname }}
									</td>
									<td data-label="Passenger Email">{{ passenger.pemail }}</td>
									<td data-label="Passenger Password">
										{{ passenger.password }}
									</td>
									<td data-label="Phone Number">{{ passenger.pcell }}</td>
									<td data-label="Passenger Role">{{ passenger.prole }}</td>
								</tr>
							</tbody>
						</table>
									</div>
									<div class="modal-footer"></div>
								</div>
							</div>
						</div>
						<button
							id="btn"
							class="btn"
							data-bs-toggle="modal"
							href="#exampleModalToggle3"
							role="button"
						>
							<h1><i class="fa-solid fa-trash"></i> DELETE</h1>
							<p>delete a flight</p>
						</button>

						<button
							id="btn"
							class="btn"
							data-bs-toggle="modal"
							href="#exampleModalToggle4"
							role="button"
						>
							<router-link style="text-decoration: none" to="/dashboard">
								<h1><i class="fa-solid fa-user"></i> Flights Databases</h1>
								<p>view flights database.</p>
							</router-link>
						</button>
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
									<th scope="col">Passenger ID</th>
									<th scope="col">Passenger Name</th>
									<th scope="col">Passenger Surname</th>
									<th scope="col">Passenger Email</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Password</th>
									<th scope="col">Passenger Role</th>
								</tr>
							</thead>
							<tbody
								v-for="passenger in passengers"
								:key="passenger.id"
								:passenger="passenger"
							>
								<tr>
									<td data-label="Passenger ID">{{ passenger.passenger_id }}</td>
									<td data-label="Passenger Name">{{ passenger.pname }}</td>
									<td data-label="Passenger Surname">
										{{ passenger.psurname }}
									</td>
									<td data-label="Passenger Email">{{ passenger.pemail }}</td>
									<td data-label="Passenger Password">
										{{ passenger.password }}
									</td>
									<td data-label="Phone Number">{{ passenger.pcell }}</td>
									<td data-label="Passenger Role">{{ passenger.prole }}</td>
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
			this.$store.dispatch("getPassengers");
			// fetch("https://joint-ecom.herokuapp.com/products")
			//   .then((res) => res.json())
			//   .then((data) => (this.products = data));
		},
		computed: {
			passengers() {
				return this.$store.state.passengers;
				//Returning the current state of the store
				//Must have when looping through properties
			},
		},
		methods: {
		},
	};
</script>
<style scoped>
	#dashboard {
		background-color:  #384a2f;
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
		background-color: black;
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
		gap: 50px;
		background-color: #2b2c4b;
		border-radius: 12px;

	}
	#middle1 {
		width: 31%;
		height: 100%;
		/* border: 1px solid red; */
		border-radius: 12px;
	}
	#middle2 {
		width: 31%;
		height: 100%;
		/* border: 1px solid red; */
		border-radius: 12px;
	}
	#middle3 {
		width: 31%;
		height: 100%;
		/* border: 1px solid red; */
		border-radius: 12px;
	}
	#table {
		width: 100%;
		height: 78%;
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
		border: 5px solid  #384a2f;
		border-radius: 50%;
		height: 75%;
		width: 75%;
		margin: auto;
		aspect-ratio: 1;
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
		border: 3px solid  #384a2f;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		text-align: start;
		display: flex;
		flex-direction: column;
		padding: 25px;
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
		border: 5px solid  #384a2f;
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
		border: 5px solid  #384a2f;
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
		border: 5px solid  #384a2f;
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
		border: 5px solid  #384a2f;
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
		border: 5px solid  #384a2f;
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
		border: 5px solid  #384a2f;
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
		min-width: 350px;
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
		height: 10%;
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
		align-items: center;
		height: 85%;
		width: 100%;
		/* border: 1px solid red; */
	}
	table {
		/* margin-top: 5px; */

		/* border: 1px solid #d9b44a; */
		background-color: #02022e;
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		height: 100%;
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
		background:  #384a2f;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	tr {
		background-color: #02022e;
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
		background:  #384a2f;
		border-radius: 10px;
	}
	table th {
		color: white;
		border-radius: 12px;
		/* border-bottom: 1px solid #0f0f1f; */
	}
	tbody {
		border-radius: 12px;
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
		border-radius: 12px;
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
		width: 100%;
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
		border: 3px solid  #384a2f;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#stock2 {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		border-radius: 12px;
		background-color: #020233;
		border: 3px solid  #384a2f;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	#update {
		border-radius: 12px;
		height: 90%;
		width: 90%;
		/* border: 1px solid red; */
		margin: auto;
		background-color: #02022e;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		border: 3px solid  #384a2f;
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
	.modal {
		border: none !important;
		--bs-modal-border-color: none !important;
		height: 90% !important;
		padding: 20px;
	}
	.btn-close:hover {
		color: red !important;
		text-decoration: none;
		opacity: 0.75;
	}
	.btn-close {
		color: red !important;
	}
	.modal-header {
		background-color: #2b2c4b;
		border: none !important;
	}
	.modal-body {
		background-color: #2b2c4b;
		border: none !important;
	}
	.modal-footer {
		background-color: #2b2c4b;
		border: none !important;
	}
	input {
		background-color: #2b2c4b;
		border: none;
		min-width: 100px;
		color: white;
	}
	#adduser {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* border: 1px solid red; */
	}
	#adduser1 {
		height: 70%;
		width: 50%;
		/* border: 1px solid red; */
	}
	#adduser2 {
		height: 70%;
		width: 50%;
		/* border: 1px solid red; */
	}
	#adduseri {
		background-color: #02022e;
		border-radius: 12px;
		border: 3px solid #384a2f;
		margin-bottom: 10px;
		height: 40px;
	}
</style>
