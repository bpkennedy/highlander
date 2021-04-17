<template>
  <div class="nes-container with-title is-centered is-dark">
    <span class="title position-relative z-2">
      Main panel
    </span>
    <canvas id="game" oncontextmenu="return false;"/>
  </div>
</template>

<script>
import { initGame } from '../simulation/game'

export default {
  mounted() {
    initGame('alley')
  }
}
</script>

<style lang="scss">
#game {
  width: 100%;
  height: 100%;
}
</style>
