<template>
  <div id="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        loadedRates: {},
        fetchedRates: false
      }
    },
    methods: {
      init(){
        let _self = this

        if (_self.fetchedRates) {
          console.log('data fetcehd')
          return
        } else {
          _self.loadedRates = {"base":"USD","date":"2017-08-25","rates":{"AUD":1.2635,"BGN":1.6563,"BRL":3.1373,"CAD":1.2508,"CHF":0.9646,"CNY":6.6562,"CZK":22.09,"DKK":6.3001,"GBP":0.77984,"HKD":7.8228,"HRK":6.2788,"HUF":258.03,"IDR":13345.0,"ILS":3.5953,"INR":64.023,"JPY":109.75,"KRW":1123.8,"MXN":17.652,"MYR":4.273,"NOK":7.8149,"NZD":1.3858,"PHP":51.09,"PLN":3.6076,"RON":3.8942,"RUB":59.139,"SEK":8.0499,"SGD":1.3597,"THB":33.31,"TRY":3.479,"ZAR":13.168,"EUR":0.84688}}
          // axios
          //   .get('http://api.fixer.io/latest?base=USD')
          //   .then( res => {
          //     console.log(res.data)
          //     _self.loadedRates = res.data
          //   })
          //   .catch( err => {
          //     console.log(err)
          //   })
        }
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
