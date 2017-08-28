<template>
	<section class="hero is-medium is-info">
		<div class="hero-body">
			<div class="container">

				<!-- <world-currencies @updateCurrency="update"></world-currencies> -->
				<small>{{ base.symbol }}</small>
				<h1 class="title"> {{ base.name }} </h1>
				
				<div class="field">
				  <div class="control is is-large">
				    <input class="input is-large" type="number" @keyup="updateValue(base)" :placeholder="base.symbol" v-model='base.value'>
				  </div>
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
				this.$store.commit('updateBaseCurrency', payload);
			},
			updateValue(payload){
				// console.log(payload)
				this.$store.commit('updateBaseValue', this.base.value)
				this.$emit('baseValue', this.base.value)
			}
		},
		computed: {
			base(){
				return this.$store.getters.getBaseCurrency;
			}
		}
	}
</script>

<style scoped>
	.is-info .input {
		background: #3273dc;
		color: #fff;
	}
</style>