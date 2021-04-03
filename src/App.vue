<template>
  <div id="app" class="flex-column full-height">
    <canvas
        v-if="debugMode"
        id="debug"
        class="debug-panel"
    />
    <div class="flex-row flex-1 navbar-height">
      <navbar class="flex-1" />
    </div>
    <div class="flex-row flex-1">
      <sidebar class="flex-1" />
      <div class="flex-column flex-1">
        <router-view class="flex-1" />
        <actionbar class="flex-1 actionbar-height" />
      </div>
    </div>
  </div>
</template>

<script>
import { startSimulation } from './simulation'
import { STARTED_DIALOGUE_ACTION } from './store'

export default {
  components: {
    Navbar: () => import('./components/Navbar.vue'),
    Sidebar: () => import('./components/Sidebar.vue'),
    Actionbar: () => import('./components/Actionbar.vue'),
  },
  data: () => ({
    debugMode: false,
  }),
  mounted() {
    startSimulation(this.debugMode)
    this.$store.dispatch(STARTED_DIALOGUE_ACTION, 'conversation')
  },
}
</script>

<style lang="scss">
  @import "../node_modules/nes.icons/css/nes-icons.css";
  @import "./styles/nes.css";
  @import "./styles/_colors.scss";
  @import "./styles/_typography.scss";
  @import "./styles/_spacing.scss";
  @import "./styles/_flex.scss";

  .debug-panel {
    position: absolute;
    width: 30rem;
    height: 15rem;
    right: -20rem;
    top: 6rem;
    z-index: 5;
  }

  html, body {
    font-family: "Press Start 2P";
    background: #212529;
    color: #ffffff;
    height: 100%;
  }

  .full-height { height: 100%; }
  .full-width { width: 100%; }
  .half-width { width: 50%; min-width: 50%; max-width: 50%; }
  .no-opacity { opacity: 0; }
  .solid-opacity { opacity: 1; }

  .navbar-height {
    max-height: 6rem;
  }

  .position-relative { position: relative; }
  .position-absolute { position: absolute; }
  .top-left { top: 0; left: 0; }
  .bottom-center { bottom: 0; left: 0; right: 0; margin: auto; }

  .actionbar-height {
    max-height: 10rem;
  }

  .text-left { text-align: left; }
  .text-right { text-align: right; }
</style>
