<template>
	<!-- Navbar -->
	<nav id="nav" class="navbar navbar-expand-lg">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="container d-flex justify-content-center">
			<div class="row">
				<div class="col-12 d-flex justify-content-center mb-3">
					<router-link to="/" id="navbar-brand" class="navbar-brand"
						><i class="fa-solid fa-plane-up"></i> OXFORD-AIRLINES</router-link
					>
				</div>
				<div class="col-12 d-flex justify-content-center">
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav align-items-center mx-auto">
							<li class="nav-item">
								<router-link to="/">Home</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about">About</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/flights">Flights</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/jets">Jets</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/contactus">Contact Us</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {};
</script>
<style scoped>
	.navbar {
		background-color: #16253d;
		border-bottom: 1px solid #d9b44a;
		min-height: 8vh;
	}
	.btn {
		border: 2px solid #d9b44a;
		transition: 0.5s ease-in;
	}
	.btn:hover {
		background-color: #d9b44a;
		transition: 0.5s ease-in;
	}
	.nav-item {
		font-size: 25px;
		margin-right: 20px;
	}
	.fa-plane-up {
		color: #d9b44a;
	}
	.navbar a.router-link-exact-active {
		color: #d9b44a;
	}
	a {
		padding-left: 10px;
		color: white;
		transition: 0.3s ease-in;
		text-decoration: none;
	}
	#navbar-brand {
		color: white;
	}
	#navbar-brand:hover {
		color: #d9b34ab7;
	}
	a:hover {
		color: #d9b34ab7;
		transition: 0.3s ease-in;
	}
	.navbar-nav .nav-link.active,
	.navbar-nav .show > .nav-link {
		color: #d9b44a;
	}
	.fa-bars {
		color: #d9b44a;
		font-size: 30px;
	}

	@media only screen and (max-width: 996px) {
		#list {
			margin-left: 0;
		}
	}
</style>
