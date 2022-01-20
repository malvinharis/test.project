<template>
  <div class="app">
    <div class="main">
      <div class="main__wrapper">
        <div class="main__body">
          <!-- Basic Radio Button Component -->
          <section class="main__section">
            <BaseRadioButton :title="radioButton.title" :data="radioButton.data" />
          </section>
          <!-- Sub Component in Radio Button Component -->
          <section class="main__section">
            <BaseRadioButton :title="subcomponent.title" :data="subcomponent.data" />
          </section>
          <!-- Parking System -->
          <section class="main__section">
            <div class="parking">
              <div class="parking__wrapper">
                <div class="parking__title">
                  Parking System
                </div>
                <div class="parking__list">
                  <div class="parking__item">
                    <BaseRadioButton :title="parking.title" :data="parking.data" />
                  </div>
                  <div class="parking__item">
                    <div class="parking__group">
                      <BaseTextField label="Login Time" />
                      <BaseTextField label="Logout Time" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRadioButton from './components/BaseRadioButton.vue'
import BaseTextField from './components/BaseTextField.vue'

export default {
  name: 'App',
  components: {
    BaseRadioButton,
    BaseTextField
  },
  data: () => ({
    radioButton: {
      title: 'Name',
      data: [
      {
        type: 'label',
        value: 'radio a',
        label: 'Radio A'
      },
      {
        type: 'label',
        value: 'radio b',
        label: 'Radio B'
      }
    ]
    },
    subcomponent: {
      title: 'Subcomponent',
      data: [
      {
        type: 'text',
        value: 'text',
        label: 'Text Component'
      },
      {
        type: 'date',
        value: 'date',
        label: 'Date Component'
      },
    ]
    },
    parking: {
      title: 'Type',
      data: [
      {
        type: 'label',
        value: 'motorcycle',
        label: 'Motorcycle'
      },
      {
        type: 'label',
        value: 'Car',
        label: 'Car'
      }
      ]
    }
  })
}
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
