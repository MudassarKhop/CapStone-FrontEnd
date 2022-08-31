<template>
	<div class="card"></div>
</template>
<script>
	import { computed } from '@vue/runtime-core';
		export default {

	           computed:{
	                  props:{"id"};
	               flights(){
	                       console.log(this.$store.state.flights);
	             return this.$store.state.flights;
	               }
	           }
	       };
</script>
<style scoped></style>
