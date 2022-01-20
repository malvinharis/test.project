<template>
  <div class="base__text">
    {{ label }}
    <input class="base__button-radio__input" type="text" v-on:input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue" >
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  methods:{
    
  }
}
</script>
<style>
  
</style>