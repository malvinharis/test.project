<template>
  <div class="base__text">
    {{ label }}
    <input class="base__button-radio__input" type="text" v-model="value" >
  </div>
</template>
<script>
export default {
  props: {
    label: String,
  },
  data: () => ({
    value: null
  })
}
</script>
<style>
  
</style>