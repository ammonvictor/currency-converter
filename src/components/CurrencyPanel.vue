<template>
	<section class="hero is-medium" :class="{ 'is-info': trade == 'base', 'is-primary': trade == 'exchange' }">
		<div class="hero-body">
			<div class="container">

				<small>{{ exchange.symbol }}</small>
				<h1 class="title"> {{ exchange.title }} </h1>
				
				<div class="field">
				  <div class="control is is-large">
				    <input class="input is-large" type="number" placeholder="USD" :value='exchange.default'>
				  </div>
				</div>
				
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['exchange', 'trade']
	}
</script>

<style scoped>
	.is-info .input {
		background: #3273dc;
		color: #fff;
	}
	.is-primary .input {
		background: #00d1b2;
		color: #fff;
	}
</style>