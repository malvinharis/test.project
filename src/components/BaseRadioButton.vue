<template>
  <div class="base__button-radio">
    <div class="base__button-radio__title">
      {{ title }}
    </div>
    <div class="base__button-radio__list" v-for="(item, idx) in data" :key="idx">
      <input class="base__button-radio__input" type="radio" v-model="value" :value="item.value"> 
      <!-- Label Slot-->
      <template v-if="item.type === 'label' ">
        <div class="base__button-radio__label">
          {{ item.label }}
        </div>
      </template>
      <!-- Text Field Slot -->
      <template v-if="item.type === 'text' ">
        <BaseTextField :label="item.label" />
      </template>
      <!-- Date Input Slot -->
      <template v-if="item.type === 'date' ">
        <BaseDateField :label="item.label"/>
      </template>
    </div>
  </div>
</template>
<script>

import BaseTextField from './BaseTextField.vue'
import BaseDateField from './BaseDateField.vue'

export default {
  props: {
    title: String,
    data: Array
  },
  components:{
    BaseTextField,
    BaseDateField
  },
  data: () => ({
    value: null
  })
}
</script>
<style>
  
</style>