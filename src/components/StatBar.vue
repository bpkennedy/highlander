<template>
  <div class="">
    <label :for="label">{{label}}</label>
    <div class="position-relative">
      <div class="label-container">
        <div class="flex-row full-height justify-center align-center">
          <div
              class="flex-1"
              :class="textColor"
          >
            {{val + '/' + max}}
          </div>
        </div>
      </div>
      <progress
          :id="label"
          class="nes-progress"
          :class="barColor"
          :value="val"
          :max="max"
      />
    </div>
  </div>
</template>

<script>
import { PROGRESS_COLOR_CLASSES, FONT_COLOR_CLASSES } from '../constants'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    barColor: {
      type: String,
      default: 'progress-color-primary-normal',
      validator: function (value) {
        return PROGRESS_COLOR_CLASSES.includes(value)
      },
    },
    textColor: {
      type: String,
      default: 'color-dark-normal',
      validator: function (value) {
        return FONT_COLOR_CLASSES.includes(value)
      },
    },
    val: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  }
}
</script>

<style lang="scss">
  .label-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .center-by-flex {
    display: flex;
  }
</style>
