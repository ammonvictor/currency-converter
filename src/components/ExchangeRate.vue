<template>
	<section class="hero is-medium is-primary">
		<div class="hero-body">
			<div class="container">
				
				<world-currencies @updateCurrency="update"></world-currencies>
				<div v-if='exchange.symbol'>
					<small>{{ exchange.symbol }}</small>
					<h1 class="title"> {{ exchange.name }} </h1>
					
					<div class="field">
					  <div class="control is is-large">
					    <input class="input is-large" type="number" :placeholder="exchange.symbol" v-model='exchange.value' disabled="disabled">
					  </div>
					</div>
				</div>
				<div v-else>
					<h1 class="title">Select a Currency</h1>
				</div>			
			</div>
		</div>
	</section>
</template>

<script>
	import WorldCurrencies from './WorldCurrencies'

	export default {
		components: { WorldCurrencies },

		methods:{
			update(payload){
				this.$store.commit('updateExchangeCurrency', payload);
			},
			numberWithCommas(x) {
			    var parts = x.toString().split(".");
			    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			    return parts.join(".");
			}
		},
		computed: {
			exchange(){
				return this.$store.getters.getExchangeCurrency;
			}
		}
	}
</script>

<style scoped>
	.is-primary .input {
		background: #00d1b2;
		color: #fff;
	}
</style>