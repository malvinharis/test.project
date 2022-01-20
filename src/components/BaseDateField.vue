<template>
  <div class="base__date">
    {{ label }}
    <input class="base__date-input" type="date" v-model="value" >
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