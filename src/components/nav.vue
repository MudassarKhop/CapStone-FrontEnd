<template>
	<!-- Navbar -->
	<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <router-link to="/" id="navbar-brand" class="navbar-brand"
						><i class="fa-solid fa-plane-up"></i> OXFORD-AIRLINES</router-link
					>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 300px;">
        
        <li class="nav-item">
          <a class="nav-link" href="#">
			<router-link to="/">Home</router-link>

        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
			<router-link to="/about">About</router-link>

        </a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">
			<router-link to="/flights">Flights</router-link>

        </a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">
			<router-link to="/login">Login</router-link>

        </a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">
			<router-link to="/contactus">Contact Us</router-link>

        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
<script>
</script>
<style scoped>
		@font-face {
		font-family: Von;
		src: url("../assets/Vonique\ 92_D.otf");
	}
	* {
		letter-spacing: 1px;
	}
	.collapse {
  padding-left: 15%;
}
	.navbar {
		background-color: black;
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
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		padding-left: 10px;
		color: white;
		transition: 0.3s ease-in;
		text-decoration: none;
	}
	#navbar-brand {
		margin-top: 15px;
		font-size: 30px;
		font-family: Von;
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
		.collapse {
  padding-left: 0;
}
	}
	@media only screen and (min-width: 1247px)
{.navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
}}
</style>
