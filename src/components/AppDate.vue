<template>
  <div class="date">
    <div class="container">
      <div class="date__content">
        <label for="date" class="date__label">Сьогодні:</label>
        <input
          type="date"
          class="date__calendar"
          id="date"
          :value="value"
          :disabled="disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    disabled: Boolean
  }
}
</script>

<style>
</style>
