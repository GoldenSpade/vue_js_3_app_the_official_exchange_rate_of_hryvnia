<template>
  <div class="button__content">
    <button
      :class="['button', { button__if: showAllCurrencies }]"
      @click="$emit('showAll')"
    >
      {{ !showAllCurrencies ? "Всі валюти" : "Менше валют" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    showAllCurrencies: Boolean
  },
  emits: ['showAll']
}
</script>

<style>
</style>
