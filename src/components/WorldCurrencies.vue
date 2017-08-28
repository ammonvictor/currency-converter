<template>
	<div class="field">
	  <div class="control has-icons-left">
	    <div class="select">
	      <select v-model="selected" @change="selectedCurrency">
	        <option v-for='currency in currencies' :value='currency.symbol' v-if="currency.symbol != 'USD'">{{ currency.name }}</option>
	      </select>
	    </div>
	    <div class="icon is-small is-left">
	      <i class="fa fa-globe"></i>
	    </div>
	  </div>
	  <!-- <span>Selected: {{ selected }}</span> -->
	</div>
</template>

<script>
	export default {
		data(){
			return {
				selected: {}
			}
		},
		methods: {
			selectedCurrency(){
				this.$emit('updateCurrency', this.selected)
				// console.log(this.selected)
			}
		},
		computed: {
			currencies(){
				return this.$store.getters.getWorldCurrencies;
			}
		}
	}
</script>