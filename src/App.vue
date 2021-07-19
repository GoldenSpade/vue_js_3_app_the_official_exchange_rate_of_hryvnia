<template>

  <app-header>
    Офіційний курс гривні до іноземних валют та облікова ціна банківських
    металів
  </app-header>

  <app-date :value="thisDate" disabled></app-date>

  <app-loader v-if="this.loader"></app-loader>

  <app-currencies
    v-cloak
    v-if="!this.loader"
    :thisDate="thisDate"
    :firstCurrencies="firstCurrencies"
    :otherCurrencies="otherCurrencies"
  ></app-currencies>

  <app-metals
    v-cloak
    v-if="!this.loader"
    :bankMetals="bankMetals"
  ></app-metals>

<app-footer
    v-cloak
    v-if="!this.loader"
    >
      © Copyright <span>{{ this.thisDate.slice(0, 4) }}</span>.
      All rights reserved.
</app-footer>

</template>

<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppDate from './components/AppDate.vue'
import AppLoader from './components/AppLoader.vue'
import AppCurrencies from './components/AppCurrencies.vue'
import AppMetals from './components/AppMetals.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data () {
    return {
      currencies: [],
      loader: true,
      thisDate: new Date()
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('.')
        .replace(/\./g, '-')
    }
  },
  mounted () {
    setTimeout(() => {
      axios
        .get(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${this.thisDate.replace(
            /-/g,
            ''
          )}&json`
        )
        .then((response) => {
          this.currencies = response.data
          this.loader = false
        })
        .catch((error) => {
          console.log(
            error,
            'Помилка бази даних. Будь ласка, спробуйте пізніше.'
          )
          alert('Помилка бази даних. Будь ласка, спробуйте пізніше.')
          this.loader = false
        })
    }, 1000)
  },
  computed: {
    firstCurrencies () {
      let arr = []

      arr = this.currencies.filter(
        (x) =>
          x.cc === 'USD' || x.cc === 'EUR' || x.cc === 'PLN' || x.cc === 'RUB'
      )

      arr.map((x) => {
        if (x.cc === 'USD') {
          x.id = 1
        }
        if (x.cc === 'EUR') {
          x.id = 2
        }
        if (x.cc === 'PLN') {
          x.id = 3
        }
        if (x.cc === 'RUB') {
          x.id = 4
        }
      })

      arr.sort((a, b) => a.id - b.id)

      return arr
    },
    otherCurrencies () {
      let arr = []

      arr = this.currencies.filter(
        (x) =>
          x.cc !== 'USD' &&
          x.cc !== 'EUR' &&
          x.cc !== 'PLN' &&
          x.cc !== 'RUB' &&
          x.cc !== 'XAU' &&
          x.cc !== 'XAG' &&
          x.cc !== 'XPT' &&
          x.cc !== 'XPD'
      )

      arr.sort((a, b) => a.cc.localeCompare(b.cc))

      return arr
    },
    bankMetals () {
      let arr = []

      arr = this.currencies.filter(
        (x) =>
          x.cc === 'XAU' || x.cc === 'XAG' || x.cc === 'XPT' || x.cc === 'XPD'
      )

      arr.map((x) => {
        if (x.cc === 'XAU') {
          x.id = 1
        }
        if (x.cc === 'XAG') {
          x.id = 2
        }
        if (x.cc === 'XPT') {
          x.id = 3
        }
        if (x.cc === 'XPD') {
          x.id = 4
        }
      })

      arr.sort((a, b) => a.id - b.id)

      return arr
    }
  },
  components: {
    AppHeader,
    AppDate,
    AppLoader,
    AppCurrencies,
    AppMetals,
    AppFooter
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
