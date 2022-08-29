<template>
	<nav id="nav" class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<a class="navbar-brand text-light" href="#"
				><i class="fa-solid fa-plane-up"></i> OXFORD-AIRLINES</a
			>
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
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul id="list" class="navbar-nav me-auto mb-2 mb-lg-0">
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
						<router-link to="/contact">Contact Us</router-link>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn text-light" type="submit">Search</button>
				</form>
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
	#list {
		margin-left: 29%;
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
	a:hover {
		color: #d9b34ab7;
		transition: 0.3s ease-in;
	}
	.navbar-nav .nav-link.active,
	.navbar-nav .show > .nav-link {
		color: #d9b44a;
	}
	@media only screen and (max-width: 996px) {
		#list {
			margin-left: 0;
		}
	}
</style>
