<template>
	<section id="login">
		<div class="mother">
			<div class="child1">
				<form
					style="margin: auto"
					@submit.prevent="login"
					class="text-light border border-dark p-5 rounded-5 w-75"
				>
					<h2 class="display-3 fw-bolder text-center mb-4">Admin Login</h2>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label"
							>Email address</label
						>
						<input
							v-model="pemail"
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter Email"
							required
						/>

						<div v-if="msg === 'email not found'" class="text-center m-5">
							<h2>{{ msg }}</h2>
						</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label"
							>Password</label
						>
						<input
							v-model="password"
							type="password"
							class="form-control"
							placeholder="Enter Password"
							required
						/>
						<div v-if="msg === 'Password Incorrect'" class="text-center m-5">
							<h2>{{ msg }}</h2>
						</div>
					</div>
					<div class="reg">
						<router-link to="/register">
							Don't have an account? Register Here
						</router-link>
					</div>

					<button
						type="submit"
						class="btn d-flex justify-content-center mx-auto w-100"
					>
						Submit
					</button>
				</form>
			</div>
			<div class="child2">
				<div class="icons">
					<a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
					<a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
					<a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		computed: {
			user() {
				return this.$store.state.user;
			},
		},

		data() {
			return {
				pemail: "",
				password: "",
			};
		},
		methods: {
			login() {
				this.$store.dispatch("login", {
					pemail: this.pemail,
					password: this.password,
				});
			},
		},
	};
</script>
<style scoped>
	#login {
		height: 85vh;
		background-color: #222222;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		padding: 20px;
	}
	.mother {
		min-width: 60%;
		height: 80vh;
		background-color: #222c1d;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	.child1 {
		width: 50%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.312);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
	}
	.heading {
		height: 20%;
		width: 100%;
		color: white;
	}
	.child2 {
		width: 50%;
		height: 100%;
	}
	.fa-plane-up {
		color: #d9b44a;
	}
	.fa-linkedin {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
	.fa-whatsapp {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
	.fa-instagram {
		font-size: 28px;
		display: inline-block;
		background: #183c38;
		color: white;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 45px;
		transition: 0.3s;
		border: 1px solid #b1b942;
		transition: 1s;
	}
</style>
