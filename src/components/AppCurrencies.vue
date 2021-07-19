<template>
  <section class="currencies">
    <div class="container">
      <div class="currencies__content">
        <h2 class="currencies__title">Валюти</h2>

        <div class="table">
          <div class="table-content">
            <div class="table-head">
              <div class="table-item table-item--hide">Валюта</div>
              <div class="table-item table-item--hide">Назва</div>
              <div class="table-item table-item--hide">Курс НБУ (грн)</div>
              <div class="table-item table-item--hide">Хочу <br />придбати</div>
              <div class="table-item table-item--hide">
                Результат <br />(грн.)
              </div>
              <div class="table-item table-item--hide">Дата</div>
            </div>

            <div>
              <div
                class="table-row"
                v-for="item in firstCurrencies"
                :key="item.r030"
              >
                <div class="table-item table-item--bold table-item--blue">
                  {{ item.cc }}
                </div>
                <div class="table-item">{{ item.txt }}</div>
                <div class="table-item table-item--bold">{{ item.rate }}</div>
                <div class="table-item">
                  <input
                    type="text"
                    class="table-item__input"
                    v-model.number="curPlaceholder"
                    @input="checkInput(curPlaceholder)"
                  />
                </div>
                <div class="table-item table-item--bold table-item--blue">
                  {{ (item.rate * this.curPlaceholder).toFixed(2) }}
                </div>
                <div class="table-item table-item--hide">
                  {{ item.exchangedate }}
                </div>
              </div>
            </div>

            <div v-if="showAllCurrencies">
              <div
                class="table-row"
                v-for="item in otherCurrencies"
                :key="item.r030"
              >
                <div class="table-item table-item--bold table-item--blue">
                  {{ item.cc }}
                </div>
                <div class="table-item">{{ item.txt }}</div>
                <div class="table-item table-item--bold">{{ item.rate }}</div>
                <div class="table-item">
                  <input
                    type="text"
                    class="table-item__input"
                    v-model.number="curPlaceholder"
                    @input="checkInput(curPlaceholder)"
                  />
                </div>
                <div class="table-item table-item--bold table-item--blue">
                  {{ (item.rate * this.curPlaceholder).toFixed(2) }}
                </div>
                <div class="table-item table-item--hide">
                  {{ this.thisDate.split("-").reverse().join(".") }}
                </div>
              </div>
            </div>
          </div>

          <app-button
            :showAllCurrencies="showAllCurrencies"
            @showAll="showAllCurrencies = !showAllCurrencies"
          ></app-button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '../components/AppButton.vue'
export default {
  props: {
    thisDate: String,
    firstCurrencies: Array,
    otherCurrencies: Array
  },
  data () {
    return {
      curPlaceholder: 100,
      showAllCurrencies: false
    }
  },
  methods: {
    checkInput (input) {
      if (typeof input === 'string' && input.length !== 0) {
        alert('Будь ласка, введіть число.')
        this.curPlaceholder = 100
      }
    }
  },
  components: { AppButton }
}

</script>

<style>
</style>
