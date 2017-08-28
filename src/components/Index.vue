<template>
  <div class="index">
    <base-rate></base-rate>
    <exchange-rate></exchange-rate>
  </div>
</template>

<script>
import BaseRate from './BaseRate'
import ExchangeRate from './ExchangeRate'

export default {
  name: 'home',
  components: { BaseRate, ExchangeRate }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>