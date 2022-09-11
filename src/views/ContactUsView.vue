<template>
	<section id="contact">
			<div id="form">
				<form
  action="https://formspree.io/f/xeqdenlz"
  method="POST"
>
<div id="heading">
	<h1>Contact <span>Us</span></h1>
							<p>Send us a message with your question.</p>
</div>
<div id="inputts">

	<div class="group">
		<input type="text" name="fullname" required />
		<span class="highlight"></span>
		<span class="bar"></span>
		<label>Full Name</label>
	</div>
	<div class="group">
		<input type="text" name="email" required />
		<span class="highlight"></span>
		<span class="bar"></span>
		<label>Email</label>
	</div>
	<div class="group">
		<input type="text" name="phone number" required />
		<span class="highlight"></span>
		<span class="bar"></span>
		<label>Phone Number</label>
	</div>
	<div class="group">
		<input type="text" name="message" required />
		<span class="highlight"></span>
		<span class="bar"></span>
		<label>Message</label>
	</div>
</div>
  <!-- your other form fields go here -->
  <button class="btn text-light" type="submit">Send</button>
</form></div>

	</section>
</template>
<script>
</script>
<style scoped>
	#contact {
		background-color: #222222;
		min-height: 80vh;
		/* padding-top: 4%; */

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#form{
width: 500px;
padding: 50px;
border-radius: 12px;
background-color: #222c1d;
height: 90%;
border: 1px solid #d9b44a;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
	}
	.group {
		position: relative;
		margin-bottom: 25px;
	}
	#heading{
		margin-bottom: 30px;
	}
	#heading h1{
		color: white;
	}
	#heading p{
		color: white;
	}
	span{
		color: #d9b44a;
	}
	input {
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 300px;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #757575;
		color: white;
	}
	.btn{
		margin-top: 30px;
		width: 200px;
		border: 1px solid #d9b44a;
	}
	input:focus {
		outline: none;
	}
	/* LABEL ======================================= */
	label {
		color: #999;
		font-size: 18px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
	}
	/* active state */
	input:focus ~ label,
	input:valid ~ label {
		top: -20px;
		font-size: 14px;
		color: #d9b44a;
	}
	/* BOTTOM BARS ================================= */
	.bar {
		position: relative;
		display: block;
		width: 300px;
	}
	.bar:before,
	.bar:after {
		content: "";
		height: 2px;
		width: 0;
		bottom: 1px;
		position: absolute;
		background: #d9b44a;
		transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
	}
	.bar:before {
		left: 50%;
	}
	.bar:after {
		right: 50%;
	}
	/* active state */
	input:focus ~ .bar:before,
	input:focus ~ .bar:after {
		width: 50%;
	}
	/* HIGHLIGHTER ================================== */
	.highlight {
		position: absolute;
		height: 60%;
		width: 100px;
		top: 25%;
		left: 0;
		pointer-events: none;
		opacity: 0.5;
	}
	/* active state */
	input:focus ~ .highlight {
		-webkit-animation: inputHighlighter 0.3s ease;
		-moz-animation: inputHighlighter 0.3s ease;
		animation: inputHighlighter 0.3s ease;
	}
	/* ANIMATIONS ================ */
	@-moz-keyframes inputHighlighter {
		from {
			background: #d9b44a;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@keyframes inputHighlighter {
		from {
			background: #d9b44a;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@media only screen and (max-width: 800px) {
		/* #contactform{
    flex-direction: column;
	width: 120%;
    min-height: 90vh;
		}
		#picture{
min-width: 100%;
min-height: 50%;
		}
		#picture img{ */

			#form{
				padding: 30px;
				min-width: 100%;
				min-height: 50%;
			}
			form{
				padding: 20px;
				min-height: 50%;
			}
			.btn{
				margin-top: 0;
			}
		}
	

</style>
