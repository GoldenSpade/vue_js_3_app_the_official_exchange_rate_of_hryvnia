<template>
  <section class="currencies">
    <div class="container">
      <div class="currencies__content">
        <h2 class="currencies__title">Банківські метали</h2>

        <div class="table">
          <div class="table-content">
            <div class="table-head">
              <div class="table-item table-item--hide">Метал</div>
              <div class="table-item table-item--hide">Назва</div>
              <div class="table-item table-item--hide">
                Курс НБУ <br />(грн / тр.ун.)
              </div>
              <div class="table-item table-item--hide">
                Вартість <br />(грн / г.)
              </div>
              <div class="table-item table-item--hide">
                Хочу <br />придбати (г.)
              </div>
              <div class="table-item table-item--hide">
                Результат <br />(грн.)
              </div>
              <div class="table-item table-item--hide">Дата</div>
            </div>

            <div class="table-row" v-for="item in bankMetals" :key="item.r030">
              <div class="table-item table-item--bold table-item--blue">
                {{ item.cc }}
              </div>
              <div class="table-item">{{ item.txt }}</div>
              <div class="table-item table-item--bold">{{ item.rate }}</div>
              <div class="table-item table-item--hide">
                {{ (item.rate / 31.1035).toFixed(2) }}
              </div>
              <div class="table-item">
                <input
                  type="text"
                  class="table-item__input"
                  v-model.number="metPlaceholder"
                  @input="checkInput(metPlaceholder)"
                />
              </div>
              <div class="table-item table-item--bold table-item--blue">
                {{ ((item.rate / 31.1035) * metPlaceholder).toFixed(2) }}
              </div>
              <div class="table-item table-item--hide-metals">
                {{ item.exchangedate }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bankMetals: Array
  },
  data () {
    return {
      metPlaceholder: 1
    }
  },
  methods: {
    checkInput (input) {
      if (typeof input === 'string' && input.length !== 0) {
        alert('Будь ласка, введіть число.')
        this.metPlaceholder = 1
      }
    }
  }
}

</script>

<style >
</style>
