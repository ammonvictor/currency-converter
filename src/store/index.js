import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		baseRates: [
		{ symbol:"AUD", value:1.2635 },
		{ symbol:"BGN", value:1.6563 },
		{ symbol:"BRL", value:3.1373 },
		{ symbol:"CAD", value:1.2508 },
		{ symbol:"CHF", value:0.9646 },
		{ symbol:"CNY", value:6.6562 },
		{ symbol:"CZK", value:22.09 },
		{ symbol:"DKK", value:6.3001 },
		{ symbol:"GBP", value:0.77984 },
		{ symbol:"HKD", value:7.8228 },
		{ symbol:"HRK", value:6.2788 },
		{ symbol:"HUF", value:258.03 },
		{ symbol:"IDR", value:13345.0 },
		{ symbol:"ILS", value:3.5953 },
		{ symbol:"INR", value:64.023 },
		{ symbol:"JPY", value:109.75 },
		{ symbol:"KRW", value:1123.8 },
		{ symbol:"MXN", value:17.652 },
		{ symbol:"MYR", value:4.273 },
		{ symbol:"NOK", value:7.8149 },
		{ symbol:"NZD", value:1.3858 },
		{ symbol:"PHP", value:51.09 },
		{ symbol:"PLN", value:3.6076 },
		{ symbol:"RON", value:3.8942 },
		{ symbol:"RUB", value:59.139 },
		{ symbol:"SEK", value:8.0499 },
		{ symbol:"SGD", value:1.3597 },
		{ symbol:"THB", value:33.31 },
		{ symbol:"TRY", value:3.479 },
		{ symbol:"ZAR", value:13.168 },
		{ symbol:"EUR", value:0.84688 },
		{ symbol:"KES", value:103.15 }
		],
		worldCurrencies: [
		{
			symbol:"USD",
			name:"United State Dollar"
		},
		{
			symbol:"EUR",
			name:"Euro"
		},
		{
			symbol:"SGD",
			name:"Singapore Dollar"
		},
		{
			symbol:"GBP",
			name:"Pound Sterling"
		},
		{
			symbol:"CHF",
			name:"Swiss Franc"
		},
		{
			symbol:"JPY",
			name:"Japanese Yen"
		},
		{
			symbol:"AUD",
			name:"Australian Dollar"
		},
		{
			symbol:"BDT",
			name:"Bangladesh Taka"
		},
		{
			symbol:"BND",
			name:"Brunei Dollar"
		},
		{
			symbol:"KHR",
			name:"Cambodian Riel"
		},
		{
			symbol:"CAD",
			name:"Canadian Dollar"
		},
		{
			symbol:"CNY",
			name:"Chinese Yuan"
		},
		{
			symbol:"HKD",
			name:"Hong Kong Dollar"
		},
		{
			symbol:"INR",
			name:"Indian Rupee"
		},
		{
			symbol:"IDR",
			name:"Indonesian Rupiah"
		},
		{
			symbol:"KRW",
			name:"Korean Won"
		},
		{
			symbol:"LAK",
			name:"Lao Kip"
		},
		{
			symbol:"MYR",
			name:"Malaysian Ringgit"
		},
		{
			symbol:"NZD",
			name:"New Zealand Dollar"
		},
		{
			symbol:"PKR",
			name:"Pakistani Rupee"
		},
		{
			symbol:"PHP",
			name:"Philippines Peso"
		},
		{
			symbol:"LKR",
			name:"Sri Lankan Rupee"
		},
		{
			symbol:"THB",
			name:"Thai Baht"
		},
		{
			symbol:"VND",
			name:"Vietnamese Dong"
		},
		{
			symbol:"BRL",
			name:"Brazilian Real"
		},
		{
			symbol:"CZK",
			name:"Czech Koruna"
		},
		{
			symbol:"DKK",
			name:"Danish Krone"
		},
		{
			symbol:"EGP",
			name:"Egyptian Pound"
		},
		{
			symbol:"ILS",
			name:"Israeli Shekel"
		},
		{
			symbol:"KES",
			name:"Kenya Shilling"
		},
		{
			symbol:"KWD",
			name:"Kuwaiti Dinar"
		},
		{
			symbol:"NPR",
			name:"Nepalese Rupee"
		},
		{
			symbol:"NOK",
			name:"Norwegian Kroner"
		},
		{
			symbol:"RUB",
			name:"Russian Rouble"
		},
		{
			symbol:"SAR",
			name:"Saudi Arabian Riyal"
		},
		{
			symbol:"RSD",
			name:"Serbian Dinar"
		},
		{
			symbol:"ZAR",
			name:"South Africa Rand"
		},
		{
			symbol:"SEK",
			name:"Swedish Krona"
		}
		],
		trades: {
			base: {
				name: "United State Dollar",
				symbol: 'USD',
				value: 1
			},
			exchange: {}
		}
	},
	getters: {
		getWorldCurrencies(state){
			let availableCurrencies = [];
			for (let i = 0; i < state.worldCurrencies.length; i++) {
				for (let j = 0; j < state.baseRates.length; j++) {
					if (state.worldCurrencies[i].symbol === state.baseRates[j].symbol) {
						availableCurrencies.push(state.worldCurrencies[i])
					}
				}
			}
			return availableCurrencies;
			// return state.worldCurrencies;
		},
		getBaseCurrency(state){
			return state.trades.base;
		},
		getExchangeCurrency(state){
			return state.trades.exchange;
		}
	},
	mutations: {
		updateBaseCurrency(state, payload){
			state.trades.base = {
				name : payload.name,
				symbol : payload.symbol
			}
		},
		updateBaseValue(state, value){
			const search = state.baseRates.find(rate => {
				return rate.symbol === state.trades.exchange.symbol
			})
			state.trades.base.value = value

			let exv = search.value * value
			state.trades.exchange.value = parseFloat(exv).toFixed(2)
		},
		updateExchangeCurrency(state, payload){
			const rate = state.baseRates.find(rate => {
				return rate.symbol === payload
			})
			const currency = state.worldCurrencies.find( (c) => c.symbol === payload )

			if( rate ){
				const value = rate.value * state.trades.base.value

				state.trades.exchange = {
					name : currency.name,
					symbol : currency.symbol,
					value: parseFloat(value).toFixed(2)
				}
			}

		}
	},
	actions: {

	}
})